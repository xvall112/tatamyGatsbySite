import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramBlockComponents = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", marginY: "10px" }}>
      <InstagramEmbed url={url} width={400} />
    </div>
  );
};

export default InstagramBlockComponents;
