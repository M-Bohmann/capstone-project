import { StyledForm } from "@/pages/balcony-planner/filter";
import Link from "next/link";
import { StyledFieldset } from "./UserPlantForm.styled";
import { months } from "@/lib/plants";
import ImageUploadForm from "../ImageUploadForm";

export default function UserPlantForm({ onSubmit, defaultValue }) {
  return (
    <>
      <h1>Deine Pflanze</h1>
      <ImageUploadForm />
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={defaultValue?.name}
        />
        <label htmlFor="botanicalName">Botanischer Name:</label>
        <input
          id="botanicalName"
          name="botanicalName"
          type="text"
          defaultValue={defaultValue?.botanicalName}
        />
        <StyledFieldset>
          <legend>Eigenschaften</legend>
          <label htmlFor="usageType">Pflanzenart:</label>
          <select
            id="usageType"
            name="usageType"
            defaultValue={defaultValue?.usageType}
          >
            <option></option>
            <option>Nutzpflanze</option>
            <option>Zierpflanze</option>
          </select>
          <label htmlFor="lightRequirements">Standort:</label>
          <select
            id="lightRequirements"
            name="lightRequirements"
            defaultValue={defaultValue?.lightRequirements}
          >
            <option></option>
            <option>Sonnig</option>
            <option>Halbschatten</option>
            <option>Schatten</option>
          </select>
          <label htmlFor="growthHeight">Wuchshöhe:</label>
          <div>
            <input
              id="growthHeight"
              name="growthHeight"
              type="number"
              defaultValue={defaultValue?.growthHeight}
            />
            <span> cm</span>
          </div>
          <label htmlFor="hardy">Winterhart:</label>
          <select id="hardy" name="hardy" defaultValue={defaultValue?.hardy}>
            <option></option>
            <option>ja</option>
            <option>nein</option>
          </select>
          <label htmlFor="bloomStart">Blütezeit:</label>
          <select
            id="bloomStart"
            name="bloomStart"
            defaultValue={defaultValue?.bloomStart}
          >
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
          <span>bis</span>
          <select
            id="bloomEnd"
            name="bloomEnd"
            defaultValue={defaultValue?.bloomEnd}
          >
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
          <label htmlFor="nectar">Nektargehalt:</label>
          <select id="nectar" name="nectar" defaultValue={defaultValue?.nectar}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <label htmlFor="pollen">Pollengehalt:</label>
          <select id="pollen" name="pollen" defaultValue={defaultValue?.pollen}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </StyledFieldset>
        <label htmlFor="note">Notizen:</label>
        <textarea
          id="note"
          name="note"
          type="text"
          defaultValue={defaultValue?.note}
        />
        <button type="submit">Speichern</button>
        <Link href="/balcony-planner">Abbrechen</Link>
      </StyledForm>
    </>
  );
}
