import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Locksmith = ({ data }) => (
  <Layout>
    <Head pageTitle={data.locksmithJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.locksmithJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Locksmith.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Locksmith;

export const query = graphql`
  query LocksmithQuery {
    locksmithJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
