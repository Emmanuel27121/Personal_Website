
function Projects() {

  const projects = [
    {
      title: "Weather Website",
      description: "Simple weather app using OpenWeatherMap API ",
      github: "https://github.com/Emmanuel27121/WeatherWebsite.git"
    },
    {
      title: "React Portfolio",
      description: "Modern portfolio website built with React and Tailwind",
      github: "https://github.com/Emmanuel27121/Personal_Website.git   "
    },
    {
      title: "Flashcard Genrator",
      description: "A pdf flashcard genrator built with python and react",
      github: "https://github.com/Emmanuel27121/Flashcard-Web.git"
    }
  ]

  return (
    <section
      id="projects"
      className="py-24 bg-light p-3 bg-gradient-to-r from-deepblue via-indigo-600 to-redish text-white"
    >

      <h2 className="text-3xl font-bold  text-white bg-clip-text text-transparent text-center mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-redish transition"
          >

            <h3 className="text-xl text-black font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <a
              href={project.github} target="_blank"
              className="text-blue-500 font-medium"
            >
              View Code →
            </a>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects