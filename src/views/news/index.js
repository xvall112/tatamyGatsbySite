import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
//components
import Container from "../../components/Container";
import Title from "../../components/Title";

//materialUI
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const query = graphql`
  query {
    news: allSanityNews(sort: { date: DESC }) {
      nodes {
        id
        date(formatString: "DD.MM.YYYY")
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
  }
`;

const Index = () => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  const { news, video } = data;
  return (
    <>
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
                    sx={{
                      "& img": {
                        borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                        WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                      },
                    }}
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
                      <Typography variant="body2" color="text.secondary">
                        {item.date}
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
