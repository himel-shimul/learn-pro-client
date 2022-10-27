import React, {useContext} from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaGoogle} from 'react-icons/fa';
import LeftSide from '../Leftside/LeftSide';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/Logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Header = () => {
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(r =>{
      const user = r.user;
      console.log(user);
    })
    .catch(e =>console.error(e))
  }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to="/">
        <img
              src={logo}
              width="100%"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link title='courses' href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <NavLink to={'/register'}>register</NavLink>
          </Nav>
          <Nav>
            <>
              {
                
                
              }
            </>
            <Link to="/profile">
              {
              }
            </Link>
            <Button onClick={handleGoogleSignIn} variant="outline-info"><FaGoogle/> Google Signin </Button>
            <Button variant="outline-dark"><FaGithub/> Github Signin </Button>
          </Nav>
          <div className='d-lg-none'>
            <LeftSide></LeftSide>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;