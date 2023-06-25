import Image from "next/image";

export default function PlantCard({ plant }) {
  return (
    <>
      <Image src={plant.imgUrl} alt={plant.name} width={165} height={165} />
      <p>{plant.name}</p>
      <p>{plant.botanicalName}</p>
    </>
  );
}
