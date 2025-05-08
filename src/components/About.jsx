import { useInView } from 'react-intersection-observer';
import ProjectImage from '../assests/Project.png';


const About = ({ theme }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="section">
      <div ref={ref}>
        <div className={`${inView ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-1 flex justify-center">
              <div className={`w-64 h-64 rounded-full overflow-hidden flex items-center justify-center text-6xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'
              }`}>
                <img src={ProjectImage} alt="Project" />
                </div>
            </div>
            
            <div className="md:col-span-2">
              <p className="text-lg mb-4">
                I'm a Software Developer & Data Scientist  with a passion for solving complex problems using data-driven approaches and machine learning techniques.
              </p>
              
              <p className="text-lg mb-4">
                Currently pursuing a Master of Science in Computer Science at Auburn University, where I'm focusing on developing sustainable engineering solutions and optimizing resource efficiency through innovative algorithms.
              </p>
              
              <p className="text-lg mb-4">
                With a solid foundation in statistics, data visualization, and machine learning, I aim to make a sound position in the corporate world and work enthusiastically in a team to achieve the goal of the organization with devotion and hard work.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p>MS in Computer Science</p>
                  <p>B.Tech in Computer Science Engineering</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Info</h3>
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a 
                      href="mailto:sirichandanareddysalikuti@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      sirichandanareddysalikuti@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{' '}
                    <a 
                      href="tel:+19167129113"
                      className="text-blue-500 hover:underline"
                    >
                      +1 916-712-9113
                    </a>
                  </p>
                  <p><span className="font-medium">Languages:</span> English, Telugu, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;