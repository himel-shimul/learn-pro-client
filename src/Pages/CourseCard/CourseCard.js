import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {_id, title, image_url, author,price, rating} = course;
    console.log(course);
    return (
        <div>
            <Link style={{ color: 'inherit', textDecoration: 'none'}} to={`/courses/${_id}`}><Card className="mb-5">
        <Card.Body>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
            <Card.Title>{title}</Card.Title>
            <p>Created by: <span>{author.name}</span></p>
            <p>Rating: {rating.number}</p>
            <h4>$ {price}</h4>
            </Card.Text>
        </Card.Body>
        </Card></Link>
        </div>
    );
};

export default CourseCard;