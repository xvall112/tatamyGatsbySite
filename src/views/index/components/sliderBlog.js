import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

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
    # news: allSanityNews(sort: { date: DESC }) {
    #   nodes {
    #     id
    #     title
    #     subtitle
    #     link
    #     dateCompare: date
    #     date(formatString: "DD.MM.YYYY")
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
    blog: allSanityBlog(sort: { date: DESC }) {
      nodes {
        author
        id
        dateCompare: date
        date(formatString: "DD.MM.YYYY")
        title {
          cs
          en
        }
        subtitle {
          cs
          en
        }
        slug {
          current
        }
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
  const { language } = useI18next();
  const [sortedNews, setSortedNews] = useState(null);
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { blog } = data;
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
        {blog?.nodes?.map((blog) => {
          return (
            <SwiperSlide key={blog.id}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea
                   component={Link}
                   to={`/${blog.slug.current}`}
                  sx={{
                    "& img": {
                      borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                      WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                    },
                  }}
                >
                  <GatsbyImage
                    image={blog.titleImage.asset.gatsbyImageData}
                    alt={blog.titleImage.asset.filename}
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {blog.author}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={700}
                    >
                      {language === "cs" ? blog.title.cs : blog.title.en}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.date}
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
