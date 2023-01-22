import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
//materialUi
import { Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  return (
    <Box>
      <Grid container direction="row">
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
      </Grid>
    </Box>
  );
};

export default CardChampions;
