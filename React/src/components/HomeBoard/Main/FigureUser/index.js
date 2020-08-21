import React from 'react';
import { Figure } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const FigureUser = ({ usersBoard }) => {
  return (
    <>
      {usersBoard.map((user) => (
        <Figure key={user.id}>
          <FontAwesomeIcon className="figure-icon" icon={faUserCircle} size="8x" />
          <Figure.Caption className="figure-text">
            {user.firstname} {user.lastname}
          </Figure.Caption>
        </Figure>
      ))}
    </>
  );
};

export default FigureUser;
