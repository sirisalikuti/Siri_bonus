import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Database, Brain, 
  LineChart, Monitor, GitBranch,
  Cpu, Network, Layout
} from 'lucide-react';

const Skills = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('technical');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const technicalSkills = [
    { name: 'Python', icon: <Code2 size={24} /> },
    { name: 'R', icon: <LineChart size={24} /> },
    { name: 'SQL', icon: <Database size={24} /> },
    { name: 'Machine Learning', icon: <Brain size={24} /> },
    { name: 'Statistics', icon: <LineChart size={24} /> },
    { name: 'Data Visualization', icon: <LineChart size={24} /> },
    { name: 'Neural Networks', icon: <Network size={24} /> },
    { name: 'Computer Vision', icon: <Monitor size={24} /> }
  ];

  const softwareDevelopment = [
    { name: 'Operating Systems', icon: <Cpu size={24} /> },
    { name: 'DBMS', icon: <Database size={24} /> },
    { name: 'Web Technologies', icon: <Layout size={24} /> },
    { name: 'GitHub', icon: <GitBranch size={24} /> },
    { name: 'C/C++', icon: <Code2 size={24} /> },
    { name: 'Problem Solving', icon: <Brain size={24} /> }
  ];

  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'development', label: 'Software Development' }
  ];

  const displaySkills = activeTab === 'technical' ? technicalSkills : softwareDevelopment;

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`${inView ? 'fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">My Skills</h2>
        
        <div className="mb-8 flex justify-center">
          <div className={`inline-flex rounded-md p-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all font-medium ${
                  activeTab === tab.id 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displaySkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${index * 100}ms`
              }}
            >
              <div className="flex justify-center mb-3 text-blue-500">
                {skill.icon}
              </div>
              <div className="font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${inView ? 'slide-up' : 'opacity-0'}`}>
            {['Blue Prism', 'Edu skills Cloud Riders', 'Insofe data science course'].map((cert, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg transform transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                <div className="font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;