import { useRouter } from "next/router";
import styled from "styled-components";

export default function Filter({ setFilter, filter }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFilter(data);
    router.push("/balcony-planner");
  }

  return (
    <>
      <PlantFilterHeading>Dein Pflanzenfilter</PlantFilterHeading>
      <FilterForm onSubmit={handleSubmit}>
        <label htmlFor="plantType">
          Pflanzenart:{" "}
          <select
            id="usageType"
            name="usageType"
            defaultValue={filter.usageType}
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
