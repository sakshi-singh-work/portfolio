import AppRoutes from "./routes/AppRoutes";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { useEffect, useRef, useState } from "react";
import LandingPage from "./pages/LandingPage";
import Skills from "./components/Skills/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import profilePic from "./assets/svgs/logo.png";
import Loader from "./components/Loader/Loader";
import AboutMe from "./pages/AboutMe";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const abouttRef = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.navbar}>
            <img src={profilePic} alt="" />
            <div className={styles.name}>SAKSHI</div>
            <div className={styles.navigation}>
              <div
                onClick={() => scrollToSection(abouttRef)}
                className={styles.link}
              >
                About
              </div>
              <div
                onClick={() => scrollToSection(skillRef)}
                className={styles.link}
              >
                Skills
              </div>
              <div
                onClick={() => scrollToSection(projectRef)}
                className={styles.link}
              >
                Projects
              </div>
              <div
                onClick={() => scrollToSection(contactRef)}
                className={styles.link}
              >
                Contact Me
              </div>
            </div>
          </div>
          <div className={styles.landingPage}>
            {" "}
            <LandingPage />
          </div>
          <div className={styles.aboutSection} ref={abouttRef}>
            <AboutMe />
          </div>
          <div className={styles.skillSection} ref={skillRef}>
            <Skills />
          </div>
          <div className={styles.projectSection} ref={projectRef}>
            <Projects />
          </div>
          <div className={styles.contactForm} ref={contactRef}>
            <Contact />
          </div>
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
