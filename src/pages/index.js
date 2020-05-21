import React from "react"
import "../styles/layout.scss"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import AboutMe from "../components/about_me"
import Offer from "../components/offers"
import Help from "../components/help_forms"
import Pricelist from "../components/price_list"
import Contact from "../components/contact"
import { Helmet } from 'react-helmet'
const IndexPage = () => (

  <div>
    <SEO title="Gabinet Psychologiczny zmiana na lepsze" /> 
    
    <Header></Header>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Offer></Offer>
    <Help></Help>
    <Pricelist></Pricelist>
    <Contact></Contact>
    <Helmet>    
      <script src="https://kit.fontawesome.com/24b42d480f.js" crossorigin="anonymous" ></script>
      <script key="xx" type="text/javascript" src='znanylekarz.js' />
    </Helmet>
  </div>
)

export default IndexPage
