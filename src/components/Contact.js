import React from "react";
import styled from "styled-components";


const Contact = () => {
    return(
        <Container>
            <h1>Hi, how can I help?</h1>
            <br/>
            <h2>Help and support</h2>
            <p>
                Contact us: 
                <br/><br/>
                Mobile: <br/>
                (+91) 9493675404
                <br/><br/>
                Email: <br/>
                pulijalasaiteja@gmail.com
                <br/><br/>
                LinkedIn: <br/>
                <a href="www.linkedin.com/in/saiteja-pulijala-084a5a23b">Saiteja Pulijala</a>
                <br/><br/>
                Twitter: <br/>
                <a href="https://twitter.com/pulijalasaiteja">PulijalaSaiteja</a>
                
            </p>
        </Container>
    );
};

const Container = styled.div`
    left: 0;
    right: 0;    
    font-weight: bold;
    margin: 60px 40px 60px 50px;
    lign-items: center;
    justify-content: center;
    a {
        color: skyblue;
    }
`;

export default Contact;