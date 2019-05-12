import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import FacebookSVG from "../images/icons/facebook.svg"
import LinkedInSVG from "../images/icons/linkedin.svg"
import GitHubSVG from "../images/icons/github.svg"

const StyledFooter = styled.footer`
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`

const StyledP = styled.p`
    font-size: 1.2rem;
    color: rgb(119, 119, 119);
    padding: 0;
    margin: 0 0 1rem 0;
    text-decoration: none;

    @media (max-width: 320px) {
      text-align: center;
    }
`

const StyledSpan = styled(Link)`
    color: rgb(12, 0, 255);
    font-weight: bold;
    margin: 0 .5rem;
    text-decoration: none;
    transition: all .4s ease-in;

    :hover {
        color: rgba(12, 0, 255, .5);
    }
`

const StyledIcon = styled.img`
    height: 2rem;
    width: 2rem;
    transition: all .5s ease-in-out;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 .5rem;

    :hover ${StyledIcon} {
        transform: rotate(360deg);
    }
`

const StyledBtn = styled(Link)`
    text-decoration: none;
    /* font-weight: bold; */
    text-transform: uppercase;
    /* height: 2rem;*/
    width: 3.5rem; 
    font-size: 3rem;
    line-height: 3rem;
    color: #fff;
    background: rgb(12, 0, 255);
    border: .2rem solid rgb(12, 0, 255);
    text-align: center;
    transition: all .4s ease-in-out;

    :hover {
        background: transparent;
        color: rgb(12, 0, 255);
    }
`

const Footer = () => (
    <StyledFooter>
        <StyledP>Copyright<StyledSpan to="/">2019 © Eincherjar</StyledSpan>. All Rights Reserved.</StyledP>
        <div>
            <StyledLink to="/">
                <StyledIcon src={FacebookSVG} alt="facebook logo" />
            </StyledLink>
            <StyledLink to="/">
                <StyledIcon src={LinkedInSVG} alt="linkedin logo" />
            </StyledLink>
            <StyledLink to="/">
                <StyledIcon src={GitHubSVG} alt="github logo" />
            </StyledLink>
        </div>
        <StyledBtn to="/">&#8593;</StyledBtn>
    </StyledFooter>
)

export default Footer