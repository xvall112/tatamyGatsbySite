import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import { graphql } from "gatsby";
//components
import Index from "../views/tournaments";

const Tournaments = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);
  return <Index />;
};

export default Tournaments;

export const Head = () => <title>Tournaments</title>;

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
