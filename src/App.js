import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import MyNavBar from './components/NavBar';
import MyPageHeader from './components/PageHeader';
import MyAboutMe from './components/AboutMe';
import MySkill from './components/Skill';
import MyExperience from './components/Experience';
import MyEducation from './components/Education';
import MyProject from './components/Project';
import MyCertificate from './components/Certificate';
import MyFooter from './components/Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>   <div>
    <>
      <MyNavBar />
      <div className="wrapper text-light"  style={{ backgroundColor: "#000000" }}>
        <Container>
          <MyPageHeader />
          <MyAboutMe />
          <MySkill />
          <MyExperience />
          <MyEducation />
          <MyProject />
          {/* <MyCertificate/> */}
          
        </Container>
        <MyFooter />
      </div>

    </>
    // <Button variant="danger">Click Me!</Button>

    //   </header>

    // </div>
  );
}

export default App;
