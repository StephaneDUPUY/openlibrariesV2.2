import React from 'react';
import PropTypes from 'prop-types';
import { DominoSpinner } from 'react-spinners-kit';

import './loader.scss';

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <DominoSpinner size={800} color="#ea4c4c" loading={loading} />
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
