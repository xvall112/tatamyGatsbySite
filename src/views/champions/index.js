import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
//materialUi
import { Grid, Box } from "@mui/material";
//components
import Title from "../../components/Title";
import Container from "../../components/Container";
import CardChampions from "./component/cardChampions";

export const query = graphql`
  query {
    mens: allSanityChampions(
      filter: { sex: { eq: "male" } }
      sort: { weight: ASC }
    ) {
      nodes {
        weight
        name
        photo {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              aspectRatio: 0.8
            )
            filename
          }
        }
        youtube
        facebook
        instagram
        gym
      }
    }
    women: allSanityChampions(
      filter: { sex: { eq: "female" } }
      sort: { weight: ASC }
    ) {
      nodes {
        weight
        name
        photo {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            filename
          }
        }
        youtube
        facebook
        instagram
        gym
      }
    }
  }
`;

const Champions = () => {
  const data = useStaticQuery(query);
  const { mens, women } = data;
  console.log(women);
  return (
    <>
      {mens.nodes.length !== 0 && (
        <Container>
          <Title title={<Trans>Muži</Trans>} />
          <Grid container direction="row" spacing={2}>
            {mens.nodes.map((men) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <CardChampions
                    name={men.name}
                    weight={men.weight}
                    gym={men.gym}
                    photo={men.photo.asset}
                    instagram={men.instagram}
                    facebook={men.facebook}
                    youtube={men.youtube}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
      {women.nodes.length !== 0 && (
        <Container>
          <Title title={<Trans>Ženy</Trans>} />
          <Grid container direction="row" spacing={2}>
            {women.nodes.map((woman) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <CardChampions
                    name={woman.name}
                    weight={woman.weight}
                    gym={woman.gym}
                    photo={woman.photo.asset}
                    instagram={woman.instagram}
                    facebook={woman.facebook}
                    youtube={woman.youtube}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Champions;
