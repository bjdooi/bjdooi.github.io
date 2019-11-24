import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const SoftwareEng = ({ data }) => (
  <Layout>
    <Head pageTitle={data.softwareEngineeringJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.softwareEngineeringJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

SoftwareEng.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SoftwareEng;

export const query = graphql`
  query SoftwareEngQuery {
    softwareEngineeringJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
