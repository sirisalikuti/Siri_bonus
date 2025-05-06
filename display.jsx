import React from 'react';

function Display() {
    const circularButtonStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        transition: 'transform 0.3s ease-in-out',
    };

    const circularButtonHoverStyle = {
        transform: 'scale(1.05)',
    };

    return (
        <div className="bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
            <header className="bg-gray-50 py-4 px-6 md:px-10 lg:px-20">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">Sirichandana Reddy Salikuti</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 items-center">
                            <li><a href="resume.html" className="text-gray-700 hover:text-blue-600 transition duration-300">Resume</a></li>
                            <li><a href="project.html" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a></li>
                            <li><a href="contact.html" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        {/* Mobile menu button and logic would go here (using state and event handlers) */}
                        <button id="mobile-menu-button" className="text-gray-700 focus:outline-none focus:shadow-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        {/* Mobile menu items */}
                        <div id="mobile-menu" className="hidden absolute top-16 right-0 bg-gray-50 shadow-lg rounded-md py-2 px-4 space-y-2">
                            <a href="resume.html" className="block text-gray-700 hover:text-blue-600 transition duration-300">Resume</a>
                            <a href="project.html" className="block text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
                            <a href="contact.html" className="block text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section id="home" className="container mx-auto py-16 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <img src="home.jpeg" alt="Sirichandana Reddy Salikuti" className="rounded-full shadow-lg" />
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Hello</h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Detail-oriented and highly motivated aspiring Software Developer with a solid foundation in technologies like Python and Java. I am eager to leverage my technical skills to contribute to the development of innovative and efficient solutions, while actively seeking opportunities for professional growth within a collaborative team setting.
                        </p>
                        <div className="flex space-x-4">
                            <a href="resume.html" className="circular-button bg-yellow-500" style={circularButtonStyle}  >Resume</a>
                            <a href="project.html" className="circular-button bg-red-500" style={{...circularButtonStyle, ...circularButtonHoverStyle}}>Projects</a>
                            <a href="contact.html" className="circular-button bg-teal-500" style={circularButtonStyle}>Contact</a>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-gray-100 py-16 px-6 md:px-10 lg:px-20">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone</h3>
                                <p className="text-gray-600">+1 9167129113</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Email</h3>
                                <p className="text-gray-600">sirichandanareddysalikuti@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">LinkedIn</h3>
                                <p className="text-gray-600">
                                    <a href="http://linkedin.com/in/sirichandana-reddy-salikuti-2a4702216" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        linkedin.com/in/sirichandana-reddy-salikuti-2a4702216
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 py-4 text-center">
                <p className="text-gray-300">© 2024 Sirichandana Reddy Salikuti. All rights reserved.</p>
            </footer>

            {/* Mobile menu toggle script - this would be better handled with React state */}
            {/* You'll need to add state and event handlers to manage the mobile menu's visibility */}
        </div>
    );
}

export default Display;