import React from "react";
import { graphql } from "gatsby";
import Index from "../views/nextTournament";
export const query = graphql`
  query($slug__current: String!, $language: String!) {
    sanityNextTournaments(slug: { current: { eq: $slug__current } }) {
      slug {
        current
      }
      color
      date(formatString: "DD.MM.YYYY")
      description {
        _rawEn
        _rawCs
      }
      gala {
        name
        fighters {
          asset {
            filename
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        info {
          _rawEn
          _rawCs
        }
      }
      name
      open {
        name
        info {
          _rawEn
          _rawCs
        }
        registration
      }
      superfight {
        info {
          _rawEn
          _rawCs
        }
        name
        matches {
          asset {
            filename
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      titleImage {
        asset {
          filename
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
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
const NextTournament = (props) => {
  return (
    <div>
      <Index data={props.data} />
    </div>
  );
};

export default NextTournament;
