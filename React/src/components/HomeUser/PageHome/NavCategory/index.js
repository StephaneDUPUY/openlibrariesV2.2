import React from 'react';
import PropTypes from 'prop-types';
import 'src/components/HomeUser/PageHome/NavCategory/navCategory.scss';

import { Nav } from 'react-bootstrap';

const NavCategory = ({ listTypes, getCategory }) => {

  const arrayTypes = [];
  listTypes.map((type) => (arrayTypes.push(type.type)));

  const onClick = (evt) => {
    evt.preventDefault();
    getCategory(evt.target.name);
  };


  return (
    <Nav className="navCategory mt-2 ">
      {listTypes && arrayTypes.map((type) => (
        <Nav.Item>
          <Nav.Link
            className="navItems"
            href="/home"
            key={type}
            name={type}
            onClick={onClick}

          >
            {type}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

NavCategory.propTypes = {
  listTypes: PropTypes.array.isRequired,
  getCategory: PropTypes.func.isRequired,
};

export default NavCategory;
