import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import { AiFillCaretRight } from "react-icons/ai";

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishDate(formatString: "MMMM Do, YYYY")
              heroImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              body {
                childMarkdownRemark {
                  excerpt
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div className="posts max-w-lg mx-auto">
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <div key={edge.node.id} className="post-item rounded-lg mt-6 mb-6 text-center">
            <p className="text-sm mb-2 meta">
              {edge.node.publishDate}
            </p>
            <div>
              <h2 className="text-2xl font-bold mb-2 leading-7 article-title">
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
            </div>
            {edge.node.heroImage && (
              <Img
                className="featured"
                fluid={edge.node.heroImage.fluid}
                alt={edge.node.title}
              />
            )}
            <p className="excerpt">
              {edge.node.body.childMarkdownRemark.excerpt}
            </p>
            <div className="mt-4 button readmore-link">
              <Link
                to={`/blog/${edge.node.slug}/`}>Read more <AiFillCaretRight /></Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blog
