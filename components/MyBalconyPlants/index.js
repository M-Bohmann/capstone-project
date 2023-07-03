import PlantCard from "../PlantCard";
import {
  DeletePlantButton,
  MyBalconyPlantsList,
  PlantCardWrapper,
} from "./MyBalconyPlants.styled";
import Link from "next/link";

export default function MyBalconyPlants({ balconyPlants, deleteBalconyPlant }) {
  return (
    <MyBalconyPlantsList>
      {balconyPlants.map((plant) => (
        <li key={plant.uid}>
          <PlantCardWrapper>
            <DeletePlantButton onClick={() => deleteBalconyPlant(plant)}>
              −
            </DeletePlantButton>
            <Link href={`/plants/${plant.id}`}>
              <PlantCard plant={plant} />{" "}
            </Link>
          </PlantCardWrapper>
        </li>
      ))}
    </MyBalconyPlantsList>
  );
}
