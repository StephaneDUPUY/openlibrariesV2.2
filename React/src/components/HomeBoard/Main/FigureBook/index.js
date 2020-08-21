import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const FigureBook = ({ cover }) => (
  <Card className="last-books-card">
    <Card.Img variant="top" src="https://images.isbndb.com/covers/07/05/9781789380705.jpg" />
  </Card>
);

FigureBook.propTypes = {
  cover: PropTypes.string.isRequired,
};

export default FigureBook;
