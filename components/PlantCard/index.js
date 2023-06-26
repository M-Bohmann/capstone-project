import Image from "next/image";
import { BotanicalNameParagraph, PlantNameParagraph } from "./PlantCard.styled";

export default function PlantCard({ plant }) {
  return (
    <>
      <Image src={plant.imgUrl} alt={plant.name} width={165} height={165} />
      <PlantNameParagraph>{plant.name}</PlantNameParagraph>
      <BotanicalNameParagraph>{plant.botanicalName}</BotanicalNameParagraph>
    </>
  );
}
