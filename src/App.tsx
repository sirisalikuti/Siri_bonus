import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
    }
    
    // Apply theme class to body
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Resume theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;