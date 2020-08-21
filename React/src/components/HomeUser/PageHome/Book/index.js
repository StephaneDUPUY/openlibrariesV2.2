import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/HomeUser/PageHome/Book/book.scss';

const Book = ({
  id,
  title,
  author,
  description,
  showBook,
  publicationDate,
  cover,
  openResultOwnerAfterClickInBook,
}) => {
  const date = publicationDate.substring(0, 4);

  const onClick = (evt) => {
    evt.preventDefault();

    const currentBook = {
      id,
      title,
      author,
      description,
      date,
      cover,
    };
    showBook(currentBook);
    openResultOwnerAfterClickInBook();
  };

  return (
    <div>
      <div className="cardListBook">
        <img
          className="imageBook"
          src={cover}
          alt=""
          onClick={onClick}
        />
        <div className="cardListBook-rightPart">
          <h2 className="cardListBook-rightPart-title">{title}</h2>
          <h2 className="cardListBook-rightPart-author">par {author}</h2>
          <h2 className="cardListBook-rightPart-author">{date}</h2>
          <p className="cardListBook-rightPart-synopsis">{description}</p>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showBook: PropTypes.func.isRequired,
  publicationDate: PropTypes.string.isRequired,
  cover: PropTypes.string,
  openResultOwnerAfterClickInBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  cover: undefined,
};


export default Book;