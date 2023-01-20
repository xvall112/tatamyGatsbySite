import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
//materialUI
import { Grid, IconButton } from "@mui/material";
const Social = ({ linkYouTube, linkFacebook, linkInstagram }) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      direction="row"
    >
      {linkInstagram && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            href={linkInstagram}
          >
            <IoLogoInstagram fontSize="40px" />
          </IconButton>
        </Grid>
      )}
      {linkFacebook && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            size="large"
            href={linkFacebook}
          >
            <FiFacebook fontSize="30px" />
          </IconButton>
        </Grid>
      )}
      {linkYouTube && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            size="large"
            href={linkYouTube}
          >
            <AiOutlineYoutube fontSize="40px" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Social;
