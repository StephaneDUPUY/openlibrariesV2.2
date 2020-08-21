import { connect } from 'react-redux';

import NavCategory from 'src/components/HomeUser/PageHome/NavCategory';

import { setTheCategory, getCategoryAsked } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    listTypes: state.book.listTypes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCategory: (category) => {
    dispatch(setTheCategory(category));
    dispatch(getCategoryAsked());
  },

});

const NavCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavCategory);

export default NavCategoryContainer;
