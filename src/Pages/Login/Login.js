import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
  const {signIn, setLoading, user} = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
    })
    .finally(() =>{
      setLoading(false);
    })
  }
  if(user){
    return <Navigate to={from} state={{from: location}} replace></Navigate>
}
    
    return (
      <Card className="w-50 p-4 m-auto bg-light">
        <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="ms-2 text-danger">
          {error}
        </Form.Text>
      <Form.Text className="ms-2">
        <hr />
          <p>New Here? Let's <Link to={'/register'}>Register</Link></p>
        </Form.Text>
    </Form>
    </Card>
    );
};

export default Login;