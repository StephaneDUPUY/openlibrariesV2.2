import React from 'react';
import {Row,Col, Card, Button } from 'react-bootstrap';


import 'src/components/HomeUser/Main/LatestBooksAdded/latestBooksAdded.scss';

const LatestBooksAdded = () => {
  return (
<Row >
  <Col lg={3} md={6} sm={12} > 
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      <Card.Body>
        <Card.Title>The Google story</Card.Title>
        <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
      </Card.Body>
          <Button variant="outline-secondary" size="sm">Réservez le !</Button>    
    </Card>
  </Col>
  <Col lg={3} md={6} sm={12} > 
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      <Card.Body>
        <Card.Title>The Google story</Card.Title>
        <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
      </Card.Body>
          <Button variant="outline-secondary" size="sm">Réservez le !</Button>    
    </Card>
  </Col>
  <Col lg={3} md={6} sm={12} > 
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      <Card.Body>
        <Card.Title>The Google story</Card.Title>
        <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
      </Card.Body>
          <Button variant="outline-secondary" size="sm">Réservez le !</Button>    
    </Card>
  </Col>
  <Col lg={3} md={6} sm={12} > 
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
      <Card.Body>
        <Card.Title>The Google story</Card.Title>
        <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
      </Card.Body>
          <Button variant="outline-secondary" size="sm">Réservez le !</Button>    
    </Card>
  </Col>
  
</Row>
  );
};

export default LatestBooksAdded;
