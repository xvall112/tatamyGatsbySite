import React from "react";
import { graphql } from "gatsby";
//components
import Index from "../views/blog/index";
import Seo from "../components/Seo";
export const query = graphql`
  query ($slug__current: String!, $language: String!) {
    sanityBlog(slug: { current: { eq: $slug__current } }) {
      slug {
        current
      }
      author
      date(formatString: "DD.MM.YYYY")
      mobileTitleImage {
        asset {
          url
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500)
          filename
        }
      }
      video
      title {
        cs
        en
      }
      subtitle {
        cs
        en
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
          filename
        }
      }
      text {
        _rawCs
        _rawEn
      }
      subtitle {
        cs
        en
      }
      galleryLink
      gallery {
        asset {
          filename
          gatsbyImageData
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
    title={props.data.sanityBlog.title.cs}
    description={props.data.sanityBlog.subtitle.cs}
    image={props.data.sanityBlog.titleImage.asset.url}
  />
);
