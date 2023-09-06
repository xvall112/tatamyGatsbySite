import React from "react";
import Box from "@mui/material/Box";
import { PortableText } from "@portabletext/react";
import InstagramBlockComponents from "./InstagramBlockComponents";
import Images from "../components/Images";

const MyPortableText = ({ value }) => {
  const components = {
    types: { instagramPost: InstagramBlockComponents, image: Images },
    marks: {
      center: ({ children }) => <Box align="center">{children}</Box>,
      left: ({ children }) => <Box align="left">{children}</Box>,
      right: ({ children }) => <Box align="right">{children}</Box>,
      justify: ({ children }) => <Box align="justify">{children}</Box>,
    },
  };
  return <PortableText value={value} components={components} />;
};

export default MyPortableText;
