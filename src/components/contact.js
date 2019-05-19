import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const StyledSection = styled.section`
  padding: 5vh 0;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.h2`
  font-size: 4.8rem;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.875rem;
  text-align: left;
  width: 100%;
  position: relative;

  ::after {
    content: "KONTAKT";
    position: absolute;
    top: 0;
    left: 2rem;
    color: ${colors.secondary};
    z-index: -1;
    font-size: 16rem;
    opacity: 0.2;
  }

  @media (max-width: 320px) {
    text-align: center;
  }
`

const StyledForm = styled.form`
  width: 70%;
  margin: 7rem 0;

  @media (max-width: 320px) {
    width: 100%;
    margin: 3rem 0;
  }
`

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  color: rgb(119, 119, 119);
  font-weight: 700;
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 1rem 0;
  margin-bottom: 1rem;

  ::placeholder {
    color: #d9d9d9;
  }
`

const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 1rem 0;
  margin-bottom: 1rem;

  ::placeholder {
    color: #d9d9d9;
  }
`

const StyledBtn = styled.button`
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 3rem;
  color: #fff;
  background: ${colors.dark};
  border: 0.2rem solid ${colors.dark};
  text-align: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  :hover {
    background: transparent;
    color: ${colors.dark};
  }
`

const Contact = () => (
  <StyledSection id="contact">
    <StyledTitle>Kontakt</StyledTitle>
    <StyledForm
      name="contact"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <StyledGroup>
        <StyledLabel htmlFor="name">Imię i nazwisko</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          id="name"
          placeholder="Jan Kowalski"
        />
      </StyledGroup>

      <StyledGroup>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="text"
          name="email"
          id="email"
          placeholder="jankowalski@mail.com"
        />
      </StyledGroup>

      <StyledGroup>
        <StyledLabel htmlFor="message">Wiadomość</StyledLabel>
        <StyledTextarea
          name="message"
          id="message"
          rows="3"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sed?"
        />
      </StyledGroup>
      <StyledBtn type="submit">Wyślij</StyledBtn>
    </StyledForm>
  </StyledSection>
)

export default Contact
