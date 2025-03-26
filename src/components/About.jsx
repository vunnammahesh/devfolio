import aboutData from "../data/about.json";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{aboutData.bio}</p>

        {/* Work Experience */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Work Experience</h3>
          {aboutData.workExperience.map((job, index) => (
            <div key={index} className="mt-3 p-4 rounded-lg border-l-4 border-indigo-500 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
              <h4 className="text-lg font-medium text-indigo-500">{job.role} - {job.company}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{job.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
          {aboutData.education.map((edu, index) => (
            <div key={index} className="mt-3 p-5 rounded-lg border-l-4 border-green-500 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold text-green-500">{edu.degree}</h4>
              <h4 className="text-lg font-semibold text-indigo-500">{edu.percentage} %</h4>
            </div>
            <p className="text-md text-gray-700 dark:text-gray-300 tracking-wide">
              {edu.college}, {edu.year}
            </p>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}
