import { useStore } from "@/pages/_app";
import PlantCard from "../PlantCard";
import { MyBalconyPlantsList } from "./MyBalconyPlants.styled";

export default function MyBalconyPlants() {
  const balconyPlantsList = useStore((state) => state.balconyPlantsList);
  console.log(balconyPlantsList);

  return (
    <MyBalconyPlantsList>
      {balconyPlantsList.map((plant) => (
        <li key={plant.id}>
          <PlantCard plant={plant} />
        </li>
      ))}
    </MyBalconyPlantsList>
  );
}
