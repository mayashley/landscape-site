import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from '../components/Home/About'
import OurServices from '../components/Home/OurServices'

export default () => (
  <>
    <Layout>
      <Hero>
        <Banner
          title="Landscaping Company"
          info="Landscaping service in southern Ohio"
        ></Banner>
      </Hero>
      <About />
      <OurServices />
    </Layout>
  </>
)
