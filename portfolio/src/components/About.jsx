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
        I'm Emmanuel, a Computer Science student passionate about
        building modern software and web applications. I enjoy
        solving complex problems and learning new technologies.
      </p>

      <p className="text-gray-600 mt-4 text-lg">
        My interests include full-stack development, building
        scalable applications, and creating clean user experiences.
      </p>
    </motion.section>
  )
}

export default About