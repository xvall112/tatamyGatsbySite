import React from "react";
import Index from "../views/news";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const News = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default News;

export const Head = () => <Seo title="News" />;

export const query = graphql`
  query ($language: String!) {
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
