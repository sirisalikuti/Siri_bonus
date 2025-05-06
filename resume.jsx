import React from 'react';

function Resume() {
    return (
        <div style={{ fontFamily: 'sans-serif', margin: '20px' }}>
            <h1>Sirichandana Reddy Salikuti</h1>

            <div className="section" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
                <h2>Work Experience</h2>
                <h3>Data Scientist - Trainee</h3>
                <p>July 2022 - March 2023</p>
                <p>I have participated in a range of training sessions covering Python, R and SQL. Through various Data Science courses, I have gained solid technical skills and enhanced my problem-solving abilities. These courses include Introduction to Statistics, Statistical Visualization, Statistical Modeling, Databases and SQL, Machine Learning, Artificial Neural Networks, Computer Vision for Data Science and Data Science with Python.</p>
            </div>

            <div className="section" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
                <h2>Education</h2>
                <h3>Master of Science in Computer Science</h3>
                <p>Jan 2024 - Present</p>
                <p>Auburn University at Montgomery</p>
                <ul className="subsection" style={{ marginLeft: '20px' }}>
                    <li>Focused tech skills training</li>
                    <li>Developed and implemented innovative algorithms for sustainable engineering</li>
                    <li>Optimizing resource efficiently</li>
                </ul>

                <h3>Bachelor's of Technology in Computer Science Engineering</h3>
                <p>May 2022</p>
                <p>Avn Institute of Engineering and Technology</p>
                <ul className="subsection" style={{ marginLeft: '20px' }}>
                    <li>Developed and implemented efficient algorithms, demonstrating strong problem-solving and coding abilities.</li>
                    <li>Applied core computer science principles to create functional software applications, showcasing practical programming expertise.</li>
                </ul>
            </div>

            <div className="section" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
                <h2>Skills & Expertise</h2>
                <div>
                    <h3>Programming Languages:</h3>
                    <ul className="skill-list" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div>
                    <h3>Web Development:</h3>
                    <p><strong>Front-end:</strong> HTML, CSS, React.js</p>
                    <p><strong>Back-end:</strong> Node.js</p>
                </div>
                <div>
                    <h3>Databases:</h3>
                    <ul className="skill-list" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>NoSQL</li>
                    </ul>
                </div>
                <div>
                    <h3>Cloud Technologies:</h3>
                    <ul className="skill-list" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>GCP</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools & Technologies:</h3>
                    <p><strong>IDEs:</strong> VS Code, PyCharm</p>
                    <p><strong>Version Control:</strong> Git, GitHub, GitLab</p>
                    <p><strong>Cloud:</strong> AWS</p>
                    <p><strong>Data Science:</strong> Python (Pandas, NumPy, Scikit-learn), SQL, Tableau</p>
                    <p><strong>Operating Systems:</strong> Linux, Windows, macOS</p>
                </div>
                <div>
                    <h3>Certifications:</h3>
                    <ul className="skill-list" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>BluePrism</li>
                        <li>Aws Cloud Riders</li>
                        <li>Insofe Data science full course</li>
                    </ul>
                </div>
            </div>

            <div className="contact-info" style={{ display: 'flex', gap: '20px', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                <div><strong>Phone:</strong> +1 9167129113</div>
                <div><strong>Email:</strong> sirichandanareddysalikuti@gmail.com</div>
                <div><strong>LinkedIn:</strong> <a href="http://linkedin.com/in/sirichandana-reddy-salikuti-21a7b1276">linkedin.com/in/sirichandana-reddy-salikuti-21a7b1276</a></div>
            </div>
        </div>
    );
}

export default Resume;