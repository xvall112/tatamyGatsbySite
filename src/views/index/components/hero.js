import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Trans } from "gatsby-plugin-react-i18next";
//materialUi
import { Button, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const query = graphql`
  query {
    sanityHomePage {
      carousel {
        name
        link
        image {
          asset {
            filename
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

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
              <GatsbyImage
                image={car.image.asset.gatsbyImageData}
                alt={car.image.asset.filename}
                style={{ height: "auto", objectFit: "fill", margin: "auto 0" }}
              />
              <Grid container justifyContent="center">
                <Grid item xs={12} lg={4} sx={{ mt: 1, px: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={car.link}
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
