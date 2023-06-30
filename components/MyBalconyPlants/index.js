import { useStore } from "@/pages/_app";
import PlantCard from "../PlantCard";
import { MyBalconyPlantsList } from "./MyBalconyPlants.styled";
import { uid } from "uid";

export default function MyBalconyPlants() {
  const balconyPlantsList = useStore((state) => state.balconyPlantsList);

  return (
    <MyBalconyPlantsList>
      {balconyPlantsList.map((plant) => (
        <li key={uid()}>
          <PlantCard plant={plant} />
        </li>
      ))}
    </MyBalconyPlantsList>
  );
}
