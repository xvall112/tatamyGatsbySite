import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
//materialUi
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from "@mui/material";

import Social from "../../../components/Social";
const CardChampions = ({
  name,
  weight,
  gym,
  photo,
  instagram,
  facebook,
  youtube,
}) => {
  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          /* "& img": {
            borderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
            WebkitBorderRadius: `${theme.rounded} ${theme.rounded} 0 0`,
          }, */
        }}
      >
        <CardHeader
          title={
            <Typography variant="h6" fontWeight={700}>
              -{weight}kg
            </Typography>
          }
        />
        <GatsbyImage
          image={photo.gatsbyImageData}
          alt={photo.filename}
          style={{ width: "100%" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gym}
          </Typography>
        </CardContent>
        <CardActions>
          <Social
            linkInstagram={instagram}
            linkFacebook={facebook}
            linkYouTube={youtube}
            size={25}
          />
        </CardActions>
      </Card>

      {/*  <Grid container direction="row">
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="h6" fontWeight={700}>
            -{weight}kg
          </Typography>
        </Grid>
        <Box
          sx={{
            "& img": { borderRadius: `${theme.rounded} ${theme.rounded} 0 0` },
          }}
        >
          <GatsbyImage image={photo.gatsbyImageData} alt={photo.filename} />
        </Box>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          xs={12}
          sx={{
            background: `linear-gradient(90deg, rgba(227,25,16,1) 0%, rgba(167,19,12,1) 100%)`,
            borderRadius: ` 0 0 ${theme.rounded} ${theme.rounded} `,
            paddingX: 2,
          }}
        >
          <Grid item xs={7}>
            <Typography fontWeight={700} variant="h6">
              {name}
            </Typography>
            <Typography>{gym}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Social
              linkInstagram={instagram}
              linkFacebook={facebook}
              linkYouTube={youtube}
              size={25}
            />
          </Grid>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default CardChampions;
