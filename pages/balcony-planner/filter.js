import { plants } from "@/lib/plants";
import { useRouter } from "next/router";
import { useStore } from "../_app";
import styled from "styled-components";

export default function Filter() {
  const router = useRouter();
  const setPlantList = useStore((state) => state.setPlantList);

  function filteredPlants(event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
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
    setPlantList(filteredPlantList);
    router.push("/balcony-planner");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="plantType">Pflanzenart:</label>
      <select id="plantType" name="plantType">
        <option>Alle</option>
        <option>Nutzpflanze</option>
        <option>Zierpflanze</option>
      </select>
      <label htmlFor="lightRequirements">Standort:</label>
      <select id="lightRequirements" name="lightRequirements">
        <option></option>
        <option>Sonnig</option>
        <option>Halbschatten</option>
        <option>Schatten</option>
      </select>
      <label htmlFor="growthHeight">Maximale Wuchshöhe:</label>
      <div>
        <input id="growthHeight" name="growthHeight" type="number" />
        <span> cm</span>
      </div>
      <label htmlFor="hardy">Winterhart:</label>
      <select id="hardy" name="hardy">
        <option></option>
        <option>ja</option>
        <option>nein</option>
      </select>
      <button type="submit">Speichern</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
