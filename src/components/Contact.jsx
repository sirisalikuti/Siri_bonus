import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-blue-500" />,
      title: 'Email',
      content: 'sirichandanareddysalikuti@gmail.com',
      link: 'mailto:sirichandanareddysalikuti@gmail.com'
    },
    {
      icon: <Phone size={24} className="text-blue-500" />,
      title: 'Phone',
      content: '+1 916-712-9113',
      link: 'tel:+19167129113'
    },
    {
      icon: <MapPin size={24} className="text-blue-500" />,
      title: 'Location',
      content: 'Montgomery, AL',
      link: null
    }
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`${inView ? 'fade-in' : 'opacity-0'}`}>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg flex ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                <div className="mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-blue-500 hover:underline"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className="font-semibold mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/sirichandana-reddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  <Linkedin size={20} className="text-blue-500" />
                </a>
                <a 
                  href="https://github.com/sirichandana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  <Github size={20} className="text-gray-800 dark:text-gray-200" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 focus:border-blue-500'
                        : 'bg-white border border-gray-300 focus:border-blue-500'
                    } outline-none transition-colors`}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 focus:border-blue-500'
                        : 'bg-white border border-gray-300 focus:border-blue-500'
                    } outline-none transition-colors`}
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-md ${
                    theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700 focus:border-blue-500'
                      : 'bg-white border border-gray-300 focus:border-blue-500'
                  } outline-none transition-colors`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 rounded-md ${
                    theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700 focus:border-blue-500'
                      : 'bg-white border border-gray-300 focus:border-blue-500'
                  } outline-none transition-colors`}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex justify-center items-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
              
              {submitMessage.text && (
                <div className={`p-3 rounded-md mt-4 ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;