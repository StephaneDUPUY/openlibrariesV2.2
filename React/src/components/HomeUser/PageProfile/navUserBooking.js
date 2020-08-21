import React from 'react';
import 'src/components/HomeUser/PageHome/NavCategory/navCategory.scss';
import './page-profile.scss';

import { Nav, Col } from 'react-bootstrap';


class NavUserBooking extends React.Component {
  state = {
    activeSection: 'emprunt-active',
  }

  componentDidMount() {
    this.setState({
      activeSection: 'emprunt-active',
    });
  }

  emprunt = () => {
    this.setState({
      activeSection: 'emprunt-active',
    });
  }

  pret = () => {
    this.setState({
      activeSection: 'pret-active',
    });
  }

  render() {
    const { onChangeView } = this.props;
    const { activeSection } = this.state;
    return (
      <Nav className="navCategory mt-1 justify-content-center">
        <Col lg={3}>
          <Nav.Item>
            <Nav.Link onClick={() => { onChangeView('emprunt'); this.emprunt(); }} className={`navItems text-center ${activeSection === 'emprunt-active' ? 'active' : ''}`}>Mes emprunts</Nav.Link>
          </Nav.Item>
        </Col>
        <Col lg={3}>
          <Nav.Item>
            <Nav.Link onClick={() => { onChangeView('pret'); this.pret(); }} className={`navItems text-center ${activeSection === 'pret-active' ? 'active' : ''}`}>Mes prêts</Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    );
  }
}

export default NavUserBooking;
