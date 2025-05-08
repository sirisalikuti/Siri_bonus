import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed z-50 bottom-8 right-8 p-3 rounded-full shadow-lg transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300'
          : 'bg-white hover:bg-gray-100 text-blue-900'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;