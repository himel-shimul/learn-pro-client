import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(news);
    const {title, details, image_url, author, rating, price} = course;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>Created by: <span>{author.name}</span></p>
            <p>Rating: {rating.number}</p>
            <h4>$ {price}</h4>
            <Card.Text>{details}</Card.Text>
        </Card.Body>
        </Card>
    );
};

export default CourseDetails;