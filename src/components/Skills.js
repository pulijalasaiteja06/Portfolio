import React from 'react';
import styled from 'styled-components';

const skillsData = [
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'Reactjs',
  'MySQL',
  'Data Analytics',
  'C#',
  'Node.js',
  'Responsive Design',
  'Git',
  'SQL Server',
  'C,C++',
];

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        {skillsData.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  margin: 100px 50px 10px 50px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
`;

const SkillsTitle = styled.h2`
    color: black;
    font-size: 28px;
    margin-bottom: 20px;
  
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  margin: 8px;
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
`;

export default Skills;



// import React from 'react';
// import styled from "styled-components";

// const Skills = () => {
//     return(
//         <Container>
//             <h2>Skills</h2>
            
//         </Container>
//     );
// };

// const Container = styled.div`
//     left: 0;
//     right: 0;    
//     font-weight: bold;
//     margin: 60px 40px 60px 50px;
//     align-items: center;
//     justify-content: center;
// `;

// export default Skills;