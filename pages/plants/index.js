import PlantsList from "@/components/PlantsList";
import {
  StyledHeading,
  StyledParagraph,
} from "@/components/PlantsList/PlantsList.styled";
import SearchBar from "@/components/SearchBar";
import { plants } from "@/lib/plants";
import { useState } from "react";
import { useEffect } from "react";

export default function Plants() {
  const [searchedPlants, setSearchedPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const filteredSearchPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchedPlants(filteredSearchPlants);
  }, [searchInput]);

  function handleSearch(event) {
    setSearchInput(event.target.value);
  }

  return (
    <>
      <StyledHeading>Insektenfreunde</StyledHeading>
      <StyledParagraph> für deinen Balkon</StyledParagraph>
      <SearchBar onChange={handleSearch} />
      <PlantsList searchedPlants={searchedPlants} searchInput={searchInput} />
    </>
  );
}
