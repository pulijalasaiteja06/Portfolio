import React from 'react';
import styled from 'styled-components';

const educationData = [
  {
    degree: 'Bachelor of Technology in CSE',
    college: 'MLRITM, Dundigal (MLRS)',
    duration: '2020 - 2023',
    university: 'JNTUH',
    cgpa: '7.70',
  },
  {
    degree: 'Civil Engineering',
    college: 'Govt Polytechnic College',
    duration: '2017 - 2020',
    university: 'TS SBTET',
    cgpa: '8.21',
  },
  {
    degree: '10th',
    college: 'Z P High School, Chandur',
    duration: '2016 - 2017',
    university: 'BSE',
    cgpa: '8.3',
  },
  // Add more education entries as needed
];

const Education = () => {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <EducationList>
        {educationData.map((education, index) => (
          <EducationItem key={index}>
            <EducationDegree>{education.degree}</EducationDegree>
            <EducationInfo>
              <div>
                <strong>College:</strong> {education.college}
              </div>
              <div>
                <strong>Duration:</strong> {education.duration}
              </div>
              <div>
                <strong>Univ/Board:</strong> {education.university}
              </div>
              <div>
                <strong>CGPA:</strong> {education.cgpa}
              </div>
            </EducationInfo>
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
margin: 100px 50px 10px 50px;
  color: black;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

`;

const EducationTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EducationItem = styled.li`
  margin: 16px; /* Add margin to create spacing between education entries */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EducationDegree = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const EducationInfo = styled.div`
  text-align: left;
  margin-top: 8px;
`;

export default Education;




// import React from "react";

// const Education = () => {
//     return(
//         <div>
//             <h2>Education</h2>
//             <p>You can now view portfolio in the browser.       

// Local:            http://localhost:3000        
// On Your Network:  http://192.168.86.68:3000    

// Note that the development build is not optimized.
// To create a production build, use npm run build. 

// webpack compiled successfully</p>
//         </div>
//     );
// };

// export default Education;