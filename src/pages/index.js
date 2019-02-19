import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {data.allContentfulTest.edges.map((test, index) => (
          <Img key={index} fluid={test.node.image.fluid} />
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allContentfulTest {
      edges {
        node {
          title
          image {
            fluid(maxWidth: 300) {
              # the _tracedSVG part causes the graphql queries to run indefinitely,
              # if you change it to ...GatsbyContentfulFluid it works as expected
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
