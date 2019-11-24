import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        {/* <image
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        /> */}
        <div className="iframe-container">
          <iframe
            title="Mood of the day"
            // The link below is a hack necssary for looping the video
            // src="https://www.youtube.com/embed/us5MGEL5W34?version=3&autoplay=1&loop=1&playlist=us5MGEL5W34"
            // src="https://www.youtube.com/embed/us5MGEL5W34"
            src="https://www.youtube.com/embed/RoGHVI-w9bE"
            frameBorder="0"
            playsInline
            // accelerometer
            autoPlay
            // loop
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    {/* <div style={{ height: '50vh' }} /> */}
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        endpoint
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
