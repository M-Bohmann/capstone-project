import { plants } from "@/lib/plants";
import PlantCard from "../Card";

export default function PlantsList() {
  return (
    <>
      <h1>Insektenfreunde</h1>
      <p> für deinen Balkon</p>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <PlantCard plant={plant} />
          </li>
        ))}
      </ul>
    </>
  );
}
