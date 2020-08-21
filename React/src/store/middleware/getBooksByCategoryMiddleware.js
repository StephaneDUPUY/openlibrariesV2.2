import axios from 'axios';

import { GET_THE_CATEGORY_ASKED, bookReceiveByCategory} from 'src/store/actions';

const getBooksByCategoryMiddleware = (store) => (next) => (action) => {
  // Declaration of constants for category and token
  const category = store.getState().book.categoryAsked;
  const token = window.localStorage.getItem('token');


  switch (action.type) {
    case GET_THE_CATEGORY_ASKED:
      axios
        // connexion to Symfony on dedicated route and property asked
        .get(`http://localhost:8000/api/book/list/${category}`, {
          headers: {
            //send token to Symfony
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { data } = response;
          // Store answer to be used in view
          store.dispatch(bookReceiveByCategory(data));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    default:
      // in default action pass
      next(action);
  }
};

export default getBooksByCategoryMiddleware;
