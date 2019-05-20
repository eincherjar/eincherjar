import React from "react"
import { createGlobalStyle } from "styled-components"
import CookieConsent from "react-cookie-consent"

import SEO from "../components/seo"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap&subset=latin-ext');
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
    <CookieConsent
      location="bottom"
      buttonText="Rozumiem"
      cookieName="Cookie"
      style={{
        background: "#fff",
        color: "rgba(153, 153, 153, 1)",
        fontSize: "1.3rem",
        fontFamily: "Montserrat",
        borderTop: "1px solid rgba(15, 28, 33, .1)",
      }}
      buttonStyle={{
        background: "rgba(15, 28, 33, 1)",
        color: "#fff",
        fontSize: "1.4rem",
      }}
      expires={150}
    >
      <p>
        Serwis wykorzystuje pliki cookies, aby ułatwić użytkownikom korzystanie
        z tego serwisu oraz do celów statystycznych. Brak zmiany ustawień
        przeglądarki w zakresie użycia plików cookie, oznacza zgodę na ich
        użycie oraz zapisanie w pamięci urządzenia. Każdy ma możliwość
        samodzielnego zarządzania cookies, poprzez zmianę ustawień przeglądarki.
      </p>
    </CookieConsent>
  </>
)

export default IndexPage
