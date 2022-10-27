import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);
    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])
    return (
        <div>
            <h4>All category: {categories.length}</h4>
            
            <div>
            {
                categories.map(category => <p className='text-warning'
                     key={category.cat_id}
                     ><Link to={`/category/${category.cat_id}`}>{category.cat_name}</Link></p>)
            }
            </div>
        </div>
    );
};

export default LeftSide;