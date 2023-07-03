import styled from "styled-components";

export const HorizontalScrollList = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  list-style-type: none;
`;

export const PlantCardListItem = styled.li`
  margin-right: 16px;
`;

export const AddPlantButton = styled.button`
  position: absolute;
  right: -0.3rem;
  top: -0.4rem;
  background-color: transparent;
  border: none;
  color: green;
  font-size: 32px;
`;
