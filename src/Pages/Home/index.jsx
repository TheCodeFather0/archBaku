import React from "react";
import Header from "../../Components/Header";
import HomePageBanner from "../../Components/HomePageBanner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <title>Home page</title>
      </Helmet>
      <Header />
      <HomePageBanner />
    </motion.div>
  );
};

export default Home;
