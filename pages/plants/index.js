import PlantsList from "@/components/PlantsList";
import {
  StyledHeading,
  StyledParagraph,
} from "@/components/PlantsList/PlantsList.styled";

export default function Plants() {
  return (
    <>
      <StyledHeading>Insektenfreunde</StyledHeading>
      <StyledParagraph> für deinen Balkon</StyledParagraph>
      <PlantsList />
    </>
  );
}
