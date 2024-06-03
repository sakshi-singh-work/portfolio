import React from "react";
import styles from "./Skills.module.scss";
import Loader from "../Loader/Loader";
import { Images } from "../../assets/Image";

const {
  react,
  js,
  ts,
  html,
  css,
  sass,
  redux,
  git,
  github,
  gitlab,
  vscode,
  api,
  mui,
} = Images;

const skills = [
  {
    Technology: react,
    rating: 4,
  },
  {
    Technology: js,
    Rating: 4,
  },
  {
    Technology: ts,
    Rating: 4,
  },
  {
    Technology: css,
    Rating: 4,
  },
  {
    Technology: sass,
    Rating: 4,
  },
  {
    Technology: html,
    Rating: 4,
  },
  {
    Technology: redux,
    Rating: 4,
  },
];
const otherSkills = [
  {
    skills: git,
    rating: 4,
  },
  {
    skills: gitlab,
    rating: 4,
  },
  {
    skills: github,
    rating: 4,
  },
  {
    skills: vscode,
    rating: 4,
  },

  {
    skills: mui,
    rating: 4,
  },

  {
    skills: api,
    rating: 4,
  },
];
const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillHeading}>
        <span> My Skills</span>
      </div>
      <div className={styles.skillContainer1}>
        {skills.map(({ Technology }: any) => {
          return (
            <>
              <img src={Technology} alt="" />
            </>
          );
        })}
      </div>
      <div className={styles.skillContainer2}>
        {otherSkills.map(({ skills }: any) => {
          return (
            <>
              <img src={skills} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
