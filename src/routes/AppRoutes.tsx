import { useRoutes } from "react-router-dom";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Skills from "../components/Skills/Skills";


const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return element;
};

export default AppRoutes;
