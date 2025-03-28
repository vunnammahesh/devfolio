import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeProvider from "./components/ThemeProvider"; 
import BackToTop from "./components/Backtotop";

function App() {
  return (
    <ThemeProvider>
      <div className="App font-sans bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
