import React, { useState } from "react";
import useSWR from "swr";
import {
  Form,
  ImageUploadParagraph,
  StyledButton,
  StyledContainer,
} from "./ImageUploadForm.styled";

export default function ImageUploadForm({ onUpload }) {
  const { mutate } = useSWR("/api/images/");
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);

  async function submitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });
      if (response.status === 201) {
        const result = await response.json();
        const url = result.url;
        mutate();
        setUploadStatus("Upload complete!");
        onUpload(url);
      }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <ImageUploadParagraph>Pflanzenbild hochladen:</ImageUploadParagraph>{" "}
      <StyledContainer>
        <Form onSubmit={submitImage}>
          <input type="file" name="file" />
          <StyledButton type="submit">Hochladen</StyledButton>
          <p>{uploadStatus}</p>
          {/*we use conditional rendering */}
          {error && <p>{error.message}</p>}
        </Form>
      </StyledContainer>
    </>
  );
}
