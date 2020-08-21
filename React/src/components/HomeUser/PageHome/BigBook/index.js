import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/HomeUser/PageHome/BigBook/bigBook.scss';

const BigBook = ({ showBigBook, title, description, cover, author, showBook }) => {
  const handleClick = (evt) => {
    evt.preventDefault();

    const currentBook = { title, author, description, cover };
    showBook(currentBook);
  };
  return (
    <div
      className="cardBigBook"
      style={{ display: showBigBook }}
    >
      <img
        className="cardBigBook-image"
        src={cover}
        onClick={handleClick}
        alt=""
      />
      <div className="cardBigBook-leftPart" />
      <div className="cardBigBook-rightPart">
        <h2 className="cardBigBook-rightPart-title">{title}</h2>
        <h2 className="cardBigBook-rightPart-author">{author}</h2>
        <p className="cardBigBook-rightPart-descriptif">{description}</p>
      </div>
    </div>
  );
};

BigBook.propTypes = {
  showBigBook: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BigBook;
