import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import contactData from "../data/contact.json";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Feel free to reach out for collaborations or opportunities!
        </p>

        {/* Contact Links */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          {/* Email */}
          <a
            href={`mailto:${contactData.contact.email}`}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            <FaEnvelope size={22} />
            <span>{contactData.contact.email}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={contactData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={contactData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>

          {/* Phone Number */}
          <a
            href={`tel:${contactData.contact.mobile}`}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500"
          >
            <FaPhone size={22} />
            <span>{contactData.contact.mobile}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
