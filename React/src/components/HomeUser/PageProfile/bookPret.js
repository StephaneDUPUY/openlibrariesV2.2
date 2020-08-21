import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import 'src/components/HomeUser/PageHome/Book/book.scss';

const BookPret = ({
  id,
  title,
  author,
  description,
  publicationDate,
  cover,
  dateOfDisposal,
  onClick,
}) => {
  const date = publicationDate.substring(0, 4);
  const handleClick = (evt) => {
    evt.preventDefault();

    onClick(id);
  };
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
          {dateOfDisposal === null && (
            <Button type="submit" variant="primary" size="sm" onClick={handleClick}>
            le livre a été rendu
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

BookPret.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  dateOfDisposal: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookPret;
