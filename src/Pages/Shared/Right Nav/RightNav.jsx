import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div className='sticky-top'>
            <h4>Login With</h4>
            <Button className='w-100' variant="outline-primary"><FaGoogle className='mx-3' />Login with Google</Button>
            <br />
            <br />
            <Button className='w-100' variant="outline-secondary"><FaGithub className='mx-3' />Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='mx-2' style={{ color: 'blue' }}></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='mx-2' style={{ color: '#76d9ff' }}></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='mx-2' style={{ color: '#bc2a8d' }}></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <div className='text-center mx-4' style={{ position: 'absolute', color: 'white' }}>

                    <h1 >Create an <br /> Amazing <br /> Newspaper  </h1>
                    <p>Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.</p>
               <Button className='bg-danger w-50 h-50 rounded'>Learn More</Button>
                </div>

                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;