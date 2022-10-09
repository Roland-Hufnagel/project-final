import styled from "styled-components";

export default function InseratForm() {
  return (
    <StyledForm onSubmit="handleSubmit">
      <h2>Hier geben Sie ihr Inserat auf:</h2>
      <StyledLabel htmlFor="title">Titel:</StyledLabel>
      <input name="title" id="title" required />
      <label htmlFor="description">Beschreibung:</label>
      <textarea name="description" id="description" rows="5" required />
      <button type="submit">Anzeige aufgeben</button>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  width: 1500px;
  height: 500px;
  margin: 10px auto;
  border: 1px solid black;
  background-color: green;
  & * {
    display: block;
    width: 90%;
    margin: 20px auto;
  }
  & label {
    font-size: 3rem;
  }
`;
const StyledLabel = styled.label`
  color: green;
  font-size: 2rem;
`;
