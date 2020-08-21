import { connect } from 'react-redux';

import userEmprunt from 'src/components/HomeUser/PageProfile/userEmprunt';

// import { getBorrowedBooks } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    bookBorrowed: state.book.bookBorrowed,
  };
};

const mapDispatchToProps = () => ({});

const userEmpruntContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(userEmprunt);

export default userEmpruntContainer;
