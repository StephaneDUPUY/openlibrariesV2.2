import React from 'react';
import Carousel from 'react-multi-carousel';
import { Card, Button } from 'react-bootstrap';

// css
import 'react-multi-carousel/lib/styles.css';
import 'src/components/HomeUser/Main/RowBooks/rowBooks.scss'

const RowBooks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      //  set here quantity of items displayed relating screen size
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
        <Card.Body>
          <Card.Title>The Google story</Card.Title>
          <Card.Subtitle className="text-muted"> David A. Vise</Card.Subtitle>
        </Card.Body>
        <Button variant="outline-secondary" size="sm">Réservez le !</Button>
      </Card>
    </Carousel>
  );
};

export default RowBooks;
