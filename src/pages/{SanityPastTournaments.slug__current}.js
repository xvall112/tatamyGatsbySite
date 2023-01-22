import React from "react";
import { graphql } from "gatsby";
import Index from "../views/passTournament";
export const query = graphql`
  query($slug__current: String!, $language: String!) {
    sanityPastTournaments(slug: { current: { eq: $slug__current } }) {
      slug {
        current
      }
      video
      openResults
      galaResults
      description {
        _rawCs
        _rawEn
      }
      date(formatString: "DD.MM.YYYY")
      name
    }
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

const PastTournament = (props) => {
  return (
    <div>
      <Index data={props.data} />
    </div>
  );
};

export default PastTournament;
