import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import './header.scss';
import LoginModal from './loginModal';

class homeHeader extends React.Component {
  state = {
    currentScrollHeight: 0,
    show: false,
    currentView: 'login',
  }

  componentDidMount() {
    const { currentScrollHeight } = this.state;
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (currentScrollHeight !== newScrollHeight) {
        this.setState({
          currentScrollHeight: newScrollHeight,
        });
      }
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
      currentView: 'login',
    });
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  }

  changeView = (newView) => {
    // Modify value of current vue
    this.setState({
      currentView: newView,
    });
  }

  render() {
    const { currentScrollHeight, show, currentView } = this.state;
    const opacity = Math.min(100 / currentScrollHeight, 1);

    return (
      <Container className="header-container">
        <Row className="header-row h-100">
          <Col style={{ opacity }} lg className="header-column align-self-end">
            <div className="header-column-title">
              <h1 className="header-title">Open-Libraries</h1>
              <h2>Pour un monde ouvert, ouvrons nos bibliothèques</h2>
              <Button className="start-button" size="lg" onClick={this.handleShow}>
                Let's Start
              </Button>
            </div>
          </Col>
          <Col style={{ opacity }} lg className="header-presentation align-self-end">
            <p>
            Outil web de gestion en ligne de ressources documentaires, Open Libraries offre aux écoles, entreprises, associations et Tiers-Lieux, un système sûr et efficace de suivi et d'administration des emprunts.<br />
            Créez votre communauté, prêtez et empruntez des livres en toute confiance.
            </p>
          </Col>
          <Row className="w-100 justify-content-center align-self-end row-scroll">
            <Col style={{ opacity }} className="w-100 col-4 align-self-end">
              <div className="mouse">
                <p className="scroll">scroll</p>
              </div>
            </Col>
          </Row>
        </Row>
        <LoginModal
          show={show}
          onHide={this.handleClose}
          view={currentView}
          onChangeView={this.changeView}
        />
      </Container>
    );
  }
}

export default homeHeader;
