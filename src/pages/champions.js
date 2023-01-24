import React from "react";
import { graphql } from "gatsby";

//components
import Index from "../views/champions";
import Seo from "../components/Seo";
const Champions = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default Champions;

export const Head = () => <Seo title="Champions" />;

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
