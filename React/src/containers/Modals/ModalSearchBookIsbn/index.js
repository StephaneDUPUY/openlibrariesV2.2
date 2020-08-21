import { connect } from 'react-redux';

import ModalSearchBookIsbn from 'src/components/HomeUser/PageHome/Modals/ModalSearchBookIsbn';

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
    dispatch(submitFormIsbn());
  },
  closedModalSearch: () => {
    dispatch(closedModalSearchIsbn());
  },
});

const ModalSearchBookIsbnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalSearchBookIsbn);

export default ModalSearchBookIsbnContainer;
