import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import { colors } from "../utils/colors"

const StyledNav = styled.nav`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
`

const StyledLogo = styled(Link)`
  font-size: 2rem;
  color: ${colors.dark};
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin-right: auto;
  order: 1;

  :hover {
    margin-left: 1rem;
  }

  img {
    width: 70%;
  }
`

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  order: 2;
  list-style: none;
`

const StyledLink = styled(Link)`
  color: ${({ isActive }) =>
    isActive ? "rgb(0, 0, 0)" : "rgb(153, 153, 153)"};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 30px;
  padding: 10px 10px 5px 10px;
  transition: all 0.4s ease-in-out;
  position: relative;

  :hover {
    color: rgb(0, 0, 0);
    position: relative;
  }

  ::after {
    position: absolute;
    bottom: 0;
    left: 10px;
    content: "";
    width: ${({ isActive }) => (isActive ? "2rem" : "0")};
    border-bottom: 2px solid rgb(218, 218, 218);
    transition: all 0.4s ease-in-out;
  }

  :hover::after {
    width: 20px;
  }
`

const StyledMenu = styled.button`
  display: none;
  order: 2;
  margin-left: 20px;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(12, 0, 255, 1);
  font-weight: 700;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  :hover {
    background-color: rgba(12, 0, 255, 0.6);
  }

  @media (max-width: 920px) {
    display: inherit;
  }
`

const StyledDesktop = styled.div`
  @media only screen and (max-width: 920px) {
    display: none;
  }
`

const StyledMobile = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  overflow-x: hidden;
  transition: all 0.5s ease 0s;
`

const StyledContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

const StyledClose = styled.button`
  position: absolute;
  top: 4.3rem;
  right: 4rem;
  font-size: 60px;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(12, 0, 255, 1);
  font-weight: 700;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  :hover {
    background-color: rgba(12, 0, 255, 0.6);
  }
`

const StyledMobileLink = styled(StyledLink)`
  font-size: 2rem;
  margin: 1rem 0;
`

function openNav() {
  document.getElementById("mobile__menu").style.width = "100%"
}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0"
}

const Nav = () => (
  <StyledNav role="navigation">
    <StyledLogo to="/">
      <img src={Logo} alt="Logo" />
    </StyledLogo>
    <StyledNavbar>
      <StyledDesktop>
        <StyledLink to="/" isActive>
          Strona Główna
        </StyledLink>
        <StyledLink to="/#portfolio">Portfolio</StyledLink>
        <StyledLink to="/#about">O mnie</StyledLink>
        {/* <StyledLink to="/">News </StyledLink> */}
        <StyledLink to="/#contact">Kontakt</StyledLink>
      </StyledDesktop>
      <StyledMobile id="mobile__menu">
        <StyledClose onClick={closeNav}>&times;</StyledClose>
        <StyledContent>
          <StyledMobileLink to="/#portfolio" onClick={closeNav}>
            Portfolio
          </StyledMobileLink>
          <StyledMobileLink to="/#about" onClick={closeNav}>
            O mnie
          </StyledMobileLink>
          {/* <StyledMobileLink to="/" onClick={closeNav}>News </StyledMobileLink> */}
          <StyledMobileLink to="/#contact" onClick={closeNav}>
            Kontakt
          </StyledMobileLink>
        </StyledContent>
      </StyledMobile>
      <StyledMenu onClick={openNav}>&#9776;</StyledMenu>
    </StyledNavbar>
  </StyledNav>
)

export default Nav
