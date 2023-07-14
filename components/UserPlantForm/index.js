import { StyledForm } from "@/pages/balcony-planner/filter";
import Link from "next/link";
import { StyledFieldset } from "./UserPlantForm.styled";
import { months } from "@/lib/plants";

export default function UserPlantForm({ onSubmit }) {
  return (
    <>
      <h1>Deine Pflanze</h1>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="botanicalName">Botanischer Name:</label>
        <input id="botanicalName" name="botanicalName" type="text" />
        <StyledFieldset>
          <legend>Eigenschaften</legend>
          <label htmlFor="usageType">Pflanzenart:</label>
          <select id="usageType" name="usageType">
            <option></option>
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
          <label htmlFor="bloomStart">Blütezeit:</label>
          <select id="bloomStart" name="bloomStart">
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
          <span>bis</span>
          <select id="bloomEnd" name="bloomEnd">
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
          <label htmlFor="nectar">Nektargehalt:</label>
          <select id="nectar" name="nectar">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label htmlFor="pollen">Pollengehalt:</label>
          <select id="pollen" name="pollen">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </StyledFieldset>
        <label htmlFor="note">Notizen:</label>
        <textarea id="note" name="note" type="text" />
        <button type="submit">Speichern</button>
        <Link href="/balcony-planner">Abbrechen</Link>
      </StyledForm>
    </>
  );
}
