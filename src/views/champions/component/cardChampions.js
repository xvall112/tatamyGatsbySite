import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
//materialUi
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Social from "../../../components/Social";
const CardChampions = ({
  name,
  weight,
  gym,
  photo,
  instagram,
  facebook,
  twitter,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={4} lg={3}>
          <Typography variant="h6" fontWeight={700}>
            -{weight}kg
          </Typography>
        </Grid>

        <GatsbyImage image={photo.gatsbyImageData} alt={photo.filename} />

        <Grid
          item
          container
          direction="column"
          xs={12}
          sx={{
            background: `linear-gradient(90deg, rgba(227,25,16,1) 0%, rgba(167,19,12,1) 100%)`,
          }}
        >
          <Grid item xs={6}>
            <Typography fontWeight={700} variant="h6">
              {name}
            </Typography>
            <Typography>{gym}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Social
              linkInstagram={instagram}
              linkFacebook={facebook}
              linkYouTube={twitter}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardChampions;
