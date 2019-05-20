import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Bounce from "react-reveal/Bounce"

const StyledIcon = styled.img`
  height: 6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0.5;
  padding: 0.5rem;
  margin: 1rem 2rem;

  :hover {
    margin-top: -2rem;
    opacity: 1;
  }
`

const Icons = () => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/icons/technology/" } }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.source.edges.map(({ node }) => (
          <Bounce bottom delay={500}>
            <StyledIcon src={node.publicURL} alt="icon" />
          </Bounce>
        ))}
      </>
    )}
  />
)
export default Icons
