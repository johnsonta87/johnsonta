import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layouts/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const {
    title,
    publishDate,
    tags,
    body,
    heroImage
  } = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO title={title} />
      <div className="back-btn">
        <Link to="/">See other posts</Link>
      </div>

      <div className="article-header">
        <h1 className="font-bold text-5xl article-title max-w-prose mb-3">{title}</h1>
        <span className="meta">
          {publishDate} &middot; {tags}
        </span>
      </div>
      <div className="content mt-8">
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />

        {heroImage && (
          <Img
            className="featured"
            fluid={heroImage.fluid}
            alt={title}
          />
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
