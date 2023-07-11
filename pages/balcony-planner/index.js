import FilteredPlantsList from "@/components/FilteredPlantsList";
import Link from "next/link";
import styled from "styled-components";
import MyBalconyPlants from "@/components/MyBalconyPlants";

export default function BalconyPlantsPlanner({
  filteredPlants,
  addPlantToBalcony,
  balconyPlants,
  deleteBalconyPlant,
}) {
  return (
    <>
      <StyledHeading>Balkon Pflanzenplaner</StyledHeading>
      <h2>Mein Balkon</h2>
      <Link href="balcony-planner/addUserPlant">
        <button>+ eigene Pflanzen</button>
      </Link>
      <MyBalconyPlants
        balconyPlants={balconyPlants}
        deleteBalconyPlant={deleteBalconyPlant}
      />
      <h2>
        Pflanzenempfehlung{" "}
        <Link href="/balcony-planner/filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z" />
          </svg>{" "}
        </Link>
      </h2>
      <FilteredPlantsList
        filteredPlants={filteredPlants}
        addPlantToBalcony={addPlantToBalcony}
      />
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
`;
