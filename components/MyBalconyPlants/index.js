import PlantCard from "../PlantCard";
import {
  DeletePlantButton,
  MyBalconyPlantsList,
  PlantCardWrapper,
} from "./MyBalconyPlants.styled";
import Link from "next/link";
import useSWR from "swr";

export default function MyBalconyPlants({ deleteBalconyPlant }) {
  const { data: balconyPlants } = useSWR("/api/balconyPlants", {
    fallbackData: [],
  });

  return (
    <MyBalconyPlantsList>
      {balconyPlants.map((plant) => (
        <li key={plant._id}>
          <PlantCardWrapper>
            <DeletePlantButton onClick={() => deleteBalconyPlant(plant)}>
              −
            </DeletePlantButton>
            <Link href={`/plants/${plant._id}`}>
              <PlantCard plant={plant} />
            </Link>
          </PlantCardWrapper>
        </li>
      ))}
    </MyBalconyPlantsList>
  );
}
