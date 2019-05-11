import React from "react"
import styled from "styled-components"

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30vh 0 15vh 0;
    font-family: "Montserrat", sans-serif;
`

const StyledTitle = styled.h1`
    font-size: 2.8rem;
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 2.1rem;
    letter-spacing: 0;

    @media only screen and (min-width: 920px) {
        font-size: 4rem;
    }
`

const StyledSubtitle = styled.h2`
    font-size: 1.6rem;
    color: rgb(153, 153, 153);
    line-height: 2.5rem;
    font-weight: 300;
    text-align: justify;
    letter-spacing: 0;
    width: 90%;

    @media only screen and (min-width: 920px) {
        width: 40%;
        text-align: left;
    }
`

const Hero = () => (
    <StyledHero>
        <StyledTitle>Witaj, jestem Marcin</StyledTitle>
        <StyledSubtitle>
            Hi, my name is Rick Harrison. I'm a canadian designer based in Toronto. I love typography.
        </StyledSubtitle>
    </StyledHero>
)

export default Hero