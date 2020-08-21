// == Import : npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


// == Import : local
import './app.scss';
import 'semantic-ui-css/semantic.min.css';

// import components
import Home from 'src/components/Home';
import HomeUser from 'src/components/HomeUser';
import HomeBoard from 'src/components/HomeBoard';
import TestCard from 'src/components/TestCard';
import Loader from 'src/components/HomeUser/Loader';
import LearnMore from 'src/components/Home/PageLearnMore';

// import components
class App extends React.Component {

  componentDidMount() {

    const { loggedUser } = this.props;

    const tokenLocalStorage = window.localStorage.getItem('token');
    axios.defaults.headers.Authorization = `Bearer ${tokenLocalStorage}`;
    if (tokenLocalStorage) {
      loggedUser();
    }
  }

  render() {
    const { isLogged, typeUser, loading } = this.props;

    return (
      <div id="app">

        {!isLogged && <Redirect to="/" />}
        {/* until loading is true, redirect to loader to be displayed */}
        {loading && <Redirect to="loading" />}
        {/* routes URLs to be redirected depending role user*/}
        {isLogged && typeUser === 'ROLE_USER' && <Redirect to="/home" /> }
        {isLogged && typeUser === 'ROLE_ADMIN' && <Redirect to="/board" />}
        {/* if route matched then related React component loaded */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/learn-more">
          <LearnMore />
        </Route>
        <Route path="/loading">
          <Loader loading={loading} />
        </Route>
        <Route path="/home">
          {typeUser === 'ROLE_USER' && <HomeUser /> }
        </Route>
        <Route path="/board">
          {typeUser === 'ROLE_ADMIN' && <HomeBoard /> }
        </Route>
        <Route path="/test">
          <TestCard />
        </Route>
      </div>
    );
  }
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  typeUser: PropTypes.string.isRequired,
  loggedUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
