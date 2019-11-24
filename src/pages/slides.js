import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Slides = ({ data }) => (
  <Layout>
    <Head pageTitle={data.slidesJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.slidesJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Slides.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slides;

export const query = graphql`
  query SlidesQuery {
    slidesJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
