import styles from "./SocialMedia.module.scss";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import Data from "./Data";

const SocialMedia = () => {
  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.socialMediaList}>
          <li className={styles.socialMediaListItems}>
            <a 
             target="_blank"
            className={styles.socialMediaLinks} href="/">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className={styles.socialMediaListItems}>
            <a
             target="_blank"
              className={styles.socialMediaLinks}
              href="/https://github.com/sakshi-coditas"
            >
              <FaGithub size={20} />
            </a>
          </li>
          {/* <li className={styles.socialMediaListItems}>
            <a className={styles.socialMediaLinks} href="sakshisinghnew2022@gmail.com">
              <HiOutlineMail size={20} />
            </a>
          </li> */}
          <li className={styles.socialMediaListItems}>
            <a
              target="_blank"
              className={styles.socialMediaLinks}
              href={"https://gitlab.com/users/sakshi-coditas/projects"}
            >
              <FaGitlab size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
