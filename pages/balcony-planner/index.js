import FilteredPlantsList from "@/components/FilteredPlantsList";
import Link from "next/link";
import { useStore } from "../_app";
import styled from "styled-components";
import MyBalconyPlants from "@/components/MyBalconyPlants";

export default function BalconyPlantsPlanner() {
  const plantList = useStore((state) => state.plantList);

  return (
    <>
      <StyledHeading>Balkon Pflanzenplaner</StyledHeading>
      <h2>Mein Balkon</h2>
      <MyBalconyPlants />
      <StyledLink href="/balcony-planner/filter">
        <button>Filter</button>
      </StyledLink>
      <h2>Pflanzenempfehlung</h2>
      <FilteredPlantsList filterPlants={plantList} />
    </>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  text-align: center;
`;
