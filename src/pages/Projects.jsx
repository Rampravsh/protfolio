import { useContext } from "react";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../constants/projects";
import { ThemeContext } from "../context/ThemeContext";

export default function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <PageWrapper>
      <section className="min-h-screen px-6 py-24  ">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 ">
            My <span className="text-[var(--primary)]">Creations</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A selection of my favorite projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={theme === "dark" ? (project.darkImage || project.image) : project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-black px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-white/70 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Links */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3 lg:hidden">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20 text-gray-900 dark:text-white text-sm px-3 py-2 rounded-lg shadow-sm hover:bg-white/50 dark:hover:bg-white/20 transition-all font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20 text-gray-900 dark:text-white text-sm px-3 py-2 rounded-lg shadow-sm hover:bg-white/50 dark:hover:bg-white/20 transition-all font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
