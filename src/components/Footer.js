
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: black;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding: 10px 40px;
    height: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ContactInfo = styled.div`
    margin-bottom: 10px;
`;

const SocialAccounts = styled.div`
    margin-bottom: 10px;
  
    a{
        color: skyblue;
        margin: 10px 10px;
    }
`;

const MailLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <ContactInfo>
                <h3>Contact Me</h3>
                <p>Email: 
                    <MailLink href="mailto:pulijalasaiteja@gmail.com">pulijalasaiteja@gmail.com</MailLink>
                </p>
                <p>Phone: (+91) 9493675404</p>
            </ContactInfo>

            <SocialAccounts>
                <h3>Follow Us</h3>
                <a href="https://github.com/pulijalasaiteja06">Github</a>
                <a href="https://www.linkedin.com/in/saiteja-pulijala-084a5a23b">LinkedIn</a>
                <a href="https://twitter.com/pulijalasaiteja">Twitter</a>
                <a href="https://www.instagram.com/saiteja.pulijala/">Instagram</a>
            </SocialAccounts>
        </FooterContainer>
    );
};

export default Footer;
