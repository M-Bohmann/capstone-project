import { plants } from "@/lib/plants";
import PlantCard from "../PlantCard";
import { StyledPlantsList } from "./PlantsList.styled";
import Link from "next/link";

export default function PlantsList() {
  return (
    <>
      <StyledPlantsList>
        {plants.map((plant) => (
          <li key={plant.id}>
            <Link href={`/plants/${plant.id}`}>
              <PlantCard plant={plant} />
            </Link>
          </li>
        ))}
      </StyledPlantsList>
    </>
  );
}
