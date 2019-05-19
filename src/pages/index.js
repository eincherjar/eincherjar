import React from "react"
import { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin-ext');
  *, ::after, ::before {
    box-sizing: border-box;
    outline: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    max-width: 1600px;
    margin: 0 auto;
    padding: 4vh 6vw;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Strona Główna" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyle />
    <Header title="Helo, Helo" />
    <Main />
    <Footer />
  </>
)

export default IndexPage
