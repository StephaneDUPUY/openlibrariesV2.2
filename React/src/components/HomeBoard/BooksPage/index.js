import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import Nav from 'src/containers/HomeBoard/NavBoard';
import FigureBooks from 'src/components/HomeBoard/Main/FigureBook';
import SideNav from '../SideNav';

import './books.scss';

const BooksPage = ({ allBooks }) => {

  return (
    <>
      <SideNav />
      <Nav />
      <Container className="last-books">
        <Row>
          <Col className="books-list" lg={12}>
            <div className="last-books-list">
              {allBooks.map((book) => (
                <FigureBooks
                  {...book}
                  key={book.id}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

BooksPage.propTypes = {
  allBooks: PropTypes.array.isRequired,
};

export default BooksPage;
