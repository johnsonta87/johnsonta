import React from 'react'

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"
import BackButton from '../components/BackButton'

export default function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />
      <BackButton link="/" value="Go Home" />

      <Blog />
    </Layout>
  )
}
