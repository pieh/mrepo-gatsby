import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import Helmet from 'react-helmet';

const Template =  ({ data: { page } }) => {   
  return (
    <Layout>
        <div>
        <Helmet title={`Docs | ${page.frontmatter.title}`} />
        <div className="page">
          <header>
            <span>{page.frontmatter.baseline}</span>
          </header>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query Template($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        templateKey
        path
        date
        description
      }
      fields {
        slug
      }
      html
    }
  }
`

