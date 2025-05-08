import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header = ({ theme, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' }
  ];
  
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrollY > 50 
      ? theme === 'dark' 
        ? 'bg-gray-900/95 shadow-md backdrop-blur-sm' 
        : 'bg-white/95 shadow-md backdrop-blur-sm'
      : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="font-bold text-xl cursor-pointer"
        >
          <span className="text-blue-500">Siri</span>chandana
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-blue-500 font-medium"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className={`md:hidden absolute top-16 left-0 right-0 py-4 shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } slide-in-right`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-blue-500 font-medium"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-300 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;