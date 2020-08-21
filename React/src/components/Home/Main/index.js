import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './main.scss';

const Main = () => (
  <Container className="main-container">
    <Row>
      <Col>
        <h2 className="about">Comment ça marche ?</h2>
        <p className="about-text">
        Écoles, entreprises, associations, créez votre bibliothèque en ligne,
        ajoutez vos élèves, salariés, adhérents puis partagez vos livres entre vous et votre communauté.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="text-center" xs={8} md={4} lg={3}>
        <Image className="image-step" src="https://image.flaticon.com/icons/svg/2232/2232647.svg" />
        <p>Inscrivez votre structure, ajoutez vos utilisateurs et vos livres, <span className="text-icon-strong">créez votre communauté de partage !</span></p>
      </Col>
      <Col className="text-center" xs={8} md={4} lg={3}>
        <Image className="image-step" src="https://image.flaticon.com/icons/svg/2232/2232707.svg" />
        <p>Vos utilisateurs reçoivent un <span className="text-icon-strong">lien de connexion</span> au service et à votre bibliothèque.
        Vos livres ne sont disponibles que pour eux, <span className="text-icon-strong">ils peuvent à leur tour partager leurs propres livres</span> aux autres membres de votre communauté.
        </p>
      </Col>
      <Col className="text-center" xs={8} md={4} lg={3}>
        <Image className="image-step" src="https://image.flaticon.com/icons/svg/2232/2232710.svg" />
        <p>Vos utilisateurs peuvent <span className="text-icon-strong">chercher un livre et le trouver au plus près de chez eux</span>.
        Ils le réservent et ont 48 heures pour aller le récupérer.
        </p>
      </Col>
      <Col className="text-center" xs={8} md={4} lg={3}>
        <Image className="image-step" src="https://image.flaticon.com/icons/svg/2232/2232666.svg" />
        <p>Ils peuvent profiter et <span className="text-icon-strong">savourer leur livre pendant un mois !</span></p>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <Link to="/learn-more">
          <Button className="button-learn-more" size="lg">
              En savoir plus
          </Button>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Main;
