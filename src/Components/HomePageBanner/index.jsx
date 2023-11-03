import React from "react";
import styles from "./style.module.css";
import Button from "../Button";

const HomePageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="col-12">
          <h2>LOREM IPSUM DOLOR SIT</h2>
        </div>
        <div className="col-12 col-md-8 col-xl-6">
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit
            sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.
            Nisi, quis orci viverra at quam porttitor et. Eu cras imperdiet
            nisl, feugiat lectus mi.
          </p>
          <Button bg="transparent" arrow>
            Ətraflı
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
