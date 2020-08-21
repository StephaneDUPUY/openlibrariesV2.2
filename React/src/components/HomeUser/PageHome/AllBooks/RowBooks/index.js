import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import Book from 'src/containers/HomeUser/AllBooks/RowBooks/Book';

const RowBooks = ({ books }) => {
  const settings = {
    className: 'center',
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 1,
  };

  return (
    <Slider {...settings}>
      {books.map((book) => (
        <Book
          {...book}
          key={book.id}
        />
      ))}
    </Slider>
  );
};

RowBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default RowBooks;
