import React from "react";
import { Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import '../App.css';
import Logo from './logo.png';
import './Menubar.css';

function Menubar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                        />{''}
                    California Auto Store
                </Navbar.Brand>
                <Container className='pages'>
                    <Nav className='m-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Analytics">Analytics</Nav.Link>
                        <Nav.Link href="/List_Parts">List Parts</Nav.Link>
                        <Nav.Link href="/Catalog">Catalog</Nav.Link>
                    </Nav>
                </Container>
            </Container>

            {/* Empty conter is there to force Logo, Navbar title, and navbar elements to align left and profile to the right rather than have to do it in css*/}

            <Container>
                <Nav className="ms-auto">
                <Dropdown>
                        <Dropdown.Toggle variant="dark">
                            Profile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>caasEmail@email.com</Dropdown.Item>
                            <Dropdown.Item>(777)777-7777</Dropdown.Item>
                            <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/Login">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menubar;