import React from "react";
import { Box } from "@mui/material";
import Container from "../components/Container";
import { graphql } from "gatsby";
import Index from "../views/partners";
import Seo from "../components/Seo";
import { Script } from "gatsby";

const Partners = () => {
  return (
    <>
      <Container>
        <Box
          sx={{ "#scevents": { width: "1px", minWidth: "100%", border: "0", height: '80vh' } }}
        >
          <iframe
            id="scevents"
            src="https://grapplingindustries.smoothcomp.com/en/federation/204/ranking?background=transparent&amp;embedView=1&amp;linktargets=inherit"
            scrolling="yes"
            onload="iFrameResize()"
          ></iframe>
        </Box>
      </Container>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.js"
        type="text/javascript"
      />
    </>
  );
};

export default Partners;

export const Head = () => <Seo title="Ranking" />;
