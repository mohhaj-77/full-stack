import React from "react";
import {Button, Container,Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './navbar.css';
import LOGO from '../ff/nLOGO.png';
import LOGO1 from '../ff/LOGO1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import linkedin from '../ff/linkedin.png';


const Navbars = ()=>{

return(
   
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#">DOKTOR SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">2.page</Nav.Link>    
            <NavDropdown title="options" id="navbarScrollingDropdown">  
              <NavDropdown.Item href="#action3">option1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              option2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              3.page
            </Nav.Link>
            <NavDropdown title="options2" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                option1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              option2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                else another options             </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <div className="ben">
            <Nav.Link href="#action1"><FontAwesomeIcon icon={faMessage} className="iii"/>*hajjarmohammad8@gmail.com*</Nav.Link>
            <Nav.Link href="#action1"><img src={linkedin} className="linfn"/>Mohammad HAJJAR</Nav.Link>
            </div>

          <Form className="d-flex" id="from">
          <img src={LOGO} title="logo" className="LOGO" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"  className="btn-outline-success"><a href="#">Search</a></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   )

}


export default Navbars;