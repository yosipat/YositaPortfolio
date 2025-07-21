import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

function MyNavBar() {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary" fixed="top" sticky='top' >
        <Container>
          <Navbar.Brand href="#"><small>Yosita J.</small></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" bg="primary" className='justify-content-center'>
            <Nav>
              <Nav.Link href="#aboutMe"><small>About Me</small></Nav.Link>
              <Nav.Link href="#skill"><small>Skills</small></Nav.Link>
              <Nav.Link href="#exp"><small>Work Experience</small></Nav.Link>
              <Nav.Link href="#edu"><small>Education</small></Nav.Link>
              <Nav.Link href="#project"><small>Projects</small></Nav.Link>
              <Nav.Link href="#contact"><small>Contact me</small></Nav.Link>
              {/* <Nav.Link href="#link">Certificates</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavBar