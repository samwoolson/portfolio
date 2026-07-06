import { projects } from "../data/projects";
import { useState, useEffect } from "react";

import ProjectModal from "./ProjectModal"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
        <p className="text-neutral-600 mb-12 text-center">
          <b>Case studies are condensed for scannability.</b> I know recruiters and hiring managers are reviewing many portfolios. Ask me for the deeper walkthrough.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className=" rounded-xl transition group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="mt-8 bg-orange-800 text-white px-6 py-3 rounded-full hover:bg-stone-950 transition">
                    View Case Study
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-neutral-600 mt-2">
                {project.summary}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
  <ProjectModal
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
)}
    </section>
  );
}

export default Projects;
