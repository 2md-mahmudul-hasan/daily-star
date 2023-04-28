import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
  const news = useLoaderData()
  const { image_url, title, details, category_id, author } = news;
  console.log(title)
  console.log(news)
  return (
    <Card className='mx-auto' style={{ width: '50rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}> <Button> All news </Button></Link>

      </Card.Body>
    </Card>
  );
};

export default News;