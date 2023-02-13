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
          style={{
            display: "grid",
            borderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
            WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
            overflow: "hidden",
          }}
        >
          <Box
            style={{
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
                  textShadow: `${theme.palette.secondary.main} 1px 0 10px`,
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
        <MyPortableText
          value={language === "cs" ? description._rawCs : description._rawEn}
        />
      </Container>
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
      {gallery && (
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
        </Container>
      )}
    </div>
  );
};

export default Index;
