import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            {
                categoryCourses.map(course => <Container>
                    <Row>
                        <Col xs={6} md={4}><CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard></Col>
                    </Row>
                </Container>)
            }
        </div>
    );
};

export default Category;