import { plants } from "@/lib/plants";
import PlantCard from "../PlantCard";
import { StyledPlantsList } from "./PlantsList.styled";
import Link from "next/link";

export default function PlantsList({ searchedPlants, searchInput }) {
  const showAllPlants = searchedPlants.length === 0;
  return (
    <StyledPlantsList>
      {searchInput === "" ? (
        plants.map((plant) => (
          <li key={plant.id}>
            <Link href={`/plants/${plant.id}`}>
              <PlantCard plant={plant} />
            </Link>
          </li>
        ))
      ) : searchedPlants.length > 0 ? (
        searchedPlants.map((plant) => (
          <li key={plant.id}>
            <Link href={`/plants/${plant.id}`}>
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
