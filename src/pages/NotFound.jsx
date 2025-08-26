import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <div>
    <Helmet>
      <title>404 Not Found - My Homestay</title>
      <meta name="description" content="Page not found at My Homestay." />
    </Helmet>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

export default NotFound;
