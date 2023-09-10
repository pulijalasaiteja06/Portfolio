import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from './components/Header';
import Home from './components/Home';
import Footer from "./components/Footer";

import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
    /* App styles */
    display: flex;
    flex-direction: column;
    
`;


export default App;
