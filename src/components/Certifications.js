import React from 'react';
import styled from 'styled-components';

const certificationsData = [
  {
    name: 'MS AZ-900',
    organization: 'Microsoft',
    date: 'March 2023',
    description: 'Microdoft Azure Fundamentals',
    image: 'Microsoft_logo.jpg',
    link: 'https://www.credly.com/badges/166679d0-6cf3-469d-8d40-ae2b83c1ba5f/linked_in_profile',
  },
  {
    name: 'Front-End Technologies',
    organization: 'Epam Systems',
    date: 'July 2021',
    description: 'HTML, CSS, Reactjs etc..,',
    image: 'Epam_logo.png', // Add the image filename
    link: 'https://certificates.epam.com/certificates/f1459dbd-83cb-4491-b698-5317ab2ad59a',
  },
  {
    name: 'Data Analysis with Python',
    organization: 'IBM',
    date: 'July 2021',
    description: 'Data Extraction, Cleaning etc..,',
    image: 'IBM_logo.png', // Add the image filename
    link: 'https://www.credly.com/badges/19f484c7-d14a-4ff8-a7c7-637ed53b9eba/linked_in_profile',
  },
  {
    name: 'C#',
    organization: 'freeCodeCamp',
    date: 'July 2021',
    description: 'Foundational C# with Microsoft',
    image: 'freeCodeCamp_logo.png', // Add the image filename
    link: 'https://www.freecodecamp.org/certification/Saiteja_Pulijala/foundational-c-sharp-with-microsoft',
  },
  {
    name: 'Career Edge - Young Professional',
    organization: 'TCS iON',
    date: 'July 2021',
    description: 'Soft Skills, Email, Phone Etiquttes etc..,',
    image: 'tcsion_logo.png', // Add the image filename
    link: 'https://drive.google.com/file/d/1-ecSx1HqR9Q4Zhmmdcvuq0Ruc69ef-vs/view?usp=sharing',
  },
  {
    name: 'Machine Learning with Python',
    organization: 'IBM',
    date: 'July 2021',
    description: 'Classification, Regression etc..,',
    image: 'IBM_logo.png', // Add the image filename
    link: 'https://www.credly.com/badges/1587ff28-a79e-4d04-b6e4-26314d4f6484/linked_in_profile',
  },
  
];

const Certifications = () => {
  return (
    <CertificationsContainer>
      <CertificationsTitle>Certifications</CertificationsTitle>
      <CertificationsList>
        {certificationsData.map((certification, index) => (
          <CertificationItem key={index}>
            
            <CertificationLink href={certification.link} target="_blank">
              <CertificationImage src={`images/Cert/${certification.image}`} alt={certification.name} />
            </CertificationLink>
            <CertificationName>{certification.name}</CertificationName>
            <CertificationInfo>
              <div>
                <strong>Organization:</strong> {certification.organization}
              </div>
              <div>
                <strong>Date:</strong> {certification.date}
              </div>
              
              <div>
                <strong>Description:</strong> {certification.description}
              </div>
            </CertificationInfo>
          </CertificationItem>
        ))}
      </CertificationsList>
    </CertificationsContainer>
  );
};

const CertificationsContainer = styled.div`
margin: 100px 50px 10px 50px;
  color: black;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CertificationsTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const CertificationsList = styled.ul`
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

const CertificationItem = styled.li`
  margin: 16px; /* Add margin to create spacing between certification entries */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertificationName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CertificationInfo = styled.div`
  text-align: left;
  margin-top: 8px;
`;

const CertificationLink = styled.a`
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

const CertificationImage = styled.img`
  width: 200px;
  height: 80px;
  margin: 15px 0px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default Certifications;
