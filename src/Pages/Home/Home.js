import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div className='min-vw-100 min-vh-100 d-flex align-items-center' style={{marginTop: '-24px', backgroundColor:'#f1f2f6'}}>
           <div className='w-50 m-5 pb-5'>
           <h1 className='pb-3' style={{fontSize: '60px'}}>Learn New Skills Online with Top Educators</h1>
           <Link to="/courses"><Button style={{fontSize: '25px'}} variant="outline-info">Find Courses</Button></Link>
           </div>
           <div>

           </div>
        </div>
    );
};

export default Home;