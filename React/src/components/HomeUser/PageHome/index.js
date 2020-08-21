import React from 'react';
import 'src/components/HomeUser/homeUser.scss';

import { Container, Row, Col } from 'react-bootstrap';

import NavMobile from 'src/components/HomeUser/PageHome/NavMobile';
import Search from 'src/containers/HomeUser/Search';
import NavDesktop from 'src/containers/HomeUser/NavDesktop';
import Books from 'src/containers/HomeUser/Books';
import Map from 'src/components/HomeUser/PageHome/Map';
import NavCategory from 'src/containers/HomeUser/NavCategory';
import AllBooks from 'src/components/HomeUser/PageHome/AllBooks';

import ModalSearchBookIsbn from 'src/containers/Modals/ModalSearchBookIsbn';
import ModalResponseBookIsbn from 'src/containers/Modals/ResponseIsbn';
import ModalSuccessAddBookIsbn from 'src/containers/Modals/ModalSuccessAddBookIsbn';
import ModalRecapReserveBook from 'src/containers/Modals/ModalRecapReserveBook';

const PageHome = () => {
  return (
    // all components used to display HTML view
    <Container fluid>
      {/* Nav display on mobile only */}
      <Row>
        <NavMobile />
      </Row>
      {/* sidebar disappear on mobile */}
      <Row>
        {/* --------- Left sideBar ------------------------------ */}
        <Col className="sideBarUser d-none d-md-block" lg={2} md={2}>
          <NavDesktop />
        </Col>
        {/* -------------------- Right part -----------------------  */}
        <Col className="mainUser" lg={10} md={10}>
          {/* --------------------- Search bar ---------------------- */}
          <Row>
            <Col lg={12}>
              <Search />
            </Col>
          </Row>
          {/* -----------------------Books and map ------------------ */}
          <Row>
            <Col lg={7}>
              <Books />
            </Col>
            <Col lg={5}>
              <Map />
            </Col>
          </Row>
          {/* ---------------------  navBarCategory ------------------ */}
          <Row>
            <Col lg={12}>
              <NavCategory />
            </Col>
          </Row>
          {/* ----------------------    All the books ------------------*/}
          <Row>
            <Col lg={12} className="mt-2">
              <AllBooks />
            </Col>
          </Row>
        </Col>
        {/* ------------------------ End of right part ---------------- */}
      </Row>
      {/* ------------- response modal after ISBN book search ---*/}
      <ModalSearchBookIsbn />
      <ModalResponseBookIsbn />
      <ModalSuccessAddBookIsbn />
      <ModalRecapReserveBook />
    </Container>
  );
};

export default PageHome;
