import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeProvider from "./components/ThemeProvider"; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap everything inside ThemeProvider */}
      <div className="App font-sans bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
