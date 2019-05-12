import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    padding: 5vh 0;
    font-family: "Montserrat", sans-serif;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 4rem;
    grid-template-rows: 1fr;
    padding-bottom: 7rem;
`

const StyledTitle = styled.h2`
    font-size: 4.8rem;
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.875rem;
    text-align: left;
    grid-column: 1 / 11;
    margin-bottom: 5rem;

    @media (max-width: 320px) {
        text-align: center;   
    }
`

const StyledText = styled.div`
    grid-column: 1 / 6;
`

const StyledH2 = styled.h2`
    font-size: 4rem;
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin: 0;
    letter-spacing: .1px;
`

const StyledH3 = styled.h3`
    font-size: 1.6rem;
    color: rgb(153, 153, 153);
    padding: 0;
    letter-spacing: .1px;
    text-align: justify;
    font-family: "Roboto";
    font-weight: 400;
`

const StyledFeatures = styled.div`
    grid-column: 6 / 11;
    `

const About = () => (
    <StyledSection id="about">
        <StyledTitle>O Mnie</StyledTitle>
        <StyledText>
            <StyledH2>Marcin Barszcz</StyledH2>
            <StyledH3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam provident aliquid quos qui expedita sint, labore saepe deserunt quidem consequatur velit libero quod dolore dicta quis. Cupiditate, et. Eum, mollitia?</StyledH3>
        </StyledText>
        <StyledFeatures>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum perferendis vitae voluptatem, quos provident animi quis eius non. Tempora ea amet, aliquam quae molestias rerum voluptatibus aut quo debitis assumenda.</StyledFeatures>
    </StyledSection>
)

export default About