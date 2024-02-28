import React from "react";
import Index from "../views/blogPage/index";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const Blog = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default Blog;

export const Head = () => <Seo title="Blog" />;

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
