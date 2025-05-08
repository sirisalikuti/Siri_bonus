import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Hero = ({ theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const socialLinks = [
    { 
      icon: <GitHub size={20} />, 
      href: "https://github.com/sirichandana" 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/in/sirichandana-reddy" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:sirichandanareddysalikuti@gmail.com" 
    }
  ];
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 section"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className={`${inView ? 'fade-in' : 'opacity-0'}`}>
          <p className="text-blue-500 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sirichandana Reddy Salikuti
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Software Developer & Data Scientist 
          </h2>
          <p className="text-lg max-w-2xl mb-8">
          Detail-oriented and highly motivated aspiring Software Developer with a solid foundation
          in technologies like Python and Java. I am eager to leverage my technical skills to contribute 
          to the development of innovative and efficient solutions, while actively seeking opportunities
          for professional growth within a collaborative team setting and Passionate about analyzing data,
          building models, and creating innovative solutions 
          that make a difference in the world.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="btn btn-primary"
            >
              Get In Touch
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="btn btn-outline"
            >
              View Projects
            </Link>
          </div>
          
          <div className="flex space-x-4 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="cursor-pointer"
          >
            <ArrowDown size={24} className="text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;