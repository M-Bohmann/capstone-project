import styled from "styled-components";

export const MyBalconyPlantsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 0;
  padding-right: 0;
  padding-top: 10px;
  overflow: auto;
  max-height: 255px;
`;

export const DeletePlantButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 10.6rem;
  background-color: transparent;
  border: none;
  color: red;
  font-size: 32px;
`;

export const PlantCardWrapper = styled.div`
  position: relative;
`;
