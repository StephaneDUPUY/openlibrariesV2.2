import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

import 'src/components/HomeUser/PageHome/Books/books.scss';

import BigBook from 'src/containers/HomeUser/BigBook';
import OneBook from 'src/containers/HomeUser/OneBook';
import ResultSearchBook from 'src/containers/HomeUser/ResultSearch';
import ResultOwnersAfterSearchByTitle from 'src/containers/HomeUser/ResultOwnersAfterSearchByTitle';
import ResultOwnerAfterClickOnBook from 'src/containers/HomeUser/ResultOwnerAfterClickOnBook';

const Books = ({ showBigBook, showResultBook, latestBooks }) => {
  return (
    <Row>
      <Col lg={12} className="d-flex justify-content-center">
        {showBigBook === '' && <p className="mainLeftPart-title">Derniers livres ajoutés à la bibliothèque</p>}
        {showResultBook === '' && <p className="mainLeftPart-title">Résultat de votre recherche</p>}
      </Col>
      {latestBooks && (latestBooks.map((book) => (
        <Col lg={12} className="d-flex justify-content-center">
          <BigBook
            {...book}
            key={book.id}
          />
        </Col>
      )))}
      <Col lg={12} className="d-flex justify-content-center">
        <OneBook />
      </Col>
      <Col lg={12} className="d-flex justify-content-center">
        <ResultSearchBook />
      </Col>
      <Col lg={12} className="d-flex justify-content-center">
        <ResultOwnersAfterSearchByTitle />
        <ResultOwnerAfterClickOnBook />
      </Col>
    </Row>
  );
};

Books.propTypes = {
  showBigBook: PropTypes.string.isRequired,
  showResultBook: PropTypes.string.isRequired,
  latestBooks: PropTypes.array,
};

Books.defaultProps = {
  latestBooks: [],
};
export default Books;
