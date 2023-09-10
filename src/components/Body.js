import React from "react";
import styled from "styled-components";

const Body = () => {
    return(
        <div>
            
            <Container>
            <Info>
                <p>
                    <h1>Saiteja Pulijala</h1>
                    Hello everyone,<br/>
                    <br/>
                    I'm Saiteja Pulijala, a recent graduate <br/>
                    of 2023 with a degree in Computer Science and Engineering. <br/>
                    My passions lie in both Web Development and Data Science. <br/>
                    Currently, I'm actively seeking job opportunities to further explore <br/>
                    and contribute to these fields. 
                    <br/>
                    <br/>
                    If you'd like to learn more about me, feel free to <a href='https://www.linkedin.com/in/saiteja-pulijala-084a5a23b/'>click here!</a>
                </p>
            </Info>

            <Photo>
                <img src='images/profile.jpg' alt='Profile'/>
            </Photo>
        </Container>
        <Container>
            
            <Photo>
                <a href='https://drive.google.com/file/d/1Gtp9T_wp4L1QfkuNF16Rwdir-qGuhyo5/view?usp=sharing'><img src='images/Resume_prev.png' alt='Resume Preview'/></a>
            </Photo>
            <Info>
                <p>Skilled individual with a strong foundation in Python, MySQL, HTML,
                    CSS, JavaScript, and C. Experienced intern at "Virtusa Consulting 
                    Services Pvt Ltd." Demonstrated expertise in machine learning through a 
                    major project on wine quality prediction, and developed a Morse code converter 
                    as a mini-project. Holds certifications in "Machine Learning with Python" from freeCodeCamp,
                    "Front-End Technologies" from Epam Systems, and 
                    "Microsoft Azure Fundamentals AZ-900" from Microsoft Azure. Recognized with the 
                    "TCS iON Career Edge - Young Professional" certification and an award for completing Oracle Academy's "Java Fundamentals" final exam.</p>
            </Info>
            </Container>
        </div>
    );
};

const Container = styled.div`
    position: relative;
    left: 0;
    right: 0;
    top:60px;
    
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;    
    
    
    padding: auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;



const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 50px 60px;
    max-width: 450px;
    
    
    a {
        color: skyblue;
        target: _blank;
        // text-decoration: underline;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);

        border-radius: 10px;
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
`;


const Photo = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 60px;
    img{
        border-radius: 10px;
        width: 300px;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        
        &:hover {
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transform: scale(1.05);
            
            border-radius: 10px;
            border: 3px solid white;
        }
    }

`;

export default Body;