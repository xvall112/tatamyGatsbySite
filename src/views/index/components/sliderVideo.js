import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactPlayer from "react-player/youtube";
import { Swiper, SwiperSlide } from "swiper/react";
//materialUi
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export const query = graphql`
  query {
    allSanityVideos(limit: 4) {
      nodes {
        id
        title
        linkYouTube
      }
    }
  }
`;

const SliderVideo = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { allSanityVideos } = data;
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
        {allSanityVideos.nodes.map((video) => {
          return (
            <SwiperSlide key={video.id}>
              <Box
                sx={{
                  borderRadius: theme.rounded,
                  overflow: "hidden",
                }}
              >
                <ReactPlayer
                  controls={true}
                  light={true}
                  url={video.linkYouTube}
                  key={video.name}
                  width="100%"
                  height="160px"
                />
                <Box
                  p={(8, 2, 8, 2)}
                  sx={{
                    backgroundColor: theme.palette.background.level1,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    {video.title}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderVideo;
