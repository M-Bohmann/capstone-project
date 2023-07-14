import PlantCard from "../PlantCard";
import UserIcon from "../UserIcon";
import {
  DeletePlantButton,
  MyBalconyPlantsList,
  PlantCardWrapper,
} from "./MyBalconyPlants.styled";
import Link from "next/link";
import useSWR, { mutate } from "swr";

export default function MyBalconyPlants() {
  const { data: balconyPlants } = useSWR("/api/balconyPlants", {
    fallbackData: [],
  });

  async function handleDelete(id) {
    const response = await fetch(`/api/balconyPlants/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate("/api/balconyPlants");
    }
  }

  return (
    <MyBalconyPlantsList>
      {balconyPlants.map((plant) => (
        <li key={plant._id}>
          <PlantCardWrapper>
            <DeletePlantButton onClick={() => handleDelete(plant._id)}>
              −
            </DeletePlantButton>
            {plant.isUserPlant && <UserIcon />}
            <Link
              href={
                plant.isUserPlant
                  ? `/userPlants/${plant._id}`
                  : `/plants/${plant._id}`
              }
            >
              <PlantCard plant={plant} />
            </Link>
          </PlantCardWrapper>
        </li>
      ))}
    </MyBalconyPlantsList>
  );
}
