import React from "react"
import styled from "styled-components"
import posed from "react-pose"
import Typing from "react-typing-animation"

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30vh 0 15vh 0;
  font-family: "Montserrat", sans-serif;
`

const PosedH2 = posed.h2({
  exit: { opacity: 0, y: -120 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 2000,
  },
})

const StyledTitle = styled.h1`
  font-size: 8rem;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 7rem;
  letter-spacing: 0;
  margin-bottom: 3rem;

  @media (max-width: 320px) {
    font-size: 2.8rem;
    line-height: 3rem;
    text-align: center;
  }
`

const StyledSubtitle = styled(PosedH2)`
  font-size: 1.6rem;
  color: rgb(153, 153, 153);
  line-height: 2.5rem;
  font-weight: 300;
  width: 50%;
  letter-spacing: 0;
  opacity: 0;

  @media (max-width: 320px) {
    text-align: center;
    width: 100%;
  }
`

const Hero = () => (
  <StyledHero>
    <Typing speed={80}>
      <Typing.Delay ms={300} />
      <StyledTitle>
        Witaj, <br /> jestem Marcin
      </StyledTitle>
    </Typing>
    <StyledSubtitle initialPose="exit" pose="enter">
      Hi, my name is Rick Harrison. I'm a canadian designer based in Toronto. I
      love typography.
    </StyledSubtitle>
  </StyledHero>
)

export default Hero
