import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
//materialUI

//components
import PartnersByGroup from "./components/partnersByGroup";
import Title from "../../components/Title";
import Container from "../../components/Container";
export const query = graphql`
  query {
    generalPartners: allSanityPartners(
      filter: { Id: { eq: "generalPartners" } }
    ) {
      nodes {
        link
        name
        Id
        logo {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            filename
          }
        }
      }
    }
    mainPartners: allSanityPartners(
      filter: { Id: { eq: "mainPartners" } }
    ) {
      nodes {
        link
        name
        Id
        logo {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            filename
          }
        }
      }
    }
    partners: allSanityPartners(filter: { Id: { eq: "partners" } }) {
      nodes {
        link
        name
        Id
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
      filter: { Id: { eq: "mediaPartners" } }
    ) {
      nodes {
        link
        name
        Id
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
      {/*  <Container>
        <Button variant="outlined" color="secondary" fullWidth>
          <Trans>Stát se partnerem</Trans>
        </Button> 
      </Container>*/}
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
