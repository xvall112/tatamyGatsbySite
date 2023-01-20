import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
//materialUi
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const query = graphql`
  query {
    allSanityNews {
      nodes {
        title
        link
        titleImage {
          asset {
            filename
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              fit: FILL
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
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {allSanityNews.nodes.map((news) => {
          return (
            <SwiperSlide>
              <Box
                sx={{
                  borderRadius: theme.rounded,
                  overflow: "hidden",
                }}
              >
                <Box
                  component={"a"}
                  href={news.link}
                  sx={{ textDecoration: "none" }}
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
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                    >
                      {news.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderNews;
