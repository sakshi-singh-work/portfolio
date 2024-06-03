import styles from "./Project.module.scss";
import { Images } from "../assets/Image";
interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: any;
  repo?: string;
}
const { myWebsite, spotlight, buWebsite, avani, wms } = Images;
const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    imgSrc: myWebsite,
    repo: "https://github.com/sakshi-singh-work/portfolio",
    description:
      "Created personal portfolio website from scratch using React and Typescript ,modular css sass,typescript. Clone to know more",
  },
  {
    id: 2,
    title: "Avani Ecocare Website",
    imgSrc: avani,
    repo: "https://github.com/sakshi-singh-work/avani-web",
    description: "https://www.avaniecocare.com",
  },
  {
    id: 3,
    title: "FYND Impetus (Jio Commerce Platform)",
    imgSrc: wms,
    description:
      " Developed a comprehensive warehouse management system with React and Tanstack table. Enhanced data handling and user workflows through React Query for API calls and React Hook Forms for dynamic column functionality.Improved user experience with pagination, search and filters in the table interface for efficient data retrieval and management. ",
  },

  {
    id: 2,
    title: "Spotlight",
    imgSrc: spotlight,
    description:
      "A one-stop application for documenting and managing employee’s rewards and recognitions that are being awarded to them for their extraordinary work in Coditas.",
  },

  {
    id: 3,
    title: "Coditas Website",
    imgSrc: buWebsite,
    repo: "",
    description:
      "Developed company mirco websites for different domains,I was part of developemnt team who were responsible for developing data science  website",
  },

  {
    id: 5,
    title: "Codylitics",
    imgSrc:
      "data:image/jpeg;base64,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",
    repo: "",
    description:
      "Contributed in project in my organization.A one stop solution to manage all the employees of an organization.Used GraphQl for api integration",
  },
  {
    id: 5,
    title: "MusicFy Personal Prject",
    imgSrc:
      "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg",
    repo: "https://gitlab.com/sakshi-coditas/musicfy-functional",
    description: "Created MusicFy ",
  },
];

const Projects = () => {
  return (
    <>
      <div className={styles.headingContainer}>
        <h1>Some of my work</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.header}></div>
        <div className={styles.cardContainer}>
          {projects.map(({ id, title, description, imgSrc, repo }) => {
            return (
              <div key={Math.random() * 0.005 * id} className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div> {title}</div>
                    <div>{imgSrc && <img src={imgSrc} alt={"img"} />}</div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div>{description}</div>
                    {repo && (
                      <div className={styles.cloneBox}>
                        <a target="_blank" href={repo} rel="noreferrer">
                          Clone Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
