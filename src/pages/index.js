import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"

export default () => (
  <>
    <Layout>
      <Hero>
        <Banner
          title="Ferrel Landscaping"
          info="Landscaping service in southern Ohio"
        ></Banner>
      </Hero>
    </Layout>
  </>
)
