import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ChackOut from '../ChackOut/ChackOut';


const CourseDetails = ({children}) => {
    const course = useLoaderData();
    const {title, details, image_url, author, rating, price, _id} = course;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>Created by: <span>{author.name}</span></p>
            <p>Rating: {rating.number}</p>
            <h4>$ {price}</h4>
            <Card.Text>{details}</Card.Text>
            
            <Link to={`/chackout/${_id}`}><Button variant="success">Get premium access</Button></Link>
        </Card.Body>
        </Card>
    );
};

export default CourseDetails;