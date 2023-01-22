import React, { useContext } from "react";
import { graphql } from "gatsby";
import { MenuContext } from "../Context/MenuContext";
//components
import Index from "../views/organization";

const Organization = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return (
    <>
      <Index />
    </>
  );
};

export default Organization;

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
