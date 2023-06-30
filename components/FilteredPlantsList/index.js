import PlantCard from "../PlantCard";
import Link from "next/link";
import {
  AddPlantButton,
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";
import { useStore } from "@/pages/_app";
import { uid } from "uid";
import { PlantCardWrapper } from "../MyBalconyPlants/MyBalconyPlants.styled";

export default function FilteredPlantsList({ filterPlants }) {
  const addBalconyPlant = useStore((state) => state.addBalconyPlant);

  return (
    <HorizontalScrollList>
      {filterPlants.map((plant) => (
        <PlantCardListItem key={plant.id}>
          <PlantCardWrapper>
            {" "}
            <AddPlantButton
              onClick={() => addBalconyPlant({ ...plant, uid: uid() })}
            >
              ＋
            </AddPlantButton>
            <Link href={`/plants/${plant.id}`}>
              <PlantCard plant={plant} />
            </Link>
          </PlantCardWrapper>
        </PlantCardListItem>
      ))}
    </HorizontalScrollList>
  );
}
