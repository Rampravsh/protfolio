import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_v9xftna",
        "template_oppy9gi",
        form.current,
        "4mMrSS7_cWFy1EDZn"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setStatus("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Get in <span className="text-[var(--primary)]">Touch</span>
          </h1>
          <p className="text-gray-400 mb-10 text-lg">
            I’m currently available for freelance work. Have a project or just
            want to say hi? <br /> My inbox is always open.
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-black/50 border border-white/10 rounded-2xl p-8 space-y-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--primary)] outline-none px-4 py-3 rounded-t"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--primary)] outline-none px-4 py-3 rounded-t"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              name="message"
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-[var(--primary)] outline-none px-4 py-3 rounded-t"
              placeholder="Your Message"
              rows="5"
              required
            />
            <button
              type="submit"
              className="w-full btn btn-primary text-black font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
            {status && <p className="text-center text-white mt-4">{status}</p>}
          </form>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">You can also find me on:</p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a
              href="https://github.com/Rampravsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/rpk-undefined-297949256"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/rampraveshkr05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
