/* eslint-disable react/no-danger */
import React from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// eslint-disable-next-line no-undef
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
const OPTIMIZE_ID = process.env.REACT_APP_OPTIMIZE_ID;

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

const GoogleAnalytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    initGA();
  }, []);

  React.useEffect(() => {
    console.log("ga worked.");
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Helmet>
      <script
        src={`https://www.googleoptimize.com/optimize.js?id=${OPTIMIZE_ID}`}
      ></script>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
