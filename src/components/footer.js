import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { colors } from "../utils/colors"

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
  color: ${colors.dark};
  font-weight: bold;
  margin: 0 0.5rem;
  text-decoration: none;
  transition: all 0.4s ease-in;

  :hover {
    color: ${colors.primary};
  }
`

const StyledIcon = styled.img`
  height: 2rem;
  width: 2rem;
  transition: all 0.5s ease-in-out;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 1rem;

  :hover ${StyledIcon} {
    transform: rotate(360deg);
  }
`

const StyledBtn = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  width: 3.5rem;
  font-size: 3rem;
  line-height: 3rem;
  color: #fff;
  background: ${colors.dark};
  border: 0.2rem solid ${colors.dark};
  text-align: center;
  transition: all 0.4s ease-in-out;

  :hover {
    background: transparent;
    color: ${colors.dark};
  }
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query socialImages {
        facebook: allFile(filter: { name: { eq: "facebook" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
        linkedin: allFile(filter: { name: { eq: "linkedin" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
        github: allFile(filter: { name: { eq: "github" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
        <StyledP>
          Copyright<StyledSpan to="/">2019 © Eincherjar</StyledSpan>. All Rights
          Reserved.
        </StyledP>
        <div>
          <StyledLink to="https://www.facebook.com/einherjar.x">
            {data.facebook.edges.map(({ node }) => (
              <StyledIcon src={node.publicURL} alt="facebook logo" />
            ))}
          </StyledLink>
          <StyledLink to="https://www.linkedin.com/in/marcin-barszcz-1a4686182/">
            {data.linkedin.edges.map(({ node }) => (
              <StyledIcon src={node.publicURL} alt="facebook logo" />
            ))}
          </StyledLink>
          <StyledLink to="https://github.com/eincherjar">
            {data.github.edges.map(({ node }) => (
              <StyledIcon src={node.publicURL} alt="facebook logo" />
            ))}
          </StyledLink>
        </div>
        <StyledBtn to="/">&#8593;</StyledBtn>
      </StyledFooter>
    )}
  />
)

export default Footer
