import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Trans, Link } from "gatsby-plugin-react-i18next";
import Countdown from "react-countdown";
//materialUi
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, Box, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledImg = styled(GatsbyImage)(({ theme }) => ({
  "& img": {
    borderRadius: ` 0 0 ${theme.rounded} ${theme.rounded}`,
    WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
  },
}));

export const query = graphql`
  query {
    sanityHomePage {
      carousel {
        name
        link
        date(formatString: "YYYY-MM-DDTHH:mm:ss")
        image {
          asset {
            filename
            gatsbyImageData(placeholder: BLURRED, height: 500)
          }
        }
      }
    }
  }
`;

//countdown

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
        <Trans i18nKey="dní" count={days}>
          {{ days }}
        </Trans>{" "}
        {hours}h {minutes}m {seconds}s
      </span>
    );
  }
};

const Hero = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();

  return (
    <Box
      sx={{
        "& .swiper-pagination": { position: "relative", bottom: "0px" },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
        "& .swiper-pagination-bullet": {
          backgroundColor: theme.palette.secondary.main,
        },
        "& .swiper-button-next, .swiper-button-prev": {
          color: theme.palette.secondary.main,
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {data?.sanityHomePage?.carousel?.map((car) => {
          return (
            <SwiperSlide key={car.name}>
              <ImageList
                cols={1}
                sx={{
                  width: "100%",

                  margin: "0px",
                }}
              >
                <ImageListItem>
                  <StyledImg
                    image={car.image.asset.gatsbyImageData}
                    alt={car.image.asset.filename}
                    style={{
                      minHeight: "30vh",
                      width: "100%",
                      gridArea: "1/1",
                    }}
                  />
                  <ImageListItemBar
                    sx={{ height: "100%" }}
                    position={"center"}
                    title={
                      <Typography
                        align="center"
                        variant="h1"
                        fontWeight="700"
                        style={{
                          textShadow: `${theme.palette.primary.main} 1px 0 10px`,
                        }}
                        sx={{ pb: 3 }}
                      >
                        {car.name}
                      </Typography>
                    }
                    subtitle={
                      car.date && (
                        <Typography
                          align="center"
                          variant="h3"
                          fontWeight="700"
                          style={{
                            textShadow: `${theme.palette.primary.main} 1px 0 10px`,
                            boxShadow: `${theme.palette.primary.main} 1px 0 10px`,
                          }}
                        >
                          <Countdown date={car.date} renderer={renderer} />
                        </Typography>
                      )
                    }
                  />
                </ImageListItem>
              </ImageList>
              {/*   <Box
                style={{
                  display: "grid",
                  borderRadius: ` 0 0 ${theme.rounded} ${theme.rounded}`,
                  WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    borderRadius: ` 0 0 ${theme.rounded} ${theme.rounded}`,
                    WebkitBorderRadius: `0 0 ${theme.rounded} ${theme.rounded}`,
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    height: "60vh",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 100,
                    // This centers the other elements inside the hero component
                    display: "grid",
                    background: " rgba(0,0,0,0.6)",
                  }}
                >
                  <Box>
                    <Typography
                      align="center"
                      variant="h1"
                      fontWeight="700"
                      style={{
                        textShadow: `${theme.palette.primary.main} 1px 0 10px`,
                      }}
                      sx={{ pb: 3 }}
                    >
                      {car.name}
                    </Typography>
                    {car.date && (
                      <Typography
                        align="center"
                        variant="h3"
                        fontWeight="700"
                        style={{
                          textShadow: `${theme.palette.primary.main} 1px 0 10px`,
                          boxShadow: `${theme.palette.primary.main} 1px 0 10px`,
                        }}
                        sx={{
                          p: 1,
                          borderColor: theme.palette.secondary.main,
                          borderStyle: "solid",
                          borderWeight: "1px",
                          borderRadius: theme.rounded,
                        }}
                      >
                        <Countdown date={car.date} renderer={renderer} />
                      </Typography>
                    )}
                  </Box>
                </Box>

                <StyledImg
                  image={car.image.asset.gatsbyImageData}
                  alt={car.image.asset.filename}
                  style={{
                    height: "60vh",
                    width: "100%",
                    gridArea: "1/1",
                  }}
                />
              </Box> */}
              <Grid container justifyContent="center">
                <Grid item xs={12} lg={4} sx={{ mt: 1, px: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/${car.link}`}
                    fullWidth
                  >
                    <Trans>Více info</Trans>
                  </Button>
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Hero;
