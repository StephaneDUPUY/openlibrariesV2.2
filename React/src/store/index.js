import { createStore, applyMiddleware, compose } from 'redux';

// import middleware
import loginMiddleware from 'src/store/middleware/loginMiddleware';
import isbnMiddleware from './middleware/isbnMiddleware';
import searchBookMiddleware from './middleware/searchBookMiddleware';
import getAllDatasMiddleware from './middleware/getAllDatasMiddleware';
import addUserMiddleware from './middleware/addUserMiddleware';
import sendIdBookingMiddleware from './middleware/sendIdBookingMiddleware';
import getBooksByCategoryMiddleware from './middleware/getBooksByCategoryMiddleware';


// recuder combined others imported
import reducer from './reducer';

// eslint-disable-next-line no-underscore-dangle
// https://github.com/zalmoxisus/redux-devtools-extension
// code complexe : plomberie pour redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhancement for store
const enhancers = composeEnhancers(
  applyMiddleware(
    // add middleware
    // list of middleware to use in order chosen
    // order of declarations set order of middlewares pass
    loginMiddleware,
    getAllDatasMiddleware,
    isbnMiddleware,
    searchBookMiddleware,
    addUserMiddleware,
    sendIdBookingMiddleware,
    getBooksByCategoryMiddleware,
  ),
);

// create store
const store = createStore(
  reducer,
  enhancers,
);

export default store;
