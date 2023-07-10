import PlantCard from "../PlantCard";
import { StyledPlantsList } from "./PlantsList.styled";
import Link from "next/link";
import useSWR from "swr";

export default function PlantsList({ searchedPlants, searchInput }) {
  const { data: plants, isLoading } = useSWR("/api/plants");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!plants) {
    return;
  }

  return (
    <StyledPlantsList>
      {searchInput === "" ? (
        plants.map((plant) => (
          <li key={plant._id}>
            <Link href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </Link>
          </li>
        ))
      ) : searchedPlants.length > 0 ? (
        searchedPlants.map((plant) => (
          <li key={plant._id}>
            <Link href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </Link>
          </li>
        ))
      ) : (
        <p>Keine Pflanze gefunden.</p>
      )}
    </StyledPlantsList>
  );
}
