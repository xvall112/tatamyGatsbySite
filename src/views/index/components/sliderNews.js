import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "gatsby-plugin-react-i18next";

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
    news: allSanityNews(sort: { date: DESC }) {
      nodes {
        id
        title
        subtitle
        link
        dateCompare: date
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
    # blog: allSanityBlog(sort: { date: DESC }) {
    #   nodes {
    #     author
    #     id
    #     dateCompare: date
    #     date(formatString: "DD.MM.YYYY")
    #     title {
    #       cs
    #       en
    #     }
    #     subtitle {
    #       cs
    #       en
    #     }
    #     slug {
    #       current
    #     }
    #     titleImage {
    #       asset {
    #         filename
    #         gatsbyImageData(
    #           placeholder: BLURRED
    #           layout: CONSTRAINED
    #           height: 160
    #         )
    #       }
    #     }
    #   }
    # }
  }
`;

const SliderNews = () => {
  const [sortedNews, setSortedNews] = useState(null);
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { news } = data;
  // const newsArray = news.nodes.map((item) => ({ ...item, tag: "article" }));
  // const blogArray = blog.nodes.map((item) => ({
  //   ...item,
  //   title: item.title.cs,
  //   subtitle: item.author,
  //   link: item.slug.current,
  //   tag: "blog",
  // }));
  // const merged = [...blogArray, ...newsArray];
  // console.log("merged news", merged);

  // useEffect(() => {
  //   function sortArrayByDate() {
  //     return merged.sort((a, b) => {
  //       if (a.dateCompare < b.dateCompare) {
  //         return 1;
  //       } else if (a.dateCompare > b.dateCompare) {
  //         return -1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   }
  //   console.log(sortArrayByDate());
  //   setSortedNews(sortArrayByDate());
  // }, []);

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
        {news?.nodes?.map((news) => {
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SliderNews;
