import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

//components
import PartnersByGroup from "./components/partnersByGroup";
import Title from "../../components/Title";
import Container from "../../components/Container";
export const query = graphql`
  query {
    generalPartners: allSanityPartners(
      filter: { sanityId: { eq: "generalPartners" } }
    ) {
      nodes {
        link
        name
        sanityId
        logo {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            filename
          }
        }
      }
    }
    mainPartners: allSanityPartners(
      filter: { sanityId: { eq: "mainPartners" } }
    ) {
      nodes {
        link
        name
        sanityId
        logo {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            filename
          }
        }
      }
    }
    partners: allSanityPartners(filter: { sanityId: { eq: "partners" } }) {
      nodes {
        link
        name
        sanityId
        logo {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 300
            )
            filename
          }
        }
      }
    }
    mediaPartners: allSanityPartners(
      filter: { sanityId: { eq: "mediaPartners" } }
    ) {
      nodes {
        link
        name
        sanityId
        logo {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 350
            )
            filename
          }
        }
      }
    }
  }
`;

const Index = () => {
  const data = useStaticQuery(query);
  const { generalPartners, mainPartners, partners, mediaPartners } = data;

  return (
    <>
      {generalPartners?.nodes?.length !== 0 && (
        <Container>
          <Title title={<Trans>Generální partneři</Trans>} />
          <PartnersByGroup partners={generalPartners.nodes} />
        </Container>
      )}
      {mainPartners?.nodes?.length !== 0 && (
        <Container>
          <Title title={<Trans>Hlavní partneři</Trans>} />
          <PartnersByGroup partners={mainPartners.nodes} />
        </Container>
      )}
      {partners?.nodes?.length !== 0 && (
        <Container>
          <Title title={<Trans>Partneři</Trans>} />
          <PartnersByGroup partners={partners.nodes} />
        </Container>
      )}
      {mediaPartners?.nodes?.length !== 0 && (
        <Container>
          <Title title={<Trans>Medialní partneři</Trans>} />
          <PartnersByGroup partners={mediaPartners.nodes} />
        </Container>
      )}
    </>
  );
};

export default Index;
