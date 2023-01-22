import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
//components
import Container from "../../components/Container";
import Title from "../../components/Title";
import Cards from "./components/cards";

export const query = graphql`
  query {
    nextTournaments: allSanityNextTournaments(sort: { date: ASC }) {
      nodes {
        date(formatString: "DD.MM.YYYY")
        slug {
          current
        }
        name
        titleImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              aspectRatio: 1
            )
            filename
          }
        }
      }
    }
    pastTournaments: allSanityPastTournaments(sort: { date: DESC }) {
      nodes {
        date(formatString: "DD.MM.YYYY")
        name
        slug {
          current
        }
        titleImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              aspectRatio: 1
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
  const { nextTournaments, pastTournaments } = data;

  return (
    <>
      <Container>
        <Title title={<Trans>Nadcházející turnaje</Trans>} />
        <Cards cards={nextTournaments} />
      </Container>
      <Container>
        <Title title={<Trans>Předešlé turnaje</Trans>} />
        <Cards cards={pastTournaments} />
      </Container>
    </>
  );
};

export default Index;
