import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBoard from 'src/containers/HomeBoard/NavBoard';
import Main from 'src/containers/HomeBoard/Main';
import BooksPage from 'src/containers/HomeBoard/BooksPage';
import SideNav from './SideNav';
import UsersPage from './UsersPage';

const HomeBoard = () => (
    <div id="board-container">
      <Switch>
        <Route exact path="/board">
          <NavBoard />
          <SideNav />
          <Main />
        </Route>
        <Route path="/board/users">
          <UsersPage />
        </Route>
        <Route path="/board/books">
          <BooksPage />
        </Route>
      </Switch>
    </div>
);

export default HomeBoard;
