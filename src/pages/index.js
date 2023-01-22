import React, { useContext } from "react";
import { graphql } from "gatsby";
import { MenuContext } from "../Context/MenuContext";

//components
import IndexView from "../views/index/index";
import Tabs from "../layouts/Main/components/Tabs";
const IndexPage = ({ location }) => {
  const { setPathname } = useContext(MenuContext);
  setPathname(location.pathname);

  return (
    <>
      <IndexView />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

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
