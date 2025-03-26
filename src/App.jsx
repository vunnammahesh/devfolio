import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"
function App() {
  return (
    <div className="App font-sans bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <section id="projects" className="h-screen flex justify-center items-center">
        <h1 className="text-5xl">Projects Section</h1>
      </section>

      <section id="contact" className="h-screen flex justify-center items-center">
        <h1 className="text-5xl">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;