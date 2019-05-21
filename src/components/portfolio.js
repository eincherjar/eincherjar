import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { colors } from "../utils/colors"
import Projects from "../utils/Projects.json"
import Img from "gatsby-image"
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  padding: 6rem 0;
`

const StyledMainTitle = styled.h2`
  font-size: 4.8rem;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 4.875rem;
  text-align: left;
  width: 100%;
  position: relative;
  margin-bottom: 6rem;

  ::after {
    content: "PROJEKTY";
    position: absolute;
    top: 0;
    left: 2rem;
    color: ${colors.secondary};
    z-index: -1;
    font-size: 16rem;
    opacity: 0.2;

    @media (max-width: 320px) {
      top: 1rem;
      left: 1rem;
      font-size: 5rem;
    }
  }

  @media (max-width: 320px) {
    text-align: center;
  }
`

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  margin: 6rem 0;

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  object-fit: cover;
  object-position: top;
  grid-column-start: ${({ order }) => (order % 2 === 0 ? "1" : "2")};
  grid-row-start: 1;

  @media (max-width: 320px) {
    grid-column-start: 1;
  }
`

const StyledContent = styled.div`
  text-align: ${({ order }) => (order % 2 === 0 ? "left" : "right")};
  padding: 2rem;

  @media (max-width: 320px) {
    text-align: center;
  }
`

const StyledTitle = styled.h4`
  font-size: 3.4rem;
  color: ${colors.dark};
  font-weight: bold;
  margin: 0;

  /* @media (max-width: 320px) {
    text-align: center;
  } */
`

const StyledDescription = styled.h5`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 4rem;
  color: ${colors.secondary};

  /* @media (max-width: 320px) {
    text-align: center;
  } */
`

const StyledBtn = styled.a`
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: #fff;
  background: ${colors.dark};
  border: 0.2rem solid ${colors.dark};
  text-align: center;
  grid-column-start: 4;
  grid-column-end: 8;
  transition: all 0.4s ease-in-out;

  :hover {
    background: transparent;
    color: ${colors.dark};
  }

  /* @media (max-width: 320px) {
    grid-column-start: 2;
    grid-column-end: 10;
  } */
`

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query AllProjects {
        allFile(filter: { absolutePath: { regex: "/projects/" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledSection id="portfolio">
        <Slide left>
          <StyledMainTitle>Projekty</StyledMainTitle>
        </Slide>
        <Zoom>
          {data.allFile.edges.map((item, i) => (
            <StyledWrapper>
              <StyledImage fluid={item.node.childImageSharp.fluid} order={i} />
              <StyledContent order={i}>
                {Projects.filter(x => x.name === item.node.name).map(title => {
                  return <StyledTitle>{title.title}</StyledTitle>
                })}

                {Projects.filter(x => x.name === item.node.name).map(
                  description => {
                    return (
                      <StyledDescription>
                        {description.description}
                      </StyledDescription>
                    )
                  }
                )}

                {Projects.filter(x => x.name === item.node.name).map(url => {
                  return (
                    <StyledBtn href={url.url} target="_blank">
                      Zobacz więcej
                    </StyledBtn>
                  )
                })}
              </StyledContent>
            </StyledWrapper>
          ))}
        </Zoom>
      </StyledSection>
    )}
  />
)

export default Portfolio
