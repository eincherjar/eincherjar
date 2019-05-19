import React from "react"
import styled from "styled-components"
import Icons from "./icons"
import { colors } from "../utils/colors"

const StyledSection = styled.section`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`

// const StyledWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 4rem;

//   @media (max-width: 320px) {
//     grid-template-columns: 1fr;
//   }
// `

const StyledTitle = styled.h2`
  font-size: 4.8rem;
  color: ${colors.dark};
  font-weight: bold;
  text-transform: uppercase;
  line-height: 4.875rem;
  text-align: left;
  grid-column: span 2;
  margin-bottom: 15rem;
  position: relative;

  ::after {
    content: "O MNIE";
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

const StyledH3 = styled.h3`
  font-size: 2.2rem;
  line-height: 3rem;
  color: ${colors.secondary};
  padding: 0;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: center;
  font-weight: 400;
  width: 70%;
  align-self: center;
`

const StyledBar = styled.div`
  grid-column-start: span 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 10%;
`
const About = () => (
  <StyledSection id="about">
    <StyledTitle>O Mnie</StyledTitle>
    <StyledH3>
      Tworzę responsywne strony internetowe, które są dostosowane do urządzeń
      mobilnych. Strony statyczne jak CMS mogą być opartę o gotowy projekt
      dostarczony przez klienta, ale również mogę zaproponować zaprojektowanie i
      wdrożenie oryginalnego wyglądu. Jestem w stanie dostarczam w pełni
      spersonalizowany autorski system zarządzania treścią, który posiada
      wszystkie wymagadne przez klienta funkcji.
    </StyledH3>
    <StyledBar>
      <Icons />
    </StyledBar>
  </StyledSection>
)

export default About
