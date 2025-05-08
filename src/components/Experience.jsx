import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = ({ theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const workExperience = [
    {
      title: 'Data Scientist - Trainee',
      company: '',
      duration: 'July 2022 - March 2023',
      description: [
        'Participated in training sessions covering Python, R, and SQL',
        'Gained solid technical skills through Data Science courses',
        'Enhanced problem-solving abilities through practical applications',
        'Studied statistics, data visualization, statistical modeling, and machine learning',
        'Worked with databases, neural networks, and computer vision for data science'
      ]
    }
  ];
  
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Auburn University at Montgomery',
      duration: 'Jan 2024 - Present',
      description: [
        'Focused tech skills training',
        'Developed and implemented innovative algorithms for sustainable engineering',
        'Optimized resource efficiency through computational approaches'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      school: 'AVN Institute of Engineering and Technology',
      duration: 'Graduated June 2021',
      description: [
        'Developed and implemented efficient algorithms',
        'Demonstrated strong problem-solving and coding abilities',
        'Applied core computer science principles to create functional software applications',
        'Showcased practical programming expertise'
      ]
    }
  ];

  return (
    <section id="experience" className="section" ref={ref}>
      <div className={`${inView ? 'fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}
                >
                  <h4 className="text-xl font-medium">{job.title}</h4>
                  {job.company && <p className="text-lg text-blue-500">{job.company}</p>}
                  <p className="text-sm text-gray-500 dark:text-gray-400 my-1">{job.duration}</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}
                >
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <p className="text-lg text-blue-500">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 my-1">{edu.duration}</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;