import { useState } from "react";
import contactData from "../data/contact.json";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }
    alert("Message Sent! (Functionality to be added later)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Feel free to reach out! I'm open to opportunities and collaborations.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href={contactData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            <FaGithub size={28} />
          </a>
          <a href={contactData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            <FaLinkedin size={28} />
          </a>
          <a href={`mailto:${contactData.contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            <FaEnvelope size={28} />
          </a>
          <a href={`tel:${contactData.contact.mobile}`} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500">
            <FaPhone size={22} />
            <span>{contactData.contact.mobile}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
