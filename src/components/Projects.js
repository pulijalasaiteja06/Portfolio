import React from 'react';
import styled from 'styled-components';

const projectsData = [
  {
    name: 'wine',
    image: 'Wine1.jpeg',
    link: 'https://github.com/pulijalasaiteja06/A-Machine-Approach-for-Wiine-Quality-Detection',
    title: 'Wine Quality Detection',
  },
  {
    name: 'morse',
    image: 'Morse-Code-Letters.jpg',
    link: 'https://github.com/pulijalasaiteja06/Morse-Code-Convertor',
    title: 'Morse Code Converter',
  },
  {
    name: 'portfolio',
    image: 'loading.jpg',
    link: '#',
    title: 'Loading',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {projectsData.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectLink href={project.link} target="_blank">
              <ProjectImage src={`images/${project.image}`} alt={project.name} />
              <ProjectTitle>{project.title}</ProjectTitle> {/* Added title */}
            </ProjectLink>
          </ProjectItem>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
    margin: 100px 50px 10px 50px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    img{
        width: 100%;
        height: auto;
    }
}
`;

const ProjectItem = styled.li`
  margin: 20px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #333;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.span`
  margin-top: 20px;
  font-weight: bold;
`;

export default Projects;

