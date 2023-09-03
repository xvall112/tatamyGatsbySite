import React from "react";
import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
});
