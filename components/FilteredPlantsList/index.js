import PlantCard from "../PlantCard";
import Link from "next/link";
import {
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";
import { useStore } from "@/pages/_app";

export default function FilteredPlantsList({ filterPlants }) {
  const addBalconyPlant = useStore((state) => state.addBalconyPlant);

  return (
    <HorizontalScrollList>
      {filterPlants.map((plant) => (
        <PlantCardListItem key={plant.id}>
          <button onClick={() => addBalconyPlant(plant)}>＋</button>
          <Link href={`/plants/${plant.id}`}>
            <PlantCard plant={plant} />
          </Link>
        </PlantCardListItem>
      ))}
    </HorizontalScrollList>
  );
}
