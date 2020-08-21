import React from 'react';
import { Container, Row, Col, Figure, Modal, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './main.scss';
import ModalAddUser from 'src/containers/HomeBoard/Main/ModalAddUser';
import ModalSuccessAddUser from 'src/containers/HomeBoard/Main/ModalSuccessAddUser';
import FigureUser from 'src/containers/HomeBoard/Main/FigureUser';
import FigureBook from 'src/components/HomeBoard/Main/FigureBook';
// import ModalAddBook from './modalAddBook';

import HomeBoardModalSuccessAddBookIsbn from 'src/containers/HomeBoard/ModalsIsbn/ModalSuccessAddBookIsbn';
import HomeBoardModalSearchBookIsbn from 'src/containers/HomeBoard/ModalsIsbn/ModalSearchBookIsbn';
import HomeBoardModalResponseBookIsbn from 'src/containers/HomeBoard/ModalsIsbn/ModalResponseBookIsbn';

class Main extends React.Component {

  handleShowModalAddBookIsbn = () => {
    const { openModalSearchIsbn } = this.props;
    openModalSearchIsbn();
  }

  handleShowAddUser = () => {
    const { showModalAddUser } = this.props;
    showModalAddUser();
  }

  render() {

    return (
      <>
        <Container className="last-users">
          <Row>
            <Col lg={11}>
              <h2 className="last-users-title">Derniers Utilisateurs ajoutés</h2>
            </Col>
            <Col className="last-users-list" lg={11}>
              <Figure>
                <FontAwesomeIcon className="figure-icon" icon={faPlusCircle} size="8x" onClick={this.handleShowAddUser} />
                <Figure.Caption className="figure-text">
                  Ajouter un utilisateur
                </Figure.Caption>
              </Figure>
              <FigureUser />
            </Col>
          </Row>
        </Container>
        <Container className="last-books">
          <Row>
            <Col lg={11}>
              <h2 className="last-books-title">Derniers Livres ajoutés</h2>
            </Col>
            <Col className="no-padding" lg={12}>
              <div className="last-books-list">
                <Card className="last-books-add">
                  <Figure className="add-book">
                    <FontAwesomeIcon className="figure-icon" icon={faPlusCircle} size="5x" onClick={this.handleShowModalAddBookIsbn} />
                    <Figure.Caption className="figure-text">
                      Ajouter un livre
                    </Figure.Caption>
                  </Figure>
                </Card>
                <FigureBook />
              </div>
            </Col>
          </Row>
        </Container>
        <HomeBoardModalSearchBookIsbn />
        <HomeBoardModalResponseBookIsbn />
        <HomeBoardModalSuccessAddBookIsbn />
        <ModalAddUser />
        <ModalSuccessAddUser />
      </>
    );
  }
}

Main.propTypes = {
  openModalSearchIsbn: PropTypes.func.isRequired,
  showModalAddUser: PropTypes.func.isRequired,
};

export default Main;
