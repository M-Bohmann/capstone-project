import styled from "styled-components";

export const MyBalconyPlantsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 0;
  padding-right: 0;
  overflow: auto;
  height: 270px;
`;

export const DeletePlantButton = styled.button`
  position: absolute;
  right: -0.3rem;
  top: -0.2rem;
  background-color: transparent;
  border: none;
  z-index: 10;
  padding: 0;
`;

export const PlantCardWrapper = styled.div`
  position: relative;
`;

export const DeleteSvg = styled.svg`
  font-size: 21px;
  fill: #e50027;
  stroke: #ffffff;
  stroke-width: 1.2px;
`;

export const StyledParagraph = styled.p`
  height: 270px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
