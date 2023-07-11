import PlantCard from "../PlantCard";
import Link from "next/link";
import {
  AddPlantButton,
  HorizontalScrollList,
  PlantCardListItem,
} from "./FilteredPlantsList.styled";
import { PlantCardWrapper } from "../MyBalconyPlants/MyBalconyPlants.styled";
import useSWR from "swr";

export default function FilteredPlantsList({ filteredPlants }) {
  const { mutate } = useSWR("/api/balconyPlants");

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
  if (!filteredPlants) {
    return <h1>Loading...</h1>;
  }
  return (
    <HorizontalScrollList>
      {filteredPlants.map((plant) => (
        <PlantCardListItem key={plant._id}>
          <PlantCardWrapper>
            <AddPlantButton onClick={() => handleClick(plant)}>
              ＋
            </AddPlantButton>
            <Link href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </Link>
          </PlantCardWrapper>
        </PlantCardListItem>
      ))}
    </HorizontalScrollList>
  );
}
