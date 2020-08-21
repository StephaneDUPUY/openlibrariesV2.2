import React from 'react';
import PropTypes from 'prop-types';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './oneBook.scss';

const OneBook = ({ showOneBook, closeOneBook, currentBook }) => {

  const onClick = () => {
    closeOneBook();
  };

  return (
    <div
      className="cardOneBook"
      style={{ display: showOneBook }}
    >
      <img
        className="cardOneBook-image"
        src={currentBook.cover}
        alt=""
      />
      <div className="cardOneBook-leftPart" />
      <div className="cardOneBook-rightPart">
        <div className="d-flex justify-content-end mr-2">
          <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={onClick} className="cardOneBook-close"/>
        </div>
        <h2 className="cardOneBook-rightPart-title">{currentBook.title}</h2>
        <h2 className="cardOneBook-rightPart-author">{currentBook.author}</h2>
        <h3 className="cardResultSearch-rightPart-date">{currentBook.date}</h3>
        <p className="">{currentBook.description}</p>
      </div>
    </div>
  );
};

OneBook.propTypes = {
  showOneBook: PropTypes.string.isRequired,
  closeOneBook: PropTypes.func.isRequired,
  currentBook: PropTypes.object.isRequired,
};

export default OneBook;