import React from 'react';
import PropTypes from 'prop-types';
import 'src/components/HomeUser/PageHome/NavDesktop/navDesktop.scss';

import { Col, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class NavDesktop extends React.Component {

  handleShow = (evt) => {
    const { openModalSearchIsbn } = this.props;
    evt.preventDefault();
    openModalSearchIsbn();
  }

  render() {

    return (
      <>
        <Row>
          {/* ------------  logo  --------------------- */}
          <Link to="/home" className="logo">
            <Col lg={12} className="d-flex justify-content-center ">
              <Row>
                <Col lg={4} className="logo-img">
                  <IconContext.Provider value={{ color: 'white', className: 'logo-icon' }}>
                    <FaBook />
                  </IconContext.Provider>
                </Col>
                <Col lg={8} className="logo-title">
                  <h1 className="logo-part1">
                    Open
                  </h1>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <h1 className="logo-part2">
                Libraries
              </h1>
            </Col>
          </Link>
          {/* --------------------- Fin logo ------------------ */}
          <Col lg={12} className="d-flex justify-content-start">
            <div className="spaceNavUser1"></div>
          </Col>
          <Col lg={12} className="d-flex justify-content-start ">
            <a href="" className="items-navBarUser linkRentBook" onClick={this.handleShow}>Je veux prêter un livre</a>
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <div className="spaceNavUser2"></div>
          </Col>
          <Col>
            <hr className="diviner-line" />
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <Link className="items-navBarUser" to="/home/user">Mon profil</Link>
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <Link className="items-navBarUser" to="/home/user">Mes emprunts</Link>
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <Link className="items-navBarUser" to="/home/user">Mes prêts</Link>
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <div className="spaceNavUser2"></div>
          </Col>
          <Col>
            <hr className="diviner-line" />
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <Link className="items-navBarUser" to="/mentions-legales">Mentions légales</Link>
          </Col>
          <Col lg={12} className="d-flex justify-content-start">
            <Link className="items-navBarUser" to="/contact">Contact</Link>
          </Col>
        </Row>
      </>
    );
  }
}

NavDesktop.propTypes = {
  openModalSearchIsbn: PropTypes.func,
};

export default NavDesktop;
