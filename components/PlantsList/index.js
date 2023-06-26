import { plants } from "@/lib/plants";
import PlantCard from "../PlantCard";
import {
  StyledHeading,
  StyledPlantsList,
  StyledParagraph,
} from "./PlantsList.styled";

export default function PlantsList() {
  return (
    <>
      <StyledHeading>Insektenfreunde</StyledHeading>
      <StyledParagraph> für deinen Balkon</StyledParagraph>
      <StyledPlantsList>
        {plants.map((plant) => (
          <li key={plant.id}>
            <PlantCard plant={plant} />
          </li>
        ))}
      </StyledPlantsList>
    </>
  );
}
