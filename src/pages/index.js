import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link } from '@material-ui/core';

import ProTip from '../components/ProTip'


import '../scss/main.scss'


const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <ProTip />
      <Link href='gallery'>Gallery</Link>
    </Layout>

  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
