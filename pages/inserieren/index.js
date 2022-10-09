import { useRouter } from "next/router";
import InseratForm from "../../components/InseratForm";
import styled from "styled-components";

export default function CreateInserat() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("IM SUBMIT");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await fetch("/api/angebote", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      router.push("/angebote");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Hier geben Sie ihr Inserat auf:</h2>
        <label htmlFor="title">Titel:</label>
        <input name="title" id="title" required />
        <label htmlFor="description">Beschreibung:</label>
        <textarea name="description" id="description" rows="5" required />
        <button type="submit">Anzeige aufgeben</button>
      </StyledForm>
    </>
  );
}
const StyledForm = styled.form`
  width: 500px;
  height: 500px;
  margin: 10px auto;
  border: 1px solid black;
  & * {
    display: block;
    width: 90%;
    margin: 20px auto;
  }
  & button{
    font-size: 1.0em;
  }
`;
