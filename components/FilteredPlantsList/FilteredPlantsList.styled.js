import styled from "styled-components";

export const HorizontalScrollList = styled.ul`
  display: flex;
  overflow-x: auto;
  padding-left: 15px;
  list-style-type: none;
`;

export const PlantCardListItem = styled.li`
  margin-right: 16px;
`;

export const AddPlantButton = styled.button`
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  z-index: 10;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const AddPlantSvg = styled.svg`
  font-size: 28px;
  fill: darkgreen;
  stroke: white;
  stroke-width: 1.4px;
`;
