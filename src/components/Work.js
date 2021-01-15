import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Work = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulWork {
          edges {
            node {
              title
              id
              slug
              link
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
        }
      }
    `
  )
  return (
    <div className="portfolio-list mx-auto grid grid-cols-4">
      {data.allContentfulWork.edges.map(edge => {
        return (
          <div key={edge.node.id} className="portfolio-item">
            {edge.node.heroImage && (
              <div className="portfolio-image">
                <Img
                  className="featured"
                  fluid={edge.node.heroImage.fluid}
                  alt={edge.node.title}
                />
              </div>
            )}
            <div className="portfolio-contents">
              <div className="inner">
                <h2 className="text-2xl font-bold mb-2 leading-7 article-title">
                  {edge.node.title}
                </h2>

                <div dangerouslySetInnerHTML={{ __html: edge.node.body.childMarkdownRemark.html }} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Work
