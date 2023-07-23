import React, { useState } from "react";
// we are using useSWR to mutate the data once a file has been uploaded
import useSWR from "swr";
import {
  Form,
  ImageUploadParagraph,
  StyledButton,
  StyledContainer,
} from "./ImageUploadForm.styled";

export default function ImageUploadForm({ onUpload }) {
  const { mutate } = useSWR("/api/images/");
  // We define some states to give some feedback to the user what happened to our upload
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);
  // a kind of 'standard' form handler
  async function submitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);
    // we use fetch to call our API and pass the form data and request method
    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });
      // once the file is uploaded (= the promise in our api upload is resolved)
      if (response.status === 201) {
        const result = await response.json();
        const url = result.url;
        // we call mutate to refresh our image data
        mutate();
        // and set a successful state
        setUploadStatus("Upload complete!");
        onUpload(url);
      }
    } catch (error) {
      // in case of error, we set the state accordingly
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
