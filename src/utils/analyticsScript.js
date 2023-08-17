import React from "react";

const AnalyticsScript = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-ER4QD0EM9D"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'G-ER4QD0EM9D');
    </script>
  </>
);

export default AnalyticsScript;
