import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Publications from './components/Publications';
import Talks from './components/Talks';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-white bg-gray-900">
      <header className="px-2 pt-12 max-w-5xl mx-auto">
        <Hero />
        <Navbar />
      </header>

      <main className="px-2 max-w-5xl mx-auto space-y-16">
        <About />
        <Talks />
        <Publications />
        <Contact />
        <footer className="py-8 text-sm text-gray-500 border-t border-gray-800">
          &copy; {new Date().getFullYear()} Vibe coded with ChatGPT by yours truly
        </footer>
      </main>
    </div>
  );
}
