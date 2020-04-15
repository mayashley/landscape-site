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
          title="Southern Ohio Landscaping"
          info="Proudly serving Southern Ohio since 2020"
        ></Banner>
      </Hero>
      <About />
      <OurServices />
    </Layout>
  </>
)
