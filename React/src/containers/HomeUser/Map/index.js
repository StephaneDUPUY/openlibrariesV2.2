import { connect } from 'react-redux';

import Map from 'src/components/HomeUser/PageHome/Map';

// import { openModalSearchIsbn} from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

export default MapContainer;
