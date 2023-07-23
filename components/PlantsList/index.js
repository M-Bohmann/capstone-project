import PlantCard from "../PlantCard";
import { DetailsPageLink, StyledPlantsList } from "./PlantsList.styled";
import useSWR from "swr";

export default function PlantsList({ searchedPlants, searchInput }) {
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  if (isLoading) {
    return <div>Wird geladen...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StyledPlantsList>
      {searchInput === "" ? (
        plants.map((plant) => (
          <li key={plant._id}>
            <DetailsPageLink href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </DetailsPageLink>
          </li>
        ))
      ) : searchedPlants.length > 0 ? (
        searchedPlants.map((plant) => (
          <li key={plant._id}>
            <DetailsPageLink href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </DetailsPageLink>
          </li>
        ))
      ) : (
        <p>Keine Pflanze gefunden.</p>
      )}
    </StyledPlantsList>
  );
}
