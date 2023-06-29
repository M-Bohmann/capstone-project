import PlantCard from "../PlantCard";
import Link from "next/link";
import {
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";

export default function FilteredPlantsList({ filterPlants }) {
  return (
    <HorizontalScrollList>
      {filterPlants.map((plant) => (
        <PlantCardListItem key={plant.id}>
          <Link href={`/plants/${plant.id}`}>
            <PlantCard plant={plant} />
          </Link>
        </PlantCardListItem>
      ))}
    </HorizontalScrollList>
  );
}
