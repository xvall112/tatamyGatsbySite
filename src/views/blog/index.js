import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdArrowBackIosNew } from "react-icons/md";
import ReactPlayer from "react-player/youtube";
//components
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import MyPortableText from "../../components/PortableText";
import SimilarStories from "./components/SimilarStories";
import Title from "../../components/Title";
//materialUi
import {
  Typography,
  Box,
  Avatar,
  ListItemText,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Divider,
  useMediaQuery,
  Button,
  Container as MuiContainer,
} from "@mui/material";
import { styled, useTheme, alpha } from "@mui/material/styles";

const StyledImg = styled(GatsbyImage)(({ theme }) => ({
  "& img": {
    maxHeight: "60vh",
    [theme.breakpoints.down("md")]: { minHeight: "50vh" },
    borderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
    WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
  },
}));

const Blog = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const {
    date,
    text,
    subtitle,
    galleryLink,
    gallery,
    title,
    video,
    author,
    titleImage,
    mobileTitleImage,
  } = data.sanityBlog;

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
                  to={"/news"}
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
              sx={{
                height: "100%",
                "& .MuiImageListItemBar-title": {
                  whiteSpace: "normal",
                },
              }}
              position={"center"}
              title={
                <Container position={"relative"} zIndex={2} widt>
                  <Typography
                    variant="h3"
                    paragraph
                    sx={{
                      fontWeight: 400,
                      color: "common.white",
                      marginBottom: 2,
                    }}
                  >
                    {language === "cs" ? title.cs : title.en}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Avatar sx={{ width: 40, height: 40, marginRight: 2 }} />
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={author}
                      secondary={date}
                      primaryTypographyProps={{
                        variant: "h6",
                        sx: { color: "common.white" },
                      }}
                      secondaryTypographyProps={{
                        sx: { color: alpha("#ffffff", 0.8) },
                      }}
                    />
                  </Box>
                </Container>
              }
            />
          </ImageListItem>
        </ImageList>
      </Container2>
      <MuiContainer maxWidth="md">
        <Typography fontWeight={700} variant={"h5"} gutterBottom sx={{ py: 5 }}>
          {language === "cs" ? subtitle.cs : subtitle.en}
        </Typography>
        <MyPortableText value={language === "cs" ? text._rawCs : text._rawEn} />
      </MuiContainer>
      {video && (
        <Container maxWidth="md">
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
      <MuiContainer>
        <Box my={3}>
          <Divider />
        </Box>
        <SimilarStories />
      </MuiContainer>
    </>
  );
};

export default Blog;
