import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import { MdSubtitles } from "react-icons/md";

const query = graphql`
  query MyQuery {
    allSanityBlog(limit: 4) {
      nodes {
        slug {
          current
        }
        subtitle {
          cs
          en
        }
        author
        title {
          cs
          en
        }
        mobileTitleImage {
          asset {
            description
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              height: 300
            )
          }
        }
      }
    }
  }
`;

const SimilarStories = () => {
  const data = useStaticQuery(query);
  const theme = useTheme();
  const { language } = useI18next();
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={"h6"} gutterBottom>
            Další články
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            component={Link}
            variant="outlined"
            color="primary"
            size="large"
            to={"/news"}
          >
            Zobrazit vše
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {data.allSanityBlog.nodes.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={Link}
              to={`/${item.slug.current}`}
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundImage: "none" }}
              >
                <CardMedia
                  title={item.title}
                  sx={{
                    "& img": { WebkitBorderRadius: "10px 10px 0 0" },
                    height: { xs: 250, md: 300 },
                    position: "relative",
                  }}
                >
                  <GatsbyImage
                    image={item.mobileTitleImage.asset.gatsbyImageData}
                    alt={item.mobileTitleImage.asset?.description}
                    formats={["auto", "webp", "avif"]}
                    style={{ width: "100%", height: "100%", zIndex: 1 }}
                  />
                  <Box
                    component={"svg"}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: "scale(2)",
                      height: "auto",
                      width: 1,
                      transformOrigin: "top center",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={"relative"}>
                  <Typography variant={"h6"} gutterBottom>
                    {language === "cs" ? item.title.cs : item.title.en}
                  </Typography>
                  <Typography color="text.secondary">
                    {language === "cs" ? item.subtitle.cs : item.subtitle.en}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={"flex"} flexDirection={"column"}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={"text.secondary"}>
                        {item?.author}
                      </Typography>
                    </Box>
                    <Typography color={"text.secondary"}>
                      {item?.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimilarStories;
