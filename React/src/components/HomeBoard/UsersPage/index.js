import React from 'react';

import UsersTable from 'src/containers/HomeBoard/UsersPage';
import Nav from 'src/containers/HomeBoard/NavBoard';
import SideNav from '../SideNav';

const UsersPage = () => (
  <>
    <SideNav />
    <Nav />
    <UsersTable />
  </>
);

export default UsersPage;
