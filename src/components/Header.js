import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../Store/userSlice';
import translation from '../langugae/translation';
import { useLanguage } from '../utils/LanguageContext';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {


    const dispatch = useDispatch();

    const user = useSelector((state) => state.user)

    const handleLogout = () => {
        // Perform logout logic, e.g., remove token from local storage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(removeUser());

    };
    const { language, changeLanguage } = useLanguage();
    return (
        <>
            <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">{translation[language]['FARMER']}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="m-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/">{translation[language]['HOME']}</Link>
                            </Nav.Link>
                            <Nav.Link className="m-2">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/mandi">{translation[language]['MANDI_PRICE']}</Link>
                            </Nav.Link>
                            <Nav.Link className="m-2" href="#pricing">{translation[language]['ABOUT_US']}</Nav.Link>
                            {user ? (
                                <Nav.Link className="m-2">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login" onClick={handleLogout}>{translation[language]['LOGOUT']}</Link>
                                </Nav.Link>
                            ) : (
                                <Nav.Link className="m-2">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">{translation[language]['LOGIN']}</Link>
                                </Nav.Link>
                            )}
                            <Dropdown className="m-2">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    LANG
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => changeLanguage('en')}>{translation[language]['ENGLISH']}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage('hi')}>{translation[language]['HINDI']}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage('pb')}>{translation[language]['PUNJABI']}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;