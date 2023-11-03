import React from "react";
import Header from "../../Components/Header";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/Logo.png" />
        <title>About page</title>
      </Helmet>
      <Header />
    </div>
  );
};

export default About;
