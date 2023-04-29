import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center'>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque temporibus rem aspernatur nemo debitis ipsum. <br /> Quos aut id iste iusto fugit, sit assumenda eligendi. Aut assumenda ullam dolorum quia ut?</p>
       <p>Go back to <Link to='/Info/register' >Register</Link> </p>
        </div>
    );
};

export default Terms;