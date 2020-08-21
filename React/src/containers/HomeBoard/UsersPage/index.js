import { connect } from 'react-redux';

import UsersTable from 'src/components/HomeBoard/UsersPage/usersTable';
// import { setUsers } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    usersBoard: state.user.usersBoard,
  };
};

const mapDispatchToProps = () => ({});

const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersTable);

export default UsersPageContainer;
