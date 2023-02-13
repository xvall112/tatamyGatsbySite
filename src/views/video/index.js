import React from "react";
import { graphql, useStaticQuery } from "gatsby";

//components
import Container from "../../components/Container";
import Title from "../../components/Title";
import ModalVideo from "../index/components/modalVideo";
//materialUI
import { Grid } from "@mui/material";

export const query = graphql`
  query {
    video: allSanityVideos(sort: { date: DESC }) {
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
                <ModalVideo
                  url={item.linkYouTube}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Index;
