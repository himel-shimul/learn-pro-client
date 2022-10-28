import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div style={{width: '100%', height: '100vh', marginTop:'50px'}}>
            <Card style={{ width: '25rem', margin:'auto' }}>
      <Card.Img style={{ width: '120px', height: '120px', borderRadius:'50%',marginTop:'-30px', margin:' auto' }} variant="top" src={user?.photoURL} />
      <Card.Body>
        <Card.Title>{user?.displayName}</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {user?.email ? user?.email : "not Found"}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default Profile;