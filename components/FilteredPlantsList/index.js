import PlantCard from "../PlantCard";
import Link from "next/link";
import {
  AddPlantButton,
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";
import { PlantCardWrapper } from "../MyBalconyPlants/MyBalconyPlants.styled";

export default function FilteredPlantsList({
  filteredPlants,
  addPlantToBalcony,
}) {
  return (
    <HorizontalScrollList>
      {filteredPlants.map((plant) => (
        <PlantCardListItem key={plant.id}>
          <PlantCardWrapper>
            {" "}
            <AddPlantButton onClick={() => addPlantToBalcony(plant)}>
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
