import React from "react";
import { graphql } from "gatsby";
//components
import Seo from "../components/Seo";
import Index from "../views/nextTournament";

export const query = graphql`
  query($slug__current: String!, $language: String!) {
    sanityNextTournaments(slug: { current: { eq: $slug__current } }) {
      harmonogram {
        text {
          cs
          en
        }
        time
      }
      slug {
        current
      }
      buttonLabel {
        cs
        en
      }
      openInNewTab
      url
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
          url
          filename
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 2000
          )
        }
      }
      mobileTitleImage {
        asset {
          url
          filename
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
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

export const Head = (props) => (
  <Seo
    title={props.data.sanityNextTournaments.name}
    description={props.data.sanityNextTournaments.description._rawCs}
    image={props.data.sanityNextTournaments.titleImage.asset.url}
  />
);
