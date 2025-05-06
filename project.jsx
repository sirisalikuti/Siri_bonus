import React from 'react';

function Projects() {
    const sectionStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
    };

    const projectStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
    };

    const projectTextStyle = {
        flex: 1,
    };

    const projectImageStyle = {
        maxWidth: '300px',
        borderRadius: '4px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const contactInfoStyle = {
        display: 'flex',
        gap: '40px',
    };

    const contactItemStyle = {
        flex: 1,
    };

    return (
        <div style={{ fontFamily: 'sans-serif', margin: '20px', lineHeight: '1.6' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className="section" style={sectionStyle}>
                    <h2>Projects</h2>
                    <div className="project" style={projectStyle}>
                        <div className="project-text" style={projectTextStyle}>
                            <h3>Using face recognition in the automatic door access control in a secured room</h3>
                            <p>The system tests only the human face images resulting from the Viola-Jones algorithm. The system can recognize a person who is in the database by projecting the face vector to the base vectors. The recognition of the test face vector allows automatic opening/closing of a door immediately after the identification of the person is acknowledged, and after a preset period of time (2 seconds), the door closes automatically. The edge sensors of the door control system (optocouplers) are used to stop the engine if the door reaches one of the two extreme positions. This switch functions mainly with an algorithm that is loaded into the microcontroller and based on data received through the serial port from the PC after face detection.</p>
                        </div>
                        <img src="face.jpg" alt="Face Recognition Project" className="project-image" style={projectImageStyle} />
                    </div>
                    <div className="project" style={projectStyle}>
                        <div className="project-text" style={projectTextStyle}>
                            <h3>Twitter Sentimental Analysis</h3>
                            <p>We provide a survey and comparative study of existing techniques for opinion mining including machine learning and lexicon-base approaches, together with cross domain and cross-lingual methods and some evaluation metrics. Research results show that machine learning methods, such as SVM and naive Bayes have the highest accuracy and can be regarded as the baseline learning methods, while lexicon-based methods are very effective in some cases, which require few effort in human-labeled document. We can conclude that more the cleaner data, more accurate results can be obtained. Use of bigram model provides better sentiment accuracy as compared to other models. We can focus on the study of combining machine learning method into opinion lexicon method in order to improve the accuracy of sentiment classification and adaptive capacity to variety of domains and different languages.</p>
                        </div>
                        <img src="new twitter.jpeg" alt="Twitter Sentimental Analysis Project" className="project-image" style={projectImageStyle} />
                    </div>
                </div>

                <div className="section" style={sectionStyle}>
                    <h2>Contact</h2>
                    <div className="contact-info" style={contactInfoStyle}>
                        <div className="contact-item" style={contactItemStyle}>
                            <h3>Phone</h3>
                            <p>+1 9167129113</p>
                        </div>
                        <div className="contact-item" style={contactItemStyle}>
                            <h3>Email</h3>
                            <p><a href="mailto:sirichandanareddysalikuti@gmail.com">sirichandanareddysalikuti@gmail.com</a></p>
                        </div>
                        <div className="contact-item" style={contactItemStyle}>
                            <h3>LinkedIn</h3>
                            <p><a href="http://linkedin.com/in/sirichandana-reddy-salikuti-2a4702216" target="_blank">linkedin.com/in/sirichandana-reddy-salikuti-2a4702216</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;