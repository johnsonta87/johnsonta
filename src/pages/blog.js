import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"

export default function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="back-btn">
        <Link to="/">Go home</Link>
      </div>

      <Blog />
    </Layout>
  )
}
