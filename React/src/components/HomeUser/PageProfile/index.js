import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './page-profile.scss';

import NavMobile from 'src/components/HomeUser/PageHome/NavMobile';
import NavDesktop from 'src/components/HomeUser/PageHome/NavDesktop';
import UserEmprunt from 'src/containers/HomeUser/PageProfile/userEmprunt';
import UserPret from 'src/containers/HomeUser/PageProfile/userPret';
import FormUserInfo from 'src/containers/HomeUser/PageProfile/formUserInfo';
import NavUserBooking from './navUserBooking';
import UserProfile from './profilePic';

class PageProfile extends React.Component {
  state = {
    currentView: 'emprunt',
  }

  changeView = (newView) => {
    // Modification de la valeur de la vue courrante
    this.setState({
      currentView: newView,
    });
  }

  render() {
    const { currentView } = this.state;
    return (
      <div className="homeUser">
        <Container fluid>
          {/* Nav displayed only on mobile */}
          <Row>
            <NavMobile />
          </Row>
          {/*  Sidebar disappear on mobile */}
          <Row>
            {/* --------- Left sideBar  ------------------------------ */}
            <Col className="sideBarUser d-none d-md-block" lg={2} md={2}>
              <NavDesktop />
            </Col>
            {/* -------------------- Left part -----------------------  */}
            <Col className="mainProfile" lg={10} md={10}>
              {/* --------------------- Search bar ---------------------- */}
              <Row>
                <Col lg={12}>
                  <h2 className="text-center mb-5">Informations personnelles</h2>
                </Col>
              </Row>
              {/* -----------------------Book and map -------------------------------- */}
              <Row>
                <Col lg={3}>
                  <UserProfile />
                </Col>
                <Col lg={5}>
                  <FormUserInfo />
                </Col>
              </Row>
              {/* ---------------------  navBarCategory ---------------------------- */}
              <Row>
                <Col lg={12} className="my-5">
                  <NavUserBooking
                    onChangeView={this.changeView}
                  />
                </Col>
              </Row>
              {/* ---------------------- All the books ---------------------------*/}
              <Row>
                <Col lg={12} className="mb-5">
                  {currentView === 'emprunt' && (
                    <UserEmprunt />
                  )}
                  {currentView !== 'emprunt' && (
                    <UserPret />
                  )}
                </Col>
              </Row>
            </Col>
            {/* ------------------------ End of right part  ------------------- */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageProfile;
