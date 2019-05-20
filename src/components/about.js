import React from "react"
import styled from "styled-components"
import Icons from "./icons"
import { colors } from "../utils/colors"
import Slide from "react-reveal/Slide"
import Bounce from "react-reveal/Bounce"

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
  font-size: 1.85rem;
  line-height: 2.8rem;
  color: ${colors.secondary};
  padding: 0;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: justify;
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
    <Slide right>
      <StyledTitle>O Mnie</StyledTitle>
    </Slide>
    <StyledH3>
      <Bounce top>
        Nazywam się Marcin Barszcz, jestem absolwentem studiów magisterskich na
        Politechnice Rzeszowskiej im. Ignacego Łukasiewicza i tworzę strony
        internetowe. Dostarczam nie tylko strony statyczne ale również aplikacje
        internetowe dostosowane do klienta. Posiadam autorski system zarządzania
        treścią dostosowywany do indywidualnych wymagań klienta.
      </Bounce>
    </StyledH3>
    <StyledBar>
      <Icons />
    </StyledBar>
  </StyledSection>
)

export default About
