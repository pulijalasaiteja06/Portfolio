import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';



const Header = () => {
    return(
            <Nav>
                <h1>Saiteja Pulijala</h1>
                <NavMenu>
                    <Link to="">
                        <span>Home</span>
                    </Link>
                    <Link to="/About">
                        <span>About</span>
                    </Link>
                    <Link to="/Contact">
                        <span>Contact</span>
                    </Link>
                    <Link to="">
                        <img src="/images/icon.jpg" alt="profilePic" title="PULIJALA SAITEJA"/>
                    </Link>
                </NavMenu>
            </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: black;
    color: rgb(249, 249, 249);
    display: flex;
    justify-cotent: space-between;
    align-items: center;
    padding: 0 20px;
    letter-spacing: 1px;
    z-index: 3;
    h1{
        &:hover {
            color:rgb(29, 33, 27);
            background-color: rgb(249, 249, 249);
        }
    }
`;

const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Zoom in */
  }
  100% {
    transform: scale(1);
  }
`;




const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: 0px;
    margin-left: auto;
    a{
        display: flex;
        align-items: center;
        padding: 0 0px;
        
        img{
            height: 50px;
            min-width: 50px;
            width: 50px;
            border-radius: 50%;
            
            margin-left: 10px;

            &:hover{
                animation: ${zoomIn} 3s ease-in-out infinite;
                border: 2px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            }
        }
        
    }
    
    span {
        color: rgb(249, 249, 249);
        font-size: 16px;
        font-weight: bolder;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 10px;
        white-space: nowrap;
        position: relative;
        margin-left: 10px;

        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
          visibility: hidden;
          width: auto;
        }
      
        &:hover:before {
            color: rgb(0, 0, 0);
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            
        }
     }
`;



export default Header;