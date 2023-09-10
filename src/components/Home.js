import { useState, React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Body from './Body';
import Skills from './Skills';
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";


const ImageTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  text-align: center;
`;


const Home = () => {
    const [activeComponent, setActiveComponent] = useState("Body");
    const [linkClicked, setLinkClicked] = useState(false);

    const renderComponent = (component) => {
        setActiveComponent(component);
        setLinkClicked(true);
    };
    return(
        <div>
            {activeComponent === 'Body' && <Body />}
            {activeComponent === 'Skills' && <Skills />}
            {activeComponent === 'Projects' && <Projects />}
            {activeComponent === 'Education' && <Education />}
            {activeComponent === 'Certifications' && <Certifications />}
            <Link to="#" onClick={() => renderComponent('Body')}>
            </Link>
            <Extra>
                <Det>
                {linkClicked ? null : ( 
                    <Link to="#" onClick={() => renderComponent('Skills')}>
                        <img src='images/Skills.png' alt='skills' />
                        <ImageTitle>Skills</ImageTitle>
                    </Link>)
                }
                </Det>
                <Det>
                {linkClicked ? null : (
                    <Link to="#" onClick={() => renderComponent('Projects')}>
                        <img src='images/projects.jpg' alt='projects' />
                        <ImageTitle>Projects</ImageTitle>
                    </Link>)
                }
                </Det>
                <Det>
                {linkClicked ? null : (
                    <Link to="#" onClick={() => renderComponent('Education')}>
                        <img src='images/education.jpg' alt='education' />
                        <ImageTitle>Education</ImageTitle>
                    </Link>)
                }
                </Det>   
            </Extra>
            <Extra>
                <Det>
                {linkClicked ? null : (
                    <Link to="#" onClick={() => renderComponent('Certifications')}>
                        <img src='images/certifications.png' alt='certifications' />
                        <ImageTitle>Certifications</ImageTitle>
                    </Link>)
                }
                </Det>
            </Extra>
        </div>
    );
};


const Extra = styled.div`
    position: relative;
    display: flex;
    flex-direction: row; 
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    padding: auto;
    margin: 40px 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        img{
            width: 100%;
            height: auto;
        }
    }
`;



const Det = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 60px;
    img{
        border-radius: 10px;
        width: 250px;
        height: 160px;
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



export default Home;