import React from 'react';
import PropTypes from 'prop-types';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './resultSearchBook.scss';

const ResultSearchBook = ({ showResultBook, bookSearch, closeOneBook }) => {

  const onClick = () => {
    closeOneBook();
  };

  return (

    <div className="cardResultSearch" style={{ display: showResultBook }}>
      {bookSearch && (
        <>
          <img
            className="cardResultSearch-image"
            src={bookSearch.bookInfos.cover}
            alt=""
          />
          <div className="cardResultSearch-leftPart" />
          <div className="cardResultSearch-rightPart">
            <div className="d-flex justify-content-end mr-2">
              <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={onClick} className="cardResultSearch-close" />
            </div>
            <div>
              <h2 className="cardResultSearch-rightPart-title">{bookSearch.bookInfos.title}</h2>
              <h2 className="cardResultSearch-rightPart-author">{bookSearch.bookInfos.author}</h2>
              <h3 className="cardResultSearch-rightPart-date">{bookSearch.bookInfos.publicationDate}</h3>
              <p className="cardResultSearch-rightPart-description">{bookSearch.bookInfos.description}</p>
            </div>
          </div>
        </>
      ) }
    </div>
  );
};

ResultSearchBook.propTypes = {
  showResultBook: PropTypes.string.isRequired,
  closeOneBook: PropTypes.func.isRequired,
  bookSearch: PropTypes.object,
};

ResultSearchBook.defaultProps = {
  bookSearch: '',
};

export default ResultSearchBook;
