function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Expertise
        </h2>

        <p className="text-neutral-600 mb-12">
          A comprehensive skill set bridging the gap between human needs and technical implementation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-4">UX/UI Design</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>Wireframing & Prototyping</li>
              <li>User Research</li>
              <li>Design Systems</li>
              <li>Interaction Design</li>
              <li>Usability Testing</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Framer Motion</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-4">Strategy</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>Product Discovery</li>
              <li>A/B Testing</li>
              <li>Data-Driven Decisions</li>
              <li>Agile Methodologies</li>
              <li>Cross-Functional Collaboration</li>
              <li>Stakeholder Alignment</li>
              
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills