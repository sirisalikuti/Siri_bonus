import React from 'react';

function Contact() {
    return (
        <div className="bg-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
            <header className="bg-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-4">
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

            <main className="py-16 px-6 md:px-10 lg:px-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contact Me</h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Feel free to reach out! I'm open to new opportunities and collaborations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-lg mx-auto">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone</h3>
                            <p className="text-gray-600">+1 9167129113</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Email</h3>
                            <p className="text-gray-600">sirichandanareddysalikuti@gmail.com</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">LinkedIn</h3>
                            <p className="text-gray-600">
                                <a href="http://linkedin.com/in/sirichandana-reddy-salikuti-2a4702216" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    linkedin.com/in/sirichandana-reddy-salikuti-2a4702216
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 py-4 text-center">
                <p className="text-gray-300">© 2024 Sirichandana Reddy Salikuti. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;