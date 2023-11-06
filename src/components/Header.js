import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Farmer</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* <Form className="d-flex ms-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        <Nav className="ms-auto">
                            {/* <NavDropdown title="Courses" id="collapsible-nav-dropdown" className="m-2">
                                <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            {/* <NavDropdown title="Blogs" id="collapsible-nav-dropdown" className="m-2">
                                <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                             <Nav.Link className="m-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link className="m-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/mandi">Mandi Price</Link>
                            </Nav.Link>
                            <Nav.Link className="m-2" href="#pricing">About us</Nav.Link>
                        </Nav>

                        {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;