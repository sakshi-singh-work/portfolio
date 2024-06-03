import styles from "./Landing.module.scss";
import TypingHook from "../hooks/TypingHook";
import profilePic from "../assets/pngs/profilePic.jpg";
import Contact from "./Contact";
import Skills from "../components/Skills/Skills";
import { useRef } from "react";
import Lottie from "lottie-react";
import MainImage from "./MainImage.json";

const LandingPage = () => {
  const text = TypingHook("REACT |", 600);
  // const text = TypingHook("Hello World! This is a typing effect.", 50, 1000);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.designationText}>
              HI I'M A FRONTEND DEVELOPER{" "}
            </div>
            <div className={styles.text}> {text}</div>
            <div className={styles.locationText}>Pune,Maharastra,India</div>
          </div>
          <div className={styles.profileContainer}>
            <Lottie animationData={MainImage} />
            {/* <img src={profilePic}></img> */}
            {/* <img src ="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg"></img> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
