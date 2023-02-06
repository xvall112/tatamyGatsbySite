import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

//materialUi
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const query = graphql`
  query {
    allSanityNews(sort: { date: DESC }) {
      nodes {
        id
        title
        subtitle
        link
        date(formatString: "DD.MM.YYYY")
        titleImage {
          asset {
            filename
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              height: 160
            )
          }
        }
      }
    }
  }
`;

const SliderNews = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { allSanityNews } = data;
  return (
    <Box
      sx={{
        "& .swiper-button-next": {
          color: theme.palette.primary.main,
        },
        "& .swiper-button-prev": {
          color: theme.palette.primary.main,
        },
      }}
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          600: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {allSanityNews.nodes.map((news) => {
          return (
            <SwiperSlide key={news.id}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea
                  component={"a"}
                  href={news.link}
                  target="_blank"
                  sx={{
                    "& img": {
                      borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                      WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                    },
                  }}
                >
                  <GatsbyImage
                    image={news.titleImage.asset.gatsbyImageData}
                    alt={news.titleImage.asset.filename}
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {news.subtitle}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={700}
                    >
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              {/*  <Box
                sx={{
                  borderRadius: theme.rounded,
                  overflow: "hidden",
                }}
              >
                <Box
                  component={"a"}
                  href={news.link}
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    "& img": {
                      borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                      WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                    },
                  }}
                >
                  <GatsbyImage
                    image={news.titleImage.asset.gatsbyImageData}
                    alt={news.titleImage.asset.filename}
                    style={{ width: "100%" }}
                  />
                  <Box
                    p={(8, 2, 8, 2)}
                    sx={{
                      backgroundColor: theme.palette.background.level1,
                    }}
                  >
                    <Typography variant="subtitle1" color="text.primary">
                      {news.subtitle}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                    >
                      {news.title}
                    </Typography>
                  </Box>
                </Box>
              </Box> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SliderNews;
