import Link from "next/link";
import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 10px 20px 10px;
`;

export const StyledUserPlantForm = styled.form`
  margin-bottom: 60px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CancelLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: solid 3px white;
  border-radius: 20px;
  padding: 4px;
  background-color: white;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  color: black;
  border: solid 3px white;
  border-radius: 20px;
  padding: 4px;
  background-color: white;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const NameSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextareaWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const TextArea = styled.textarea`
  width: 60%;
  height: 100%;
`;
