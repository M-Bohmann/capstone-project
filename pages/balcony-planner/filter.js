import { SaveButton } from "@/components/UserPlantForm/UserPlantForm.styled";
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
        (data.plantType === "" || plant.usageType === data.plantType) &&
        (data.lightRequirements === "" ||
          plant.lightRequirements.includes(data.lightRequirements)) &&
        (data.growthHeight === "" || data.growthHeight >= plant.growthHeight) &&
        (data.hardy === "" || plant.hardy === data.hardy) &&
        (data.nectar === "" || plant.nectar >= data.nectar) &&
        (data.pollen === "" || plant.pollen >= data.pollen)
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
      <PlantFilterHeading>Dein Pflanzenfilter</PlantFilterHeading>
      <FilterForm onSubmit={handleSubmit}>
        <label htmlFor="plantType">
          Pflanzenart:{" "}
          <select
            id="plantType"
            name="plantType"
            defaultValue={filter.plantType}
          >
            <option></option>
            <option>Nutzpflanze</option>
            <option>Zierpflanze</option>
          </select>
        </label>
        <label htmlFor="lightRequirements">
          Standort:{" "}
          <select
            id="lightRequirements"
            name="lightRequirements"
            defaultValue={filter.lightRequirements}
          >
            <option></option>
            <option>Sonne</option>
            <option>Halbschatten</option>
            <option>Schatten</option>
          </select>
        </label>
        <label htmlFor="growthHeight">
          Maximale Wuchshöhe:{" "}
          <input
            id="growthHeight"
            name="growthHeight"
            type="number"
            defaultValue={filter.growthHeight}
          />
          <span> cm</span>
        </label>
        <label htmlFor="hardy">
          Winterhart:{" "}
          <select id="hardy" name="hardy" defaultValue={filter.hardy}>
            <option></option>
            <option>ja</option>
            <option>nein</option>
          </select>
        </label>
        <label htmlFor="nectar">
          Mindest Nektargehalt:{" "}
          <select id="nectar" name="nectar" defaultValue={filter.nectar}>
            <option></option>
            <option value={1}>niedrig</option>
            <option value={2}>wenig</option>
            <option value={3}>mäßig</option>
            <option value={4}>viel</option>
          </select>
        </label>
        <label htmlFor="pollen">
          Mindest Pollengehalt:{" "}
          <select id="pollen" name="pollen" defaultValue={filter.pollen}>
            <option></option>
            <option value={1}>niedrig</option>
            <option value={2}>wenig</option>
            <option value={3}>mäßig</option>
            <option value={4}>viel</option>
          </select>
        </label>
        <FilterSaveButton type="submit">Speichern</FilterSaveButton>
      </FilterForm>
    </>
  );
}

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 10px 20px 10px;
`;

const PlantFilterHeading = styled.h1`
  text-align: center;
  margin-top: 0;
  padding: 5px 0 5px 0;
  background-color: #f5f5dc;
`;

const FilterSaveButton = styled.button`
  color: black;
  border: solid 3px white;
  border-radius: 20px;
  padding: 4px;
  background-color: white;
  font-size: 16px;
`;
