import PlantCard from "../PlantCard";
import {
  DeletePlantButton,
  MyBalconyPlantsList,
  PlantCardWrapper,
} from "./MyBalconyPlants.styled";
import Link from "next/link";
import useSWR from "swr";

export default function MyBalconyPlants() {
  const { data: balconyPlants } = useSWR("/api/balconyPlants", {
    fallbackData: [],
  });

  async function handleDelete(id) {
    const response = await fetch(`/api/balconyPlants/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <MyBalconyPlantsList>
      {balconyPlants.map((plant) => (
        <li key={plant._id}>
          <PlantCardWrapper>
            <DeletePlantButton onClick={() => handleDelete(plant._id)}>
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
