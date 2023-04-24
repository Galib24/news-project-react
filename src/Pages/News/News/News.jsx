import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import EditorsInsights from '../Editorsinsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All News in this category <FaArrowRight></FaArrowRight> </Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;