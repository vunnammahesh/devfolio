import heroData from "../data/hero.json"
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-20 md:py-32"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hey there, I'm {heroData.name} 👋
        </h1>
        <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">
          {heroData.role} 🚀
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          {heroData.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Mahesh_Vunnam_Resume.pdf"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 transition-colors duration-300"
          >
          📄 Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image / Illustration */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
        <img
          src={heroData.profile}
          alt={heroData.name}
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
