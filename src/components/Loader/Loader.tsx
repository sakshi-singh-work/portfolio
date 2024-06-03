import Lottie from "lottie-react";
import LoaderImg from "./Loader.json";
import styles from "./LOader.module.scss";

const Loader = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loaderContainer}>
        {" "}
        <Lottie animationData={LoaderImg} />
      </div>
    </div>
  );
};

export default Loader;
