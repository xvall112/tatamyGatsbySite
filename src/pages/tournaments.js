import React from "react";

import { graphql } from "gatsby";
//components
import Index from "../views/tournaments";
import Seo from "../components/Seo";

const Tournaments = () => {
  return <Index />;
};

export default Tournaments;

export const Head = () => <Seo title="Tournaments" />;

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
