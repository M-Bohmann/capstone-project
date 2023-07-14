import GlobalStyle from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "@/components/NavBar";
import { SWRConfig } from "swr";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [filteredPlants, setFilteredPlants] = useLocalStorageState(
    "filteredPlants",
    {
      defaultValue: [],
    }
  );

  const [balconyPlants, setBalconyPlants] = useLocalStorageState(
    "balconyPlants",
    { defaultValue: [] }
  );

  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: [],
  });

  function addPlantToBalcony(plant) {
    setBalconyPlants([...balconyPlants, { ...plant, uid: uid() }]);
  }

  function deleteBalconyPlant(plant) {
    setBalconyPlants(
      balconyPlants.filter((existingPlant) => {
        return plant.uid !== existingPlant.uid;
      })
    );
  }

  async function fetchPlants() {
    const response = await fetch("/api/plants");
    const data = await response.json();
    setFilteredPlants(data);
  }

  useEffect(() => {
    fetchPlants();
  });

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          setFilteredPlants={setFilteredPlants}
          filteredPlants={filteredPlants}
          setFilter={setFilter}
          filter={filter}
          balconyPlants={balconyPlants}
          addPlantToBalcony={addPlantToBalcony}
          deleteBalconyPlant={deleteBalconyPlant}
        />
        <NavBar />
      </SWRConfig>
    </>
  );
}
