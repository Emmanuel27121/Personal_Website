function Contact() {
  return (
    <section
      id="contact"
      className="py-24 text-center"
    >

      <h2 className="text-3xl font-bold bg-gradient-to-r from-deepblue to-redish bg-clip-text text-transparent text-center mb-8">
        Contact Me
      </h2>

      <p className="text-gray-600 mb-8">
        Feel free to reach out if you'd like to collaborate
        or discuss opportunities.
      </p>

      <div className="flex justify-center gap-6">

        <a
            href="https://github.com/Emmanuel27121" target="_blank"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/emmanuel-ojetunde-97a000292" target="_blank"
          className="px-6 py-3 border border-black rounded-lg"
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Contact