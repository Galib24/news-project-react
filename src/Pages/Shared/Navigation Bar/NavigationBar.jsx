import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext);


    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                           
                                <Nav.Link to="/">Home</Nav.Link>
                           
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&  <FaUserCircle style={{ fontSize: '2rem' }}>
                            </FaUserCircle> }

                            {user ?
                                <Button onClick={handleLogout}
                                variant="dark">Logout</Button> :
                                <Link to='/Info/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;