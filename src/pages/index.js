import React from 'react'
import Layout from '../layouts/Layout'
import { Link } from 'gatsby'
import { graphql } from 'gatsby' 

const IndexPage = ({data}) => (
  <Layout>
    <h1>dgfgdfgfg</h1>
    <p>dfdsfsdf</p>
   <h2>Documentation</h2>
   {data.allMarkdownRemark.edges.map(post => (
<ul>
  <li> 
 <Link
 to={post.node.frontmatter.path}>
 {post.node.frontmatter.title}
 </Link>
 </li>
 </ul>
   ))}
  
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`