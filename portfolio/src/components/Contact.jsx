import {useRef} from "react";
import emailjs from "emailjs-com"


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message");
        }
    )
    e.target.reset();
  }
  return (
    <section
      id="contact"
      className="p-10 text-center bg-gradient-to-r from-deepblue via-indigo-600 to-redish text-white"
    >

      <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent text-center mb-8">
        Contact Me
      </h2>

      <p className="text-white-600 mb-8">
        Feel free to reach out if you'd like to collaborate
        or discuss opportunities.
      </p>

      <form ref={form} onSubmit={sendEmail}
            className="max-w-md mx-auto m-9 text-black flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <input
            type='text'
            name="user_name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-redish focus:ring-2 focus:ring-redish transition"
            required
        />

        <input
            type='email'
            name="user_email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-redish focus:ring-2 focus:ring-redish transition"
            required
        />

        <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-redish focus:ring-2 focus:ring-redish transition"
            required
        />

        <button
            type="submit"
            className="bg-gradient-to-r from-deepblue to-redish text-white py-3 rounded-lg border border-white hover:scale-105 transition"
        > Send Message </button>
      </form>



      <div className="flex justify-center gap-6">

        <a
            href="https://github.com/Emmanuel27121" target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/emmanuel-ojetunde-97a000292" target="_blank"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Contact