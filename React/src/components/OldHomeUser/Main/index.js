import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// css
import 'src/components/HomeUser/Main/main.scss';

//components
import Search from 'src/components/HomeUser/Main/Search';
import Map from 'src/components/HomeUser/Main/Map';
import LatestBooksAdded from 'src/components/HomeUser/Main/LatestBooksAdded';
import RowBooks from 'src/components/HomeUser/Main/RowBooks';

const Main = () => {
  return (
    <>
      <Row>
        <Col>
        {/* Since nav fixed, it mask bottom of main   */}
        {/* This div created to solve tempory this issue */}
          <div className="space"></div>
        </Col>
      </Row>
      <Row className="mainHomeUser mt-2">
        <Col lg={7}>
          <Row>
            <Col lg={12} >
              <Search />
            </Col>
            <Col lg={12} >
              <Row >
                <Col lg={12} >Les derniers livres ajoutés</Col>
              </Row>
              <LatestBooksAdded />
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <Row>
            <Map />
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <h1>Policier</h1>
          <RowBooks />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <h1>Histoire</h1>
          <RowBooks />
        </Col>
      </Row>
      <h1>Amour</h1>
      <Row className="mt-4">
        <Col lg={12}>
          <RowBooks />
        </Col>
      </Row>
    </>
  );
};

export default Main;
