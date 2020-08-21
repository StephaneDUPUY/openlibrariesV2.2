import React from 'react';
import { Col, Image } from 'react-bootstrap';

const ProfilePic = () => {
  return (
    <Col className="mx-auto" xs={6} md={4} lg={7}>
      <Image src="https://i.imgur.com/Lx8QqMw.png" roundedCircle fluid />
    </Col>
  );
};

export default ProfilePic;
