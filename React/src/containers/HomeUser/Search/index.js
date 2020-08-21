import { connect } from 'react-redux';

import Search from 'src/components/HomeUser/PageHome/Search';

import { changeSearchValue, submitFormSearch, logoutUser } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputSearch: state.searchBook.inputSearchValue,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeValueSearch: (value) => {
    dispatch(changeSearchValue(value));
  },
  onSubmit: () => {
    dispatch(submitFormSearch());
  },
  logout: () => {
    dispatch(logoutUser());
  },
});

const BookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default BookContainer;
