import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          meta: {
            title: "Rpk – MERN Stack Developer",
            description: "Portfolio of Rpk, a MERN Stack Developer.",
          },
        },
      },
      {
        path: "about",
        element: <About />,
        handle: {
          meta: {
            title: "About | Rpk",
            description: "About Rpk – MERN Stack Developer.",
          },
        },
      },
      {
        path: "skills",
        element: <Skills />,
        handle: {
          meta: {
            title: "Skills | Rpk",
            description: "Technical skills of Rpk.",
          },
        },
      },
      {
        path: "projects",
        element: <Projects />,
        handle: {
          meta: {
            title: "Projects | Rpk",
            description: "Projects built by Rpk.",
          },
        },
      },
      {
        path: "contact",
        element: <Contact />,
        handle: {
          meta: {
            title: "Contact | Rpk",
            description: "Contact Rpk for work or collaboration.",
          },
        },
      },
      {
        path: "*",
        element: <NotFound />,
        handle: {
          meta: {
            title: "404 Not Found | Rpk",
            description: "Page not found.",
          },
        },
      },
    ],
  },
]);

export default router;
