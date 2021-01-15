import React from "react"

import Work from "../components/Work"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />

    <Work />
  </Layout>
)

export default WorkPage
