import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">Harsh Singh</a>
          <nav className="hidden gap-6 text-sm text-gray-300 sm:flex">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-950 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-gray-400">
          <p>© 2024 • Built by Harsh Singh</p>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
