import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'src/components/HomeUser/PageHome/Book/book.scss';

const BookEmprunt = ({
  id,
  title,
  author,
  description,
  publicationDate,
  cover,
}) => {
  const date = publicationDate.substring(0, 4);
  return (
    <>
      <div className="cardListBook">
        <img
          className="imageBook"
          src={cover}
          alt=""
        />
        <div className="cardListBook-rightPart">
          <h2 className="cardListBook-rightPart-title">{title}</h2>
          <h2 className="cardListBook-rightPart-author">{author}</h2>
          <h2 className="cardListBook-rightPart-author">{date}</h2>
          <p className="cardListBook-rightPart-synopsis">{description}</p>
        </div>
      </div>
    </>
  );
};

BookEmprunt.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default BookEmprunt;
