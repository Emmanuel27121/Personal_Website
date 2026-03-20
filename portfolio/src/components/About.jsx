import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-deepblue to-redish bg-clip-text text-transparent text-center mb-12">
        About Me
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        Hi! I'm Emmanuel Ojetunde, a second-year Computer Science student at Dalhousie University with a strong passion for software development
        and technology. I enjoy building web applications, diving into algorithms, and exploring the latest tools in the tech world.
        Currently, I'm focused on expanding my skills in front-end development and love working on projects that create real-world impact.
      </p>

      <p className="text-gray-600 mt-4 text-lg">
        My interests include full-stack development, building
        scalable applications, and creating clean user experiences.
      </p>
    </motion.section>
  )
}

export default About