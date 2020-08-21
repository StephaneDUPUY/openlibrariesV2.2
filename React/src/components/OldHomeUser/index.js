import React from 'react';
import { Container } from 'react-bootstrap';
import './homeUser.scss';

import NavUser from 'src/components/HomeUser/NavUser';
import Main from 'src/components/HomeUser/Main';
import Footer from 'src/components/Footer';

class HomeUser extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="home-user">
        <Container fluid>
          <NavUser />
          <Main />
          <Footer />
        </Container>
      </div>
    );
  }
};

export default HomeUser;
