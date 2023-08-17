/* import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fontsource/rambla";

export const wrapRootElement = ({ element }) => {
  return <>{element}</>;
};
 */

exports.onClientEntry = () => {
  // Load Google Analytics script
  if (process.env.NODE_ENV === "production") {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-ER4QD0EM9D");
    };
  }
};
