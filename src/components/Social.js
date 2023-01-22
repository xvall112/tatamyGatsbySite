import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
//materialUI
import { Grid, IconButton } from "@mui/material";
const Social = ({ linkYouTube, linkFacebook, linkInstagram, size }) => {
  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      justifyContent="space-around"
    >
      {linkInstagram && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            href={linkInstagram}
          >
            <IoLogoInstagram fontSize={size || "40px"} />
          </IconButton>
        </Grid>
      )}
      {linkFacebook && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            href={linkFacebook}
          >
            <FiFacebook fontSize={size || "30px"} />
          </IconButton>
        </Grid>
      )}
      {linkYouTube && (
        <Grid item>
          <IconButton
            color="secondary"
            aria-label="soc site"
            component="a"
            href={linkYouTube}
          >
            <AiOutlineYoutube fontSize={size || "40px"} />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Social;
