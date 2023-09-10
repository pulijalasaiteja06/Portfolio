import React from "react";
import styled from "styled-components";

const About = () => {
    return(
            <Container>
                <h2>About Me</h2>
                <p>
                    As an enthusiastic Computer Science fresher, I am eager to embark on a journey to contribute my technical skills and foster innovation. My educational background includes a Bachelor of Technology in Computer Science and Engineering from Marri Laxman Reddy Institute of Technology and Management, Dundigal, Hyderabad, where I graduated with distinction, achieving a remarkable percentage of 72.0 during the academic years from 2020 to 2023.
                    Prior to my engineering pursuits, I pursued a Diploma in Civil Engineering at GOVT Polytechnic College, Nalgonda, and excelled with a commendable percentage of 82.11 during my tenure from 2017 to 2020. My journey into the realm of education began at Z.P. High School, Chandur, Nalgonda, during my secondary school years from 2016 to 2017, where I maintained an impressive academic record with a score of 78.0.
                    In addition to my educational endeavors, my technical skills encompass a diverse range of languages and technologies, including Python, MySQL, HTML, CSS, JavaScript, and C. This comprehensive skill set equips me to take on a myriad of challenges and contribute effectively to various projects.
                    My practical experience includes valuable internships, including one at "Virtusa Consulting Services Pvt Ltd." These internships provided me with hands-on experience and insights into the industry's dynamics. Among my notable achievements, I spearheaded a major project, "A Machine Learning based Approach for Wine Quality Prediction," showcasing my proficiency in machine learning. Furthermore, I successfully completed a mini-project, "Morse Code Converter," underscoring my ability to implement innovative solutions.
                    In recognition of my commitment to continuous learning, I have acquired several certifications. I hold certifications in "Machine Learning with Python" from freeCodeCamp, "Front-End Technologies" from Epam Systems, and "Microsoft Azure Fundamentals AZ-900" from Microsoft Azure. Additionally, I am honored to have earned the "TCS iON Career Edge - Young Professional" certification and received an award for my exceptional performance in the final exam on "Java Fundamentals" conducted by Oracle Academy.
                    With a strong foundation in computer science and engineering, a rich academic history, and a passion for continuous learning, I am poised to contribute my knowledge and skills to a dynamic team and play a pivotal role in driving innovation in the field of technology.
                </p>
            </Container>
        
    );
};

const Container = styled.div`
    left: 0;
    right: 0;    
    font-weight: bold;
    margin: 60px 40px 60px 50px;
    align-items: center;
    justify-content: center;
    
    p {
        margin: 30px 20px;
    };
`;

export default About;