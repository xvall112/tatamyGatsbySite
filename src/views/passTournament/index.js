import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import ReactPlayer from "react-player/youtube";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
//components
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import Title from "../../components/Title";
import MyPortableText from "../../components/PortableText";
//materialUi
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  useMediaQuery,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Container as MuiContainer,
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

const Index = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const { language } = useI18next();
  const {
    name,
    video,
    openResults,
    galaResults,
    description,
    date,
    titleImage,
    galleryLink,
    gallery,
    mobileTitleImage,
  } = data.sanityPastTournaments;
  const images = withArtDirection(getImage(titleImage.asset.gatsbyImageData), [
    {
      media: "(max-width: 1024px)",
      image: getImage(mobileTitleImage.asset.gatsbyImageData),
    },
  ]);
  return (
    <div>
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
              style={{ width: "100%", objectFit: "contain" }}
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
                    textShadow: `${theme.palette.secondary.main} 1px 0 10px`,
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
      </Container2>
      <MuiContainer maxWidth="sm">
        <Container>
          <Grid container direction="row" justifyContent="center" spacing={1}>
            {galaResults && (
              <Grid item xs={12}>
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
            )}
            {openResults && (
              <Grid item xs={12}>
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
            )}
          </Grid>
        </Container>
      </MuiContainer>
      <MuiContainer maxWidth="sm">
        <MyPortableText
          value={language === "cs" ? description._rawCs : description._rawEn}
        />
        {video && (
          <Container>
            <Title title={"Video"} />
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
        {gallery.length !== 0 && (
          <Container>
            <Title title={"Gallery"} />
            <ImageList variant="masonry" cols={isMd ? 3 : 1} gap={8}>
              {gallery.map((image) => {
                return (
                  <ImageListItem key={image.asset.filename}>
                    <GatsbyImage
                      image={image.asset.gatsbyImageData}
                      alt={image.asset.filename}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {galleryLink && (
              <Button
                variant="outlined"
                color="secondary"
                component={"a"}
                href={galleryLink}
                target="_blank"
                fullWidth
              >
                <Trans>Celá fotogalerie zde</Trans>
              </Button>
            )}
          </Container>
        )}
      </MuiContainer>
    </div>
  );
};

export default Index;
