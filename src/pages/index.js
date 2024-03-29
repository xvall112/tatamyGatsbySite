import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import { useI18next } from "gatsby-plugin-react-i18next";

//components
import IndexView from "../views/index/index";
import CookieConsent from "../components/CookieConsent";

const IndexPage = () => {
  return (
    <>
      <IndexView />
    </>
  );
};

export default IndexPage;

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
    organization: sanityOrganization {
      aboutTatamy {
        cs
        en
      }
    }
  }
`;

export const Head = (props) => {
  const { language } = useI18next();
  return (
    <>
      {/* <CookieConsent /> */}
      <Seo
        title="TATAMY Grapplingové a BJJ turnaje"
        description={
          language === "cs"
            ? props.data?.organization?.aboutTatamy?.cs
            : props.data?.organization?.aboutTatamy?.en
        }
      />
    </>
  );
};
