import React from "react"
import Nav from "./nav"
import Hero from "./hero"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = () => (
  <StyledHeader >
    <Nav />
    <Hero />
  </StyledHeader>
)

export default Header