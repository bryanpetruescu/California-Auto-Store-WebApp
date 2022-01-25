import React from "react";
import { Nav, Container, NavDropdown} from 'react-bootstrap';
import '../App.css';
import './Analytics-nav.css';



function AnalyticsNav(props) {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        
        <Container classname='analyticNav'>
          <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="1" href="#/home">
                Analytic Content 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" title="Item">
              Analytic Content 2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" title='Graph'>
              Analytic Content 3
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Analytic Content</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">More Analytic Content </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Container> 
        
    );
}

export default AnalyticsNav;