import React from "react";
import { graphql } from "gatsby";

//components
import Index from "../views/organization";
import Seo from "../components/Seo";

const Organization = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default Organization;

export const Head = () => <Seo title="Organization" />;

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
