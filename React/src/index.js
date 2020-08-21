// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import : local
// base styles
import 'src/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// root component
import App from 'src/containers/App';
import store from 'src/store';

// == Render
// 1. root component (one content whole of application)
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// 2. DOM target (where struture start to live in DOM)
const target = document.getElementById('root');

// render React => DOM
render(rootComponent, target);
