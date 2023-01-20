import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Trans } from "gatsby-plugin-react-i18next";
//materialUi
import { useTheme } from "@mui/material/styles";
import { Grid, Button, Typography } from "@mui/material";

export const query = graphql`
  query {
    sanityHomePage {
      nextTournament {
        name
        date(formatString: "DD-MM-YYYY")
        shortDescription {
          en
          cs
        }
        slug {
          current
        }
        color
        open {
          registration
        }
        titleImage {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              fit: FILL
            )
            altText
            filename
          }
        }
      }
    }
  }
`;

const NextTournament = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { nextTournament } = data.sanityHomePage;
  return (
    <>
      {nextTournament && (
        <Grid container direction="row" spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} lg={6}>
            <GatsbyImage
              image={nextTournament?.titleImage?.asset?.gatsbyImageData}
              alt={nextTournament.titleImage.asset?.filename}
              style={{ borderRadius: theme.rounded }}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            xs={12}
            lg={6}
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h3"
                fontWeight={700}
                sx={{ color: `${nextTournament.color}` }}
              >
                {nextTournament.name}
              </Typography>
              <Typography align="center" variant="h6">
                {nextTournament.date}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                {nextTournament.shortDescription.cs}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                component={Link}
                to={nextTournament.slug.current}
              >
                <Trans>Více info</Trans>
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                component={"a"}
                href={nextTournament.open.registration}
                sx={{ mt: 1, backgroundColor: `${nextTournament.color}` }}
              >
                <Trans>Registrace</Trans>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default NextTournament;
