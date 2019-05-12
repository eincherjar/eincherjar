import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 4rem;
    /* grid-auto-rows: 50vh; */
    padding: 5vh 0;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 320px) {
        grid-gap: 2rem;
    }
`

const StyledOverlay = styled.div`
    background: rgba(255, 255, 255, 0.8);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    transition: all 0.5s ease-in-out;
`

const StyledLink = styled(Link)`
    position: relative;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    :nth-child(1), :nth-child(3), :nth-child(6), :nth-child(7) {
        grid-column: span 5;

        @media (max-width: 320px) {
            grid-column: span 10;
        }
    }

    :nth-child(2), :nth-child(5) {
        grid-column: span 5;
        grid-row: span 2;

        @media (max-width: 320px) {
            grid-column: span 10;
        }
    }
    
    :nth-child(4) {
        grid-column: span 10;
        grid-row: 3;
        height: 50vh;

        @media (max-width: 320px) {
            grid-column: span 10;
            height: auto;
        }
    }

    :hover ${StyledOverlay} {
        opacity: 1;
        cursor: pointer;
        height: 100%;
    }
`

const StyledImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    object-position: top;
`

const StyledCategory = styled.span`
    color: #fff;
    background: rgb(12, 0, 255);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
`

const StyledTitle = styled.h3`
    font-size: 1.4rem;
    color: rgb(12, 0, 255);
    font-weight: bold;
    margin: 0;
`

const StyledBtn = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem 2rem;
    color: #fff;
    background: rgb(12, 0, 255);
    border: .2rem solid rgb(12, 0, 255);
    text-align: center;
    grid-column-start: 4;
    grid-column-end: 8;
    transition: all .4s ease-in-out;

    :hover {
        background: transparent;
        color: rgb(12, 0, 255);
    }

    @media (max-width: 320px) {
        grid-column-start: 2;
        grid-column-end: 10;
    }
`

const Portfolio = () => (
    <StyledSection id="portfolio">
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2146959/pexels-photo-2146959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2260848/pexels-photo-2260848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2257502/pexels-photo-2257502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2262621/pexels-photo-2262621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2253640/pexels-photo-2253640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2223082/pexels-photo-2223082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledLink to="/">
            <StyledImage src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
            <StyledOverlay>
                <StyledCategory>HTML5, CSS GRID, CSS FLEX, RWD</StyledCategory>
                <StyledTitle>Holver</StyledTitle>
            </StyledOverlay>
        </StyledLink>
        <StyledBtn to="/works">Zobacz więcej</StyledBtn>
    </StyledSection>
)

export default Portfolio