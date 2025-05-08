import { Heart } from 'lucide-react';

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 px-4 text-center ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    } border-t ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="container mx-auto">
        <p className="flex items-center justify-center">
          <span>© {currentYear} Sirichandana Reddy Salikuti. Crafted with</span>
          <Heart size={16} className="mx-1 text-red-500 fill-current" />
          <span>using React.js</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Data Scientist & Computer Science Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;