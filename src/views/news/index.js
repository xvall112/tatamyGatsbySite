import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import ReactPlayer from "react-player/youtube";
//components
import Container from "../../components/Container";
import Title from "../../components/Title";

//materialUI
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const query = graphql`
  query {
    news: allSanityNews {
      nodes {
        id
        title
        subtitle
        link
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
    video: allSanityVideos {
      nodes {
        id
        title
        linkYouTube
      }
    }
  }
`;

const Index = () => {
  const data = useStaticQuery(query);
  const { news, video } = data;
  return (
    <>
      <Container>
        <Title title={"Video"} />
        <Grid container direction="row" spacing={2}>
          {video.nodes.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ width: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component={ReactPlayer}
                      controls={true}
                      light={true}
                      url={item.linkYouTube}
                      key={item.id}
                      width="100%"
                      height="160px"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={700}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container>
        <Title title={<Trans>Novinky</Trans>} />
        <Grid container direction="row" spacing={2}>
          {news.nodes.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ width: "100%" }}>
                  <CardActionArea
                    component={"a"}
                    href={item.link}
                    target="_blank"
                  >
                    <GatsbyImage
                      image={item.titleImage.asset.gatsbyImageData}
                      alt={item.titleImage.asset.filename}
                      style={{ width: "100%" }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.subtitle}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={700}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Index;
