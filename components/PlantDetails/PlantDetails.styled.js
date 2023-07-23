import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const BotanicalNameParagraph = styled.p`
  text-align: center;
  margin-top: 0;
`;

export const AttributesHeading = styled.h2`
  margin: 10px 0 0 30px;
  padding-bottom: 0;
`;

export const StyledImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const PlantDetailsList = styled.ul`
  list-style: none;
  margin-left: 30px;
  padding-left: 0;
  margin-top: 10px;
`;

export const PlantDetailsListItem = styled.li`
  margin-bottom: 5px;
  word-wrap: break-word;
  margin-right: 38px;
`;

export const EditLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: solid 2px white;
  background-color: white;
  display: inline-flex;
  margin-left: auto;
  padding: 5px;
  font-size: 14px;
`;

export const BackButton = styled.button`
  color: black;
  border: solid 2px white;
  padding: 5px;
  background-color: white;
`;

export const NoteParagraph = styled.p`
  margin-left: 30px;
`;

export const HeaderBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
