import React from "react";
import { PortableText } from "@portabletext/react";
import InstagramBlockComponents from "./InstagramBlockComponents";
import Images from "../components/Images";

const MyPortableText = ({ value }) => {
  const components = {
    types: { instagramPost: InstagramBlockComponents, image: Images },
  };
  return <PortableText value={value} components={components} />;
};

export default MyPortableText;
