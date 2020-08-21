import { connect } from 'react-redux';

import HomeBoardModalSearchBookIsbn from 'src/components/HomeBoard/ModalsIsbn/ModalSearchBookIsbn';

import { changeInputIsbn, submitFormIsbn, closedModalSearchIsbn } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputIsbnValue: state.isbnForm.isbn,
    showModalSearch: state.isbnForm.showModalSearch,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (value) => {
    const action = changeInputIsbn(value);
    dispatch(action);
  },
  onSubmit: () => {
    const action = submitFormIsbn();
    dispatch(action);
  },
  closedModalSearch: () => {
    dispatch(closedModalSearchIsbn());
  },
});

const HomeBoardModalSearchBookIsbnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeBoardModalSearchBookIsbn);

export default HomeBoardModalSearchBookIsbnContainer;
