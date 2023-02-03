import React from "react";
import Index from "../views/video";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const Video = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default Video;

export const Head = () => <Seo title="Video" />;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
