import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    })
    return (
        <div>
            <h4>All category</h4>
            <div style={{border: '2px solid black',width: '50%',marginTop: '20px', marginBottom: '20px', backgroundColor: '#B2BEB5'}}>
                <h4>National News</h4>
            </div>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary' >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;