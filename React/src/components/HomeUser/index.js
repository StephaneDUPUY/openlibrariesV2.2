import React from 'react';
import { Route } from 'react-router-dom';
import 'src/components/HomeUser/homeUser.scss';

import PageHome from 'src/components/HomeUser/PageHome';
import PageProfile from 'src/components/HomeUser/PageProfile';

const HomeUser = () => {
  return (
    // router for homeUser part
    <div className="homeUser">
      <Route exact path="/home">
        <PageHome />
      </Route>
      <Route path="/home/user">
        <PageProfile />
      </Route>
      <Route path="/home/emprunts">
        <div>Page emprunt</div>
      </Route>
      <Route path="/home/prets">
        <div>page pret</div>
      </Route>
    </div>
  );
};

export default HomeUser;
