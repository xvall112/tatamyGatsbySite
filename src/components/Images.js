import React from "react";
import Box from "@mui/material/Box";
import { builder } from "../utils/imageUrl";
import { Typography } from "@mui/material";

function urlFor(source) {
  return builder.image(source).url();
}

function Images({ value }) {
  const { asset } = value;
  if (!asset) {
    return <p>Missing image</p>;
  }
  return (
    <Box display="flex" justifyContent="center" my={5}>
      <img
        src={urlFor(asset)}
        alt={asset.alt || "image"}
        loading="lazy"
        style={{ width: "100%" }}
      />
      <Typography>{asset.description}</Typography>
    </Box>
  );
}

export default Images;
