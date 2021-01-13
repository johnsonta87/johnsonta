import React from 'react'

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"

export default function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />

      <Blog />
    </Layout>
  )
}
