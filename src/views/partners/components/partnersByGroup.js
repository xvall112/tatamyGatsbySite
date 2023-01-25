import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
//materialUi
import { Grid, Box } from "@mui/material";
const PartnersByGroup = ({ partners }) => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-around" spacing={2}>
        {partners.map((partner) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="a" href={partner.link} target="_blank">
                  <GatsbyImage
                    image={partner.logo.asset.gatsbyImageData}
                    alt={partner.logo.asset.filename}
                  />
                </Box>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default PartnersByGroup;
