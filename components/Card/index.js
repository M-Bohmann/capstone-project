import Image from "next/image";

export default function PlantCard({ plant }) {
  return (
    <>
      <Image src={plant.imgUrl} alt={plant.name} width={120} height={120} />
      <p>{plant.name}</p>
      <p>{plant.botanicalName}</p>
    </>
  );
}
