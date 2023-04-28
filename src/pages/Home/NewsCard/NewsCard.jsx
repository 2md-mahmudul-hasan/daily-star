import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { image_url, title, details, _id, author } = news;
  return (
    <Card>
      <div>
        <Image src={author.img} roundedCircle style={{ 'width': '50px', 'heigth': '50px' }} />
      </div>

      <Card.Header>{title}</Card.Header>
      <Card.Img src={image_url} alt="Card image" />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>read more</Link></>}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default NewsCard;