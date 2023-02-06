import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactPlayer from "react-player/youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//materialUi
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
export const query = graphql`
  query {
    allSanityVideos(sort: { date: DESC }) {
      nodes {
        id
        title
        subtitle
        linkYouTube
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;

const SliderVideo = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { allSanityVideos } = data;
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
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={true}
        modules={[Navigation]}
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
        {allSanityVideos.nodes.map((video) => {
          return (
            <SwiperSlide key={video.id}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component={ReactPlayer}
                    controls={true}
                    light={true}
                    url={video.linkYouTube}
                    key={video.name}
                    width="100%"
                    height="160px"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {video.subtitle}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={700}
                  >
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.date}
                  </Typography>
                </CardContent>
              </Card>
              {/*   <Box
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
              </Box> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SliderVideo;
