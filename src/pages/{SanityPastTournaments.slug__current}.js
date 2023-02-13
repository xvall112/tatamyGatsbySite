import React from "react";
import { graphql } from "gatsby";
//components
import Index from "../views/passTournament";
import Seo from "../components/Seo";
export const query = graphql`
  query($slug__current: String!, $language: String!) {
    sanityPastTournaments(slug: { current: { eq: $slug__current } }) {
      galleryLink
      gallery {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 600)
          filename
        }
      }
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

const PastTournament = (props) => {
  return (
    <div>
      <Index data={props.data} />
    </div>
  );
};

export default PastTournament;

export const Head = (props) => (
  <Seo
    title={props.data.sanityPastTournaments.name}
    description={props.data.sanityPastTournaments.description._rawCs}
    image={props.data.sanityPastTournaments.titleImage.asset.url}
  />
);
