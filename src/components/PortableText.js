import React from "react";
import { PortableText } from "@portabletext/react";
import InstagramBlockComponents from "./InstagramBlockComponents";

const MyPortableText = ({ value }) => {
  const components = { types: { instagramPost: InstagramBlockComponents } };
  return <PortableText value={value} components={components} />;
};

export default MyPortableText;
