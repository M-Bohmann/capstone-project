import GlobalStyle from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [filteredPlants, setFilteredPlants] = useLocalStorageState(
    "filteredPlants",
    {
      defaultValue: undefined,
    }
  );

  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: [],
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
        />
        <NavBar />
      </SWRConfig>
    </>
  );
}
