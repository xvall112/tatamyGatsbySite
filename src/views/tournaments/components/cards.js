import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";
//materialUi
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Cards = ({ cards }) => {
  const theme = useTheme();
  return (
    <Grid container direction="row" spacing={2}>
      {cards.nodes.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={card.slug.current}>
          <Card sx={{ width: "100%" }}>
            <CardActionArea
              component={Link}
              to={`/${card.slug.current}`}
              sx={{
                "& img": {
                  borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                  WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                },
              }}
            >
              <GatsbyImage
                image={card.mobileTitleImage.asset.gatsbyImageData}
                alt={card.mobileTitleImage.asset.filename}
                style={{ height: "100%" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.date}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight={700}
                >
                  {card.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      {/* {cards.nodes.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={card.slug.current}>
          <Box
            sx={{
              borderRadius: theme.rounded,
              overflow: "hidden",
            }}
          >
            <Box
              component={Link}
              to={`/${card.slug.current}`}
              sx={{
                textDecoration: "none",
                "& img": {
                  borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                  WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
                },
              }}
            >
              <GatsbyImage
                image={card.titleImage.asset.gatsbyImageData}
                alt={card.titleImage.asset.filename}
                style={{ height: "100%" }}
              />
              <Box
                p={(8, 2, 8, 2)}
                sx={{
                  backgroundColor: theme.palette.background.level1,
                }}
              >
                <Typography variant="h6" fontWeight={700} color="text.primary">
                  {card.name}
                </Typography>
                <Typography color="text.primary">{card.date}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default Cards;
