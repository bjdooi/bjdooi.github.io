import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Misc = ({ data }) => (
  <Layout>
    <Head pageTitle={data.miscJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.miscJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Misc.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Misc;

export const query = graphql`
  query MiscQuery {
    miscJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
