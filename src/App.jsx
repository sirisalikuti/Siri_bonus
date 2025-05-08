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
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('light');
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
    
    document.body.className = theme;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header theme={theme} scrollY={scrollY} />
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
      <ScrollToTop show={scrollY > 500} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;