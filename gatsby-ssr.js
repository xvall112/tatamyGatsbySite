import React from "react";
import TopLayout from "./src/layouts/index";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
