import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import aboutData from "../data/about.json";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* About Me Section */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center leading-relaxed">
          {aboutData.bio}
        </p>

        {/* Work Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <FaBriefcase className="mr-3 text-indigo-500" /> Work Experience
          </h3>
          <div className="space-y-6">
            {aboutData.workExperience.map((job, index) => (
              <div key={index} className="relative p-6 border-l-4 border-indigo-500 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform duration-300 hover:scale-[1.02]">
                <span className="absolute -left-3 top-6 bg-indigo-500 w-6 h-6 rounded-full"></span>
                <h4 className="text-xl font-medium text-indigo-600">{job.role} - {job.company}</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{job.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <FaGraduationCap className="mr-3 text-green-500" /> Education
          </h3>
          <div className="space-y-6">
            {aboutData.education.map((edu, index) => (
              <div key={index} className="relative p-6 border-l-4 border-green-500 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform duration-300 hover:scale-[1.02]">
                <span className="absolute -left-3 top-6 bg-green-500 w-6 h-6 rounded-full"></span>
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold text-green-600">{edu.degree}</h4>
                  <h4 className="text-lg font-semibold text-indigo-500">{edu.percentage} %</h4>
                </div>
                <p className="text-md font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                  {edu.college}, {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
