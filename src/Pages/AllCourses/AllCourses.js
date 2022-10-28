import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import { Col, Container, Row } from 'react-bootstrap';


const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Container>
            <Row>
           {
                allCourses.map(courses => <Col xs={6} md={4}><CourseCard
                    key={courses.id}
                    course={courses}
                ></CourseCard></Col>)
            } 
             </Row>
            </Container>
        </div>
    );
};

export default AllCourses;