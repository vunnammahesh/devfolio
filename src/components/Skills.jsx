import { useEffect, useState } from "react";
import data from "../data/skills.json";

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    setSkillsData(data.skills ||[]); // Load skills dynamically
  }, []);
  if (!skillsData.length) return null;


  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills & Tools
        </h2>

        {skillsData.map((category, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center">
              {category.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 
                             transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                      {item.name}
                    </h4>
                  </div>

                  {/* Progress Bar (For skills) */}
                  {"level" in item && (
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-4 relative overflow-hidden">
                      <div
                        className="bg-indigo-500 h-3 rounded-full animate-fill"
                        style={{
                          width: `${item.level}%`,
                          transition: "width 1.5s ease-in-out",
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add CSS animation for progress bars */}
      <style>
        {`
          @keyframes fill {
            from { width: 0; }
            to { width: 100%; }
          }
          .animate-fill {
            animation: fill 1.5s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
