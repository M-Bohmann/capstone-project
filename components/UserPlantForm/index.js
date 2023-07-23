import {
  ButtonWrapper,
  CancelLink,
  NameSection,
  SaveButton,
  StyledFieldset,
  StyledUserPlantForm,
  TextArea,
  TextareaWrapper,
} from "./UserPlantForm.styled";
import { months } from "@/lib/plants";
import ImageUploadForm from "../ImageUploadForm";
import { useState } from "react";

export default function UserPlantForm({ onSubmit, defaultValue }) {
  const [uploadImageUrl, setUploadImageUrl] = useState(undefined);

  return (
    <>
      <h1>Deine Pflanze</h1>
      <ImageUploadForm onUpload={setUploadImageUrl} />
      <StyledUserPlantForm onSubmit={onSubmit}>
        <NameSection>
          {" "}
          {uploadImageUrl && (
            <input
              type="hidden"
              name="imgUrl"
              id="imgUrl"
              value={uploadImageUrl}
            />
          )}
          <label htmlFor="name">
            Name:{" "}
            <input
              id="name"
              name="name"
              type="text"
              required
              defaultValue={defaultValue?.name}
            />
          </label>
          <label htmlFor="botanicalName">
            Botanischer Name:{" "}
            <input
              id="botanicalName"
              name="botanicalName"
              type="text"
              defaultValue={defaultValue?.botanicalName}
            />
          </label>
        </NameSection>
        <StyledFieldset>
          <legend>Eigenschaften</legend>
          <label htmlFor="usageType">
            Pflanzenart:{" "}
            <select
              id="usageType"
              name="usageType"
              defaultValue={defaultValue?.usageType}
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
              defaultValue={defaultValue?.lightRequirements}
            >
              <option></option>
              <option>Sonne</option>
              <option>Halbschatten</option>
              <option>Schatten</option>
            </select>
          </label>
          <label htmlFor="growthHeight">
            Wuchshöhe:{" "}
            <input
              id="growthHeight"
              name="growthHeight"
              type="number"
              defaultValue={defaultValue?.growthHeight}
            />
            <span> cm</span>
          </label>
          <label htmlFor="hardy">
            Winterhart:{" "}
            <select id="hardy" name="hardy" defaultValue={defaultValue?.hardy}>
              <option></option>
              <option>ja</option>
              <option>nein</option>
            </select>
          </label>
          <label htmlFor="bloomStart">
            Blütezeit:{" "}
            <select
              id="bloomStart"
              name="bloomStart"
              defaultValue={defaultValue?.bloomStart}
            >
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
            <span> bis </span>
            <select
              id="bloomEnd"
              name="bloomEnd"
              defaultValue={defaultValue?.bloomEnd}
            >
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
          </label>
          <label htmlFor="nectar">
            Nektargehalt:{" "}
            <select
              id="nectar"
              name="nectar"
              defaultValue={defaultValue?.nectar}
            >
              <option></option>
              <option value={1}>niedrig</option>
              <option value={2}>wenig</option>
              <option value={3}>mäßig</option>
              <option value={4}>viel</option>
            </select>
          </label>
          <label htmlFor="pollen">
            Pollengehalt:{" "}
            <select
              id="pollen"
              name="pollen"
              defaultValue={defaultValue?.pollen}
            >
              <option></option>
              <option value={1}>niedrig</option>
              <option value={2}>wenig</option>
              <option value={3}>mäßig</option>
              <option value={4}>viel</option>
            </select>
          </label>
        </StyledFieldset>
        <TextareaWrapper>
          <label htmlFor="note">Notizen:</label>
          <TextArea
            id="note"
            name="note"
            type="text"
            defaultValue={defaultValue?.note}
          />
        </TextareaWrapper>
        <ButtonWrapper>
          <CancelLink href="/balcony-planner">Abbrechen</CancelLink>
          <SaveButton type="submit">Speichern</SaveButton>
        </ButtonWrapper>
      </StyledUserPlantForm>
    </>
  );
}
