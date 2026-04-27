"use client";

import { useRef } from "react";
import { sendEmail} from "../action";
import { toast, Toaster } from "react-hot-toast";


function Contact() {
  const formRef = useRef(null);


  async function handleSubmit(formData) {
    const loadingToast = toast.loading("Sending message...");

    try{
      const res = await sendEmail(formData);

      if(res.success) {
        toast.success("Email sent successfully!", { id: loadingToast });
        formRef.current?.reset();
      }else{
        toast.error("Failed to send email. Please try again.", { id: loadingToast });
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred.", { id: loadingToast });
    }


  }

  return (
    <section
      id="contact"
      className="p-10 text-center bg-gradient-to-r from-deepblue via-indigo-600 to-redish text-white"
    >

      <Toaster position="bottom-right" />

      <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent text-center mb-8">
        Contact Me
      </h2>

      <p className="text-white-600 mb-8">
        Feel free to reach out if you'd like to collaborate
        or discuss opportunities.
      </p>

      <form action={handleSubmit}
            ref={formRef}
            className="max-w-md mx-auto m-9 text-black flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg border border-gray-200">

        <input type="hidden" name="title" value="Portfolio Inquiry" />

        <input
            type='text'
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-redish focus:ring-2 focus:ring-redish transition"
            required
        />

        <input
            type='email'
            name="email"
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