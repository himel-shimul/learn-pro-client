import React, {useContext} from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaGoogle} from 'react-icons/fa';
import LeftSide from '../Leftside/LeftSide';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/Logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';


const Header = () => {
  const {providerLogin, user, logOut} = useContext(AuthContext);
  
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(r =>{
      const user = r.user;
      console.log(user);
    })
    .catch(e =>console.error(e))
  }
  const handleLogOut = () =>{
    logOut()
    .then( () =>{})
    .catch(error => console.error(error))
  }

    return (
        
            <Navbar collapseOnSelect className='mb-4 ' expand="lg" bg="light" variant="light">
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
            <Nav.Link title='courses' href="#pricing">Blog</Nav.Link>
            <NavLink to={'/register'}>register</NavLink>
            <ToggleSwitch label=" " />
          </Nav>
          <Nav>
            <>
              {
                user?.uid ?
                <div title={user.displayName} className='d-flex align-items-center'>
                  <h6 className='m-auto p-2'>Hello, {user?.displayName}</h6>
                  <Link to="/profile">
            {
              user?.photoURL ? 
              <Image 
              title={user.displayName}
              style={{height: '35px', width: '35px', margin: '4px'}} 
              fluid 
              src={user?.photoURL}>

              </Image> :
              <FaUserAlt></FaUserAlt>
              }
            </Link>
                  <Button  variant="outline-dark" onClick={handleLogOut}>Log Out</Button>
                </div>
                :
                <>
                  <p className='m-auto p-2'><Link  style={{ color: 'inherit', textDecoration: 'none'}} to='/login'>Login</Link></p>
                  <p className='m-auto p-2'><Link  style={{ color: 'inherit', textDecoration: 'none'}} to='/register'>Register</Link></p>
                  <Button className='me-2' onClick={handleGoogleSignIn} variant="outline-info"><FaGoogle/> Google Signin </Button>
                  <Button variant="outline-dark"><FaGithub/> Github Signin </Button>
                </>
                
              }
            </>
            
            
          </Nav>
          {/* <div className='d-lg-none'>
            <LeftSide></LeftSide>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;