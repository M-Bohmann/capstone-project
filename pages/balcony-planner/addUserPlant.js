import { useRouter } from "next/router";
import { StyledForm } from "./filter";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

export default function AddUserPlant() {
  const router = useRouter();
  const { mutate } = useSWR("/api/balconyPlants");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    const response = await fetch("/api/balconyPlants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...plantData, isUserPlant: true }),
    });

    if (response.ok) {
      mutate();
      router.back();
    }
  }

  return (
    <>
      <h1>Deine Pflanze</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="botanicalName">Botanischer Name:</label>
        <input id="botanicalName" name="botanicalName" type="text" />
        <StyledFieldset>
          <legend>Eigenschaften</legend>
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
          <label htmlFor="growthHeight">Wuchshöhe:</label>
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
        </StyledFieldset>
        <label htmlFor="notes">Notizen:</label>
        <textarea id="notes" name="notes" type="text" />
        <button type="submit">Speichern</button>
        <Link href="/balcony-planner">Abbrechen</Link>
      </StyledForm>
    </>
  );
}

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
