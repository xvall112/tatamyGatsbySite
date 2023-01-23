import React, { useContext } from "react";
import { graphql } from "gatsby";
import { MenuContext } from "../Context/MenuContext";
import Index from "../views/partners";
const Partners = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return (
    <div>
      <Index />
    </div>
  );
};

export default Partners;

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