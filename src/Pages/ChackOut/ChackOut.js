import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ChackOut = () => {
    const course = useLoaderData();
    const {title, details, image_url, author, rating, price} = course;
    const ref = React.createRef();

    console.log(course);
    
    return (
        <div  style={{width: '100%', height: '100vh', marginTop:'50px'}}>
            <Card ref={ref} style={{ width: '25rem', margin:'auto' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <h4>{title}</h4>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>price: $ {price}</ListGroup.Item>
        <ListGroup.Item>VAT: $0.00</ListGroup.Item>
        <ListGroup.Item>Charge: $0.00</ListGroup.Item>
        <ListGroup.Item>Total: $ {price}</ListGroup.Item>
        </ListGroup>
        
      <Card.Body>
      <Pdf targetRef={ref} filename="code-example.pdf">
      {({ toPdf }) => <Button onClick={toPdf} variant="info">Enroll Now</Button>}
      </Pdf>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ChackOut;