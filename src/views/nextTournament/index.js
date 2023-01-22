import React from "react";
import { PortableText } from "@portabletext/react";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
//components
import Container from "../../components/Container";
import Tabs from "./components/tabs";
//materialUi
import { Typography, Button, IconButton, Grid } from "@mui/material";
const NextTournament = ({ data }) => {
  const {
    color,
    date,
    description,
    gala,
    name,
    open,
    superfight,
    titleImage,
  } = data.sanityNextTournaments;
  const { language } = useI18next();
  return (
    <>
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
            <Button variant="outlined" color="secondary" fullWidth>
              <Trans>Harmonogram</Trans>
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <Button
              variant="contained"
              component={"a"}
              href={open.registration}
              target="_blank"
              sx={{ backgroundColor: color }}
              fullWidth
            >
              <Trans>Registrace</Trans>
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <PortableText
          value={language === "cs" ? description._rawCs : description._rawEn}
        />
      </Container>
      <Container>
        <Tabs gala={gala} superfight={superfight} open={open} />
      </Container>
    </>
  );
};

export default NextTournament;
