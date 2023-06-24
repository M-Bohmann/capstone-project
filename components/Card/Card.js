import { plants } from "@/lib/plants";
import Image from "next/image";

export default function PlantCard() {
  const plant = plants[0];
  return (
    <>
      <Image src={plant.imgUrl} alt={plant.name} width={120} height={120} />
      <p>{plant.name}</p>
      <p>{plant.botanicalName}</p>
    </>
  );
}
