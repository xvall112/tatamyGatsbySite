import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
//components
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import Tabs from "./components/tabs";
//materialUi
import { Typography, Button, IconButton, Grid, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const StyledImg = styled(GatsbyImage)(({ theme }) => ({
  "& img": {
    borderRadius: `${theme.rounded}`,
    WebkitBorderRadius: `${theme.rounded}`,
  },
}));

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
  const theme = useTheme();
  const { language } = useI18next();
  return (
    <>
      <Container2>
        <IconButton
          aria-label="back"
          component={Link}
          to={"/tournaments"}
          sx={{ marginBottom: 1 }}
        >
          <MdArrowBackIosNew />
        </IconButton>
        <Box
          sx={{
            display: "grid",
            overflow: "hidden",
            borderRadius: ` ${theme.rounded}`,
            WebkitBorderRadius: ` ${theme.rounded}`,
          }}
        >
          <Box
            sx={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              height: "30vh",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              // This centers the other elements inside the hero component
              display: "grid",
              background: "rgba(0,0,0,0.6)",
              borderRadius: ` ${theme.rounded}`,
              WebkitBorderRadius: ` ${theme.rounded}`,
              overflow: "hidden",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h2" fontWeight={700} align="center">
                {name}
              </Typography>
              <Typography variant="h5" align="center">
                {date}
              </Typography>
            </Grid>
          </Box>
          <StyledImg
            image={titleImage?.asset?.gatsbyImageData}
            alt={titleImage?.asset?.filename}
            style={{
              height: "30vh",
              gridArea: "1/1",
            }}
          />
        </Box>
      </Container2>
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
              color="success"
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