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
  const { video } = data;
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
    </>
  );
};

export default Index;
