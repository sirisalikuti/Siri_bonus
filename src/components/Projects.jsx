import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ theme }) => {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const projects = [
    {
      title: 'Face Recognition Door Control',
      category: 'ml',
      image: 'https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Automatic door access control system using face recognition with Viola-Jones algorithm and microcontroller integration.',
      technologies: ['Python', 'OpenCV', 'Microcontroller', 'Computer Vision'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Twitter Sentiment Analysis',
      category: 'ml',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sentiment analysis system using machine learning and lexicon-based approaches for Twitter data.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'SVM', 'Naive Bayes'],
      github: '#',
      demo: '#'
    },
   
    
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className={`${inView ? 'fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">My Projects</h2>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === filterItem.id
                  ? 'bg-blue-500 text-white'
                  : `${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${index * 100}ms`
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;