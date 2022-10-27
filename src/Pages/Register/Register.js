import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);


        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setError('');
            form.reset('');
            handleUpdateUserProfile(name, photoURL);
        })
        .catch(e => {
            console.error(e)
            setError(e.message);
        })
    }
    const handleUpdateUserProfile = (name, photoURL) =>{
      
        const profile = {
          displayName: name,
          photoURL: photoURL
  
        }
        
        updateUserProfile(profile)
          .then({})
          .catch(error => console.error(error))
      }


    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Your name" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Email Address" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={handleAccepted} 
        label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
      </Form.Group> */}
      <Button variant="primary" type="submit" >
        Register
      </Button>
      <Form.Text className="ms-2 text-danger">
          {error}
        </Form.Text>
        <Form.Text className="ms-2">
          <p>Already Sign in? Let's<Link to={'/login'}>Log in</Link></p>
        </Form.Text>
    </Form>
    );
};

export default Register;