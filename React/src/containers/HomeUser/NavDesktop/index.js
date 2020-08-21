import { connect } from 'react-redux';

import NavDesktop from 'src/components/HomeUser/PageHome/NavDesktop';

import { openModalSearchIsbn} from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModalSearchIsbn: () => {
    dispatch(openModalSearchIsbn());
  },
});

const NavDesktopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavDesktop);

export default NavDesktopContainer;
