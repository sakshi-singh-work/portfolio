import React from "react";
import styles from "./About.module.scss";
import Images1 from "../assets/pngs/sakshi.jpg";
const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heading}>About Me</div>
      <div className={styles.subHeading}>Know Me more</div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.contentHeading}>
            Hi, I'm <span className={styles.contentHeading2}>Sakshi Singh</span>{" "}
          </div>
          As a React Developer, I am responsible for designing and implementing
          user interfaces using the React.js library. I work closely with
          product owners, designers, and other developers to create highly
          performant and scalable web applications. With my strong understanding
          of JavaScript, HTML, and CSS, I can build reusable and modular code
          that adheres to best practices and standards.
          <br />
          <div className={styles.insideContainer}>
            {" "}
            <h4>Key Responsibilities:</h4>
            Write clean and maintainable code that adheres to industry standards
            and best practices Optimize web applications for maximum speed and
            scalability Identify and resolve performance issues and bugs
            Participate in code reviews and ensure code quality Keep up-to-date
            with emerging trends and technologies in front-end development
          </div>
        </div>
        {/* <div className={styles.aboutImage}><img src="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg"></img></div> */}
        <div className={styles.aboutImage}>
          <img src={Images1}></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
