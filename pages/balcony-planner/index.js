import FilteredPlantsList from "@/components/FilteredPlantsList";
import Link from "next/link";
import styled from "styled-components";
import MyBalconyPlants from "@/components/MyBalconyPlants";

export default function BalconyPlantsPlanner({ filter }) {
  return (
    <>
      <h1>Balkon Pflanzenplaner</h1>
      <StyledDiv>
        <StyledHeading>Mein Balkon</StyledHeading>
        <AddPlantLink href="balcony-planner/addUserPlant">
          + eigene Pflanze
        </AddPlantLink>
      </StyledDiv>
      <MyBalconyPlants />
      <StyledContainer>
        <StyledHeading>Pflanzenempfehlung</StyledHeading>
        <Link href="/balcony-planner/filter" aria-label="Zum Pflanzenfilter">
          <FilterSvg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z" />
          </FilterSvg>
        </Link>
      </StyledContainer>
      <FilteredPlantsList filter={filter} />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px 0 0;
`;

const StyledContainer = styled.div`
  position: relative;
`;

const AddPlantLink = styled(Link)`
  text-decoration: none;
  border: solid 3px #ffffff;
  background-color: #2ea34d;
  color: #ffffff;
  border-radius: 15px;
  padding: 3px 7px 3px 7px;
  margin-top: 20px;
`;

const FilterSvg = styled.svg`
  font-size: 28px;
  position: absolute;
  top: 0.1rem;
  left: 15rem;
`;

const StyledHeading = styled.h2`
  margin-bottom: 0;
  margin-left: 5px;
`;
