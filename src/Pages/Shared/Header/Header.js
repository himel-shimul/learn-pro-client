import React, {useContext} from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaGoogle} from 'react-icons/fa';
import LeftSide from '../Leftside/LeftSide';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/Logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const Header = () => {
  const {providerLogin, user, logOut, githubLogin} = useContext(AuthContext);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () =>{
    githubLogin(githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    })
  }
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
        
            <Navbar collapseOnSelect className='mb-4 ' expand="lg" bg="light" variant="light" >
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
            <NavLink title='courses' to="/courses" style={{ color: 'gray', paddingRight: '7px', margin: 'auto', textDecoration: 'none'}}>Courses</NavLink>
            <NavLink title='blog' to="/blog" style={{ color: 'gray',margin: 'auto', textDecoration: 'none'}}>Blog</NavLink>
            
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
                  <Button variant="outline-dark" onClick={handleGithubSignIn}><FaGithub/> Github Signin </Button>
                </>
                
              }
            </>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;