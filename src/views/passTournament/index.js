import React from "react";
import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player/youtube";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
//components
import Container from "../../components/Container";
//materialUi
import { Typography, Button, IconButton, Grid, Box } from "@mui/material";

const Index = ({ data }) => {
  const { language } = useI18next();
  const {
    name,
    video,
    openResults,
    galaResults,
    description,
    date,
  } = data.sanityPastTournaments;
  return (
    <div>
      <Container>
        <IconButton aria-label="back" component={Link} to={"/tournaments"}>
          <MdArrowBackIosNew />
        </IconButton>
        <Typography variant="h3" fontWeight={700} align="center">
          {name}
        </Typography>
        <Typography variant="h6" align="center">
          {date}
        </Typography>
      </Container>
      <Container>
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <Grid item xs={12} md={7}>
            <Button
              variant="contained"
              component={"a"}
              href={galaResults}
              target="_blank"
              fullWidth
            >
              <Trans>Výsledky GALA</Trans>
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <Button
              variant="contained"
              component={"a"}
              href={openResults}
              target="_blank"
              fullWidth
            >
              <Trans>Výsledky OPEN</Trans>
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <PortableText
          value={language === "cs" ? description._rawCs : description._rawEn}
        />
      </Container>
      {video && (
        <Container>
          <Box display="flex" justifyContent="center">
            <ReactPlayer
              controls={true}
              light={true}
              url={video}
              maxWidth="600px"
            />
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Index;
