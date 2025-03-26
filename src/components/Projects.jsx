import { useEffect, useState } from "react";
import data from "../data/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects || []); // Ensure it's an array
  }, []);

  // Don't render the section if no projects exist
  if (!projects.length) return null;

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 border border-gray-200 dark:border-gray-700 
                         transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium bg-indigo-500 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for GitHub & Live Demo */}
              <div className="mt-4 flex justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 dark:text-indigo-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 dark:text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
