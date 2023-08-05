/* import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fontsource/rambla";

export const wrapRootElement = ({ element }) => {
  return <>{element}</>;
};
 */

// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="ga-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
    />,
    <script
      key="ga-init"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `,
      }}
    />,
  ]);
};
