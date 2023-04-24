import React from 'react';
import Card from 'react-bootstrap/Card';
const Home = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>this is home</h2>
            <Card className='mt-2'>
                <Card.Img width={100}  variant="top" src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                <Card.Body>
                    <Card.Title>Forest Area</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-3'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1434814677/photo/ukrainian-soldiers-on-military-parade-ukrainian-flag-on-military-uniform-ukraine-troops.jpg?s=2048x2048&w=is&k=20&c=w6SvESHV4GnVWldV-R8AzNiLWgnN98L2BoMuJDzwloI=" />
                <Card.Body>
                    <Card.Title>War Zone</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-3'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1015375320/photo/portrait-of-multiracial-confident-soldiers-in-military-uniform-standing-on-range.jpg?s=2048x2048&w=is&k=20&c=Twxwg83sBKwypMm3bP3IQXQTLB72m7KhPxNjjUTGVOY=" />
                <Card.Body>
                    <Card.Title>US Army Ready!</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
         
        </div>
    );
};

export default Home;