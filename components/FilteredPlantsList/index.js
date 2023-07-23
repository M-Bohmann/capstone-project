import PlantCard from "../PlantCard";
import {
  AddPlantButton,
  AddPlantSvg,
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";
import { PlantCardWrapper } from "../MyBalconyPlants/MyBalconyPlants.styled";
import useSWR from "swr";
import { DetailsPageLink } from "../PlantsList/PlantsList.styled";

export default function FilteredPlantsList({ filter }) {
  const { data: plants, isLoading, error } = useSWR("/api/plants");
  const { data: balconyPlants } = useSWR("/api/balconyPlants");
  const { mutate } = useSWR("/api/balconyPlants");

  function getFilteredPlants() {
    const filteredPlants = plants.filter((plant) => {
      return (
        (filter.usageType === "" || plant.usageType === filter.usageType) &&
        (filter.lightRequirements === "" ||
          plant.lightRequirements.includes(filter.lightRequirements)) &&
        (filter.growthHeight === "" ||
          filter.growthHeight >= plant.growthHeight) &&
        (filter.hardy === "" || plant.hardy === filter.hardy) &&
        (filter.nectar === "" || plant.nectar >= filter.nectar) &&
        (filter.pollen === "" || plant.pollen >= filter.pollen)
      );
    });
    return filteredPlants;
  }

  async function handleClick(plant) {
    const response = await fetch("/api/balconyPlants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });

    if (response.ok) {
      mutate();
    }
  }

  if (isLoading) {
    return <div>Pflanzen werden geladen...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const filteredPlants = getFilteredPlants();

  if (filteredPlants.length === 0) {
    return <div>Es wurden keine Pflanzen zu deinen Kriterien gefunden.</div>;
  }

  return (
    <HorizontalScrollList>
      {filteredPlants.map((plant) => (
        <PlantCardListItem key={plant._id}>
          <PlantCardWrapper>
            {(balconyPlants &&
              balconyPlants.some(
                (balconyPlant) => balconyPlant._id === plant._id
              )) || (
              <AddPlantButton
                onClick={() => handleClick(plant)}
                aria-label="Pflanze zu deinem Balkon hinzufügen"
              >
                <AddPlantSvg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                >
                  <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
                </AddPlantSvg>
              </AddPlantButton>
            )}
            <DetailsPageLink href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </DetailsPageLink>
          </PlantCardWrapper>
        </PlantCardListItem>
      ))}
    </HorizontalScrollList>
  );
}
