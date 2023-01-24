import React from "react";
import { graphql } from "gatsby";
import Index from "../views/partners";
import Seo from "../components/Seo";

const Partners = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default Partners;

export const Head = () => <Seo title="Partners" />;

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
