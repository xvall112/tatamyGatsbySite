import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//materialUi
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Cards = ({ cards }) => {
  const theme = useTheme();
  return (
    <>
      <Grid container direction="row" spacing={2}>
        {cards.nodes.map((card) => {
          return (
            <Grid item xs={12} md={4} lg={3} key={card.slug.current}>
              <Box
                sx={{
                  borderRadius: theme.rounded,
                  overflow: "hidden",
                }}
              >
                <Link to={card.slug.current} style={{ textDecoration: "none" }}>
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
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                    >
                      {card.name}
                    </Typography>
                    <Typography color="text.primary">{card.date}</Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
