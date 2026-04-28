"use client";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";


function Contact() {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const loadingToast = toast.loading("Sending message...");

    try{
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Email sent successfully!", { id: loadingToast });
        e.target.reset();
      } else {
        toast.error("Failed to send email.", { id: loadingToast });
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.", { id: loadingToast });
    } finally {
      setIsSending(false);
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

      <form onSubmit={sendEmail}
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
            disabled={isSending}
            className={`py-3 rounded-lg border border-white text-white transition ${
                isSending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-deepblue to-redish hover:scale-105"
            }`}
        > {isSending ? "Sending..." : "Send Message"} </button>
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