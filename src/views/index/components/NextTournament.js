import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import Countdown from "react-countdown";
//components
import Title from "../../../components/Title";
//materialUi
import { useTheme } from "@mui/material/styles";
import { Grid, Button, Typography } from "@mui/material";

export const query = graphql`
  query {
    sanityHomePage {
      nextTournament {
        name
        date(formatString: "DD.MM.YYYY")

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

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}dní {hours}hodin {minutes}minut {seconds}sekund
      </span>
    );
  }
};

const NextTournament = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { nextTournament } = data.sanityHomePage;
  const { language } = useI18next();

  return (
    <>
      {nextTournament && (
        <>
          <Title title={<Trans>Následující turnaj</Trans>} />
          <Grid container direction="row" spacing={{ xs: 2, md: 4 }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                "& img": {
                  borderRadius: `${theme.rounded} ${theme.rounded}`,
                  WebkitBorderRadius: `${theme.rounded} ${theme.rounded}`,
                },
              }}
            >
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
              md={6}
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h2"
                  fontWeight={700}
                  sx={{ color: `${nextTournament.color}` }}
                >
                  {nextTournament.name}
                </Typography>
                <Typography align="center" variant="h5">
                  {nextTournament.date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  {language === "cs"
                    ? nextTournament.shortDescription.cs
                    : nextTournament.shortDescription.en}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={`/${nextTournament.slug.current}`}
                >
                  <Trans>Více info</Trans>
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  component={"a"}
                  href={nextTournament.open.registration}
                  sx={{ mt: 1, backgroundColor: `${nextTournament.color}` }}
                >
                  <Trans>Registrace</Trans>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default NextTournament;
