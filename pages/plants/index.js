import PlantsList from "@/components/PlantsList";
import {
  StyledHeading,
  StyledParagraph,
} from "@/components/PlantsList/PlantsList.styled";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import useSWR from "swr";

export default function Plants() {
  const [searchedPlants, setSearchedPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { data: plants, error, isLoading } = useSWR("/api/plants");

  useEffect(() => {
    if (plants) {
      const filteredSearchPlants = plants.filter(
        (plant) =>
          plant.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          plant.botanicalName.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedPlants(filteredSearchPlants);
    }
  }, [searchInput, plants]);

  if (isLoading) {
    return <div>Pflanzen werden geladen...</div>;
  }

  if (error) {
    return error.message;
  }

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
