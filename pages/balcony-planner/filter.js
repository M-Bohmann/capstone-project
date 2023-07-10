import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function Filter({ setFilteredPlants, setFilter, filter }) {
  const router = useRouter();
  const { data: plants, isLoading } = useSWR("/api/plants");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  function filteredPlants(event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFilter(data);
    const filteredPlants = plants.filter((plant) => {
      return (
        (data.plantType === "Alle" || plant.usageType === data.plantType) &&
        (data.lightRequirements === "" ||
          plant.lightRequirements === data.lightRequirements) &&
        (data.growthHeight === "" || data.growthHeight >= plant.growthHeight) &&
        (data.hardy === "" || plant.hardy === data.hardy)
      );
    });
    return filteredPlants;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const filteredPlantList = filteredPlants(event);
    setFilteredPlants(filteredPlantList);
    router.push("/balcony-planner");
  }

  return (
    <>
      <StyledHeading>Dein Pflanzenfilter</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="plantType">Pflanzenart:</label>
        <select id="plantType" name="plantType" defaultValue={filter.plantType}>
          <option>Alle</option>
          <option>Nutzpflanze</option>
          <option>Zierpflanze</option>
        </select>
        <label htmlFor="lightRequirements">Standort:</label>
        <select
          id="lightRequirements"
          name="lightRequirements"
          defaultValue={filter.lightRequirements}
        >
          <option></option>
          <option>Sonnig</option>
          <option>Halbschatten</option>
          <option>Schatten</option>
        </select>
        <label htmlFor="growthHeight">Maximale Wuchshöhe:</label>
        <div>
          <input
            id="growthHeight"
            name="growthHeight"
            type="number"
            defaultValue={filter.growthHeight}
          />
          <span> cm</span>
        </div>
        <label htmlFor="hardy">Winterhart:</label>
        <select id="hardy" name="hardy" defaultValue={filter.hardy}>
          <option></option>
          <option>ja</option>
          <option>nein</option>
        </select>
        <button type="submit">Speichern</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
  text-align: center;
`;
