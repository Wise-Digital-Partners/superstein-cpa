import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/seo'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'

const LocationTemplate = (props) => {
  return (
    <Layout>
      <EntryRenderer pageBuilderData={props.data.page.pageBuilder} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default LocationTemplate

export const query = graphql`
  query LocationQuery($id: String!) {
    page: sanityLocationsPages(id: { eq: $id }) {
      __typename
      seoTitle
      metaDescription
      pageBuilder {
        ...HeroSection
        ...GenericTwoColumnSection
        ...OurServicesSection
        ...IndustrySection
        ...WhySuperSteinCPASection
        ...TestmionailSection
        ...FeaturedBlogSection
        ...CTASection
        ...LocationPageTwoColumnSection
      }
    }
  }
`
