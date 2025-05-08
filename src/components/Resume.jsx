import { useInView } from 'react-intersection-observer';
import { FileText, Download, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = ({ theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Placeholder for resume download
  const resumeUrl = '#'; // Replace with actual resume URL when available
  
  return (
    <section id="resume" className="section" ref={ref}>
      <div className={`${inView ? 'slide-up' : 'opacity-0'}`}>
        <h2 className="section-title">My Resume</h2>
        
        <div className={`mt-12 p-8 rounded-lg text-center ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <div className="mb-6 flex justify-center">
            <FileText size={64} className="text-blue-500" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            For a complete overview of my skills, experience, and education, please download my resume.
            Feel free to contact me if you have any questions or would like additional information.
          </p>
          
          <a 
            href={resumeUrl}
            download="Sirichandana_Reddy_Resume.pdf"
            className="btn btn-primary inline-flex items-center"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Experience',
              description: 'Data Scientist Trainee with hands-on experience in data analysis and machine learning.',
              icon: <Briefcase size={32} className="text-blue-500" />
            },
            {
              title: 'Education',
              description: 'MS in Computer Science and B.Tech in Computer Science Engineering.',
              icon: <GraduationCap size={32} className="text-blue-500" />
            },
            {
              title: 'Skills',
              description: 'Proficient in Python, R, SQL, Machine Learning, and Statistical Analysis.',
              icon: <Code size={32} className="text-blue-500" />
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-md card-hover`}
              style={{ 
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 200}ms, transform 0.5s ease ${index * 200}ms`
              }}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;