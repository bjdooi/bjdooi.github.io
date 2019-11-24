import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Invoice = ({ data }) => (
  <Layout>
    <Head pageTitle={data.invoiceJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.invoiceJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Invoice.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Invoice;

export const query = graphql`
  query InvoiceQuery {
    invoiceJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
