import Link from "next/link";
import styled from "styled-components";

export const StyledHeading = styled.h1`
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  margin-top: 0;
  background-color: #f5f5dc;
  z-index: 10;
`;

export const StyledPlantsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 0;
  padding-right: 0;
  padding-top: 105px;
  margin-bottom: 50px;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  position: fixed;
  top: 22.5px;
  width: 100%;
  padding-bottom: 40px;
  background-color: #f5f5dc;
  z-index: 10;
`;

export const DetailsPageLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
