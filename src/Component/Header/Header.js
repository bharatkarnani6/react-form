import react, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
export default function Header() {
    const [title, settitle] = useState('Admin');
    let history2 = useHistory();
    useEffect(() => {
        if (localStorage.length != 0) {
            settitle(localStorage.getItem('Profile Name').replace(/['"]+/g, ''));
        }

    }, [])
    const logout = () => {
        localStorage.clear();
        history2.push('/')
    }
    return (
        <div className="">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <NavDropdown title={title} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}