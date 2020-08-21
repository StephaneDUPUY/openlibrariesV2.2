import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import { IconContext } from 'react-icons';
import { FaBook } from 'react-icons/fa';

import './ResultOwnersAfterSearchByTitle.scss';

const ResultOwnersAfterSearchByTitle = ({ showResultOwnersAfterSearchByTitle, bookResultSearch, openModalValidate }) => {

  let bookId = 0;

  if (bookResultSearch) {
    bookId = bookResultSearch.bookInfos.id;
  }

  const onClick = (evt) => {
    const idOwner = evt.target.value;
    openModalValidate(idOwner, bookId);
  };

  return (
    <div className="cardResultOwnerBooks" style={{ display: showResultOwnersAfterSearchByTitle }}>

      {bookResultSearch && (
        <>
          <Row>
            <Col lg={12} className="d-flex justify-content-center mb-2  cardResultOwnerBooks-title">
              <h3>cliquer sur le
                <IconContext.Provider value={{ color: '', className: 'cardResultOwnerBooks-iconTitle' }}>
                  <FaBook />
                </IconContext.Provider>
                du prêteur pour valider la réservation
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center mt-1">
              <ul className="cardResultOwnerBooks-ul">
                <li
                  value={bookResultSearch.datasUsers[0].id}
                  className="mb-3 cardResultOwnerBooks-li"
                  onClick={onClick}
                >{bookResultSearch.datasUsers[0].firstname}
                  {bookResultSearch.datasUsers[0].name }
                  <IconContext.Provider value={{ color: '', className: 'cardResultOwnerBooks-icon' }}>
                    <FaBook />
                  </IconContext.Provider>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

ResultOwnersAfterSearchByTitle.propTypes = {
  showResultOwnersAfterSearchByTitle: PropTypes.string.isRequired,
  bookResultSearch: PropTypes.string,
  openModalValidate: PropTypes.func.isRequired,
};

ResultOwnersAfterSearchByTitle.defaultProps = {
  bookResultSearch: '',
};
export default ResultOwnersAfterSearchByTitle;
