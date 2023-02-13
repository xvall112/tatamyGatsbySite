import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
//components
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import Tabs from "./components/tabs";
import HarmonogramModal from "./components/harmonogramModal";
import MyPortableText from "../../components/PortableText";
//materialUi
import {
  Typography,
  Button,
  IconButton,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const StyledImg = styled(GatsbyImage)(({ theme }) => ({
  "& img": {
    maxHeight: "60vh",
    [theme.breakpoints.down("md")]: { minHeight: "50vh" },
    borderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
    WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
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
    mobileTitleImage,
    harmonogram,
  } = data.sanityNextTournaments;
  const theme = useTheme();
  const { language } = useI18next();
  const images = withArtDirection(getImage(titleImage.asset.gatsbyImageData), [
    {
      media: "(max-width: 1024px)",
      image: getImage(mobileTitleImage.asset.gatsbyImageData),
    },
  ]);
  return (
    <>
      <Container2>
        <ImageList
          cols={1}
          sx={{
            width: "100%",
            height: "auto",
            margin: "0px",
          }}
        >
          <ImageListItem>
            <StyledImg
              image={images}
              alt={titleImage?.asset?.filename}
              style={{ width: "100%" }}
            />
            <ImageListItemBar
              actionIcon={
                <IconButton
                  aria-label="back"
                  component={Link}
                  to={"/tournaments"}
                  sx={{
                    position: "absolute",
                    top: "10px",
                    zIndex: 1000,
                    left: "20px",
                  }}
                >
                  <MdArrowBackIosNew />
                </IconButton>
              }
              sx={{ height: "100%" }}
              position={"center"}
              title={
                <Typography
                  variant="h1"
                  fontWeight={700}
                  align="center"
                  style={{
                    webkitTextStroke: `2px ${color}`,
                    textShadow: `${color} 1px 0 10px`,
                  }}
                >
                  {name}
                </Typography>
              }
              subtitle={
                <Typography variant="h5" align="center">
                  {date}
                </Typography>
              }
            />
          </ImageListItem>
        </ImageList>
        {/* <IconButton
          aria-label="back"
          component={Link}
          to={"/tournaments"}
          sx={{
            position: "absolute",
            top: "100px",
            zIndex: 1000,
            left: "20px",
          }}
        >
          <MdArrowBackIosNew />
        </IconButton>
        <Box
          sx={{
            display: "grid",
            overflow: "hidden",
            borderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
            WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
          }}
        >
          <Box
            sx={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              height: "40vh",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              // This centers the other elements inside the hero component
              display: "grid",
              background: "rgba(0,0,0,0.6)",
              borderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
              WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
              overflow: "hidden",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                fontWeight={700}
                align="center"
                style={{
                  webkitTextStroke: `2px ${color}`,
                  textShadow: `${color} 1px 0 10px`,
                }}
              >
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
              height: "40vh",
              gridArea: "1/1",
            }}
          />
        </Box> */}
      </Container2>
      <Container>
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <Grid item xs={12} md={7}>
            <HarmonogramModal harmonogram={harmonogram} />
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
        <MyPortableText
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
