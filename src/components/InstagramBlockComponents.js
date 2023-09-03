import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Box } from '@mui/material'

const InstagramBlockComponents = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }
  return (
    <Box display="flex" justifyContent="center" my={5}>
      <InstagramEmbed url={url} width={400} />
    </Box>
  );
};

export default InstagramBlockComponents;
