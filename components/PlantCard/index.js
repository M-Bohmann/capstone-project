import {
  BotanicalNameParagraph,
  PlantCardImage,
  PlantCardImageContainer,
  PlantNameParagraph,
} from "./PlantCard.styled";

export default function PlantCard({ plant }) {
  return (
    <>
      <PlantCardImageContainer>
        <PlantCardImage
          src={plant.imgUrl}
          alt={plant.name}
          fill
          sizes="150px"
        />
      </PlantCardImageContainer>
      <PlantNameParagraph>{plant.name}</PlantNameParagraph>
      <BotanicalNameParagraph>{plant.botanicalName}</BotanicalNameParagraph>
    </>
  );
}
