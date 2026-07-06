import React from 'react';

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative">
        
        <button
          onClick={onClose} aria-label="Close Project Modal"  // ARIA label for screen readers
          className="absolute top-4 right-4 text-gray-600"
        >
          ✕
        </button>

        {/* Project Title */}
        <h2 className="text-3xl font-bold mb-4">
          {project.title}
        </h2>

        {/* Role, Timeline, Stack */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div>
            <h4 className="text-sm font-medium text-neutral-500">Role</h4>
            <p>{project.role}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500">Timeline</h4>
            <p>{project.timeline}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500">Tools & Stack</h4>
            <p>{project.stack}</p>
          </div>
        </div>  

        {/* Overview Section */}
        <h3 className="text-1xl font-semibold mt-6 mb-2">Overview</h3>
        <p className="text-neutral-600 mb-4">
          {project.overview}
        </p>

        {/* Challenges & Solutions */}
        <h3 className="text-1xl font-semibold mt-6 mb-2">Challenges</h3>
        <p className="text-neutral-600 mb-4">
          {project.challenges}
        </p>
        <h3 className="text-1xl font-semibold mt-6 mb-2">Solutions</h3>
        <p className="text-neutral-600 mb-4">
          {project.solution}
        </p>

        {/* Live Project Link */}
        <div className="text-center mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-orange-800 text-white px-6 py-3 rounded-full hover:bg-stone-950 transition"
          >
            View Live Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;