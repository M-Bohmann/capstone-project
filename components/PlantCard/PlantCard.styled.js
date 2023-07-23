import Image from "next/image";
import styled from "styled-components";

export const PlantNameParagraph = styled.p`
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`;

export const BotanicalNameParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 1px;
`;

export const PlantCardImage = styled(Image)`
  border-radius: 25px;
  object-fit: cover;
`;

export const PlantCardImageContainer = styled.div`
  width: 150px;
  height: 120px;
  position: relative;
  overflow: hidden;
`;
