import axios from 'axios';

import {
  SUBMIT_FORM_LOGIN,
  setProfilUser,
  // setBooksByCategory,
  isLogged,
  stopLoader,
  displayLoader,
  setUsers,
  getBorrowedBooks,
  getBookILend,
  loginFailureMessage,
  setAllBooks,
  getLatestBook,
  setTypes,
  listBookByOneCategoryInitApp,
  deleteInput,
} from 'src/store/actions';

const loginMiddleware = (store) => (next) => (action) => {
  const datasFormLogin = {
    // JWT wait fo 2 properties named "username" and "password". it's an internal work
    username: store.getState().formLogin.email,
    password: store.getState().formLogin.password,
  };

  // these 3 nested requests allow to do in order:

  switch (action.type) {
    case SUBMIT_FORM_LOGIN:
      // display loader before all requests
    // store.dispatch(displayLoader());
      // first : ask a token to backend by lexik JWT bundle,
      // token stored in local storage
      axios.post('http://localhost:8000/api/login_check', datasFormLogin)
        .then((response1) => {
          const { token } = response1.data;
          window.localStorage.setItem('token', token);

          store.dispatch(displayLoader());

          // Second : ask User object to display Homeuser page or board page
          axios.get('http://localhost:8000/api/user/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response2) => {
              const dataUser = response2.data;
              const roleUser = dataUser.roles[0];
              // store in state User object and role
              // role allow to manage redirections
              store.dispatch(setProfilUser(dataUser, roleUser));

              const { typeUser } = store.getState().user;

              if (typeUser === 'ROLE_USER') {
                // Third: ask list of books to display it in Homeuser page
                axios.get('http://localhost:8000/api/book/latest', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then((responseLatestBook) => {
                    const latestBook = responseLatestBook.data;
                    store.dispatch(getLatestBook(latestBook));
                    // pass state "isLogged" to true to allow some routes access
                    store.dispatch(isLogged());
                    // stop loader
                    store.dispatch(stopLoader());
                    //  write in hard way name of category to display at start
                    //  to be modified
                    axios.get('http://localhost:8000/api/book/list/Design', {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                      .then((response3) => {
                        const listBooksCategoryInitApp = response3.data;
                        // store books list in store
                        store.dispatch(listBookByOneCategoryInitApp(listBooksCategoryInitApp));
                      // pass state "isLogged" to true to allow some routes access
                      store.dispatch(isLogged());
                        // stop loader
                        store.dispatch(stopLoader());

                        axios.get('http://localhost:8000/api/user/booking/borrowed', {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        })
                          .then((bookBorrowed) => {
                            const getBookBorrowed = bookBorrowed.data;
                            // console.log(getBookBorrowed);
                            store.dispatch(getBorrowedBooks(getBookBorrowed));
                            // pass state "isLogged" to true to allow some routes access
                            store.dispatch(isLogged());
                            // stop  loader
                            store.dispatch(stopLoader());

                            axios.get('http://localhost:8000/api/booking/list', {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                              .then((bookLend) => {
                                const getBookLend = bookLend.data;
                                // console.log(getBookLend);
                                store.dispatch(getBookILend(getBookLend));
                                // pass state "isLogged" to true to allow some routes access
                                store.dispatch(isLogged());
                                // stop  loader
                                store.dispatch(stopLoader());

                                axios.get('http://localhost:8000/api/book/list/type', {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                })
                                  .then((response) => {
                                    const types = response.data;
                                    store.dispatch(setTypes(types));
                                  })
                                  .catch((error4) => {
                                    // console.log('liste des types ;', error4);
                                  });
                              })
                              .catch((error3) => {
                                // console.log('booking ;', error3);
                              });
                          })
                          .catch((error3) => {
                            // console.log('book borrowed ;', error3);
                          });
                      })
                      .catch((error3) => {
                        // console.log('liste init category ;', error3);
                      });
                  })
                  .catch((error3) => {
                    // console.log('latest book ;', error3);
                  });
              } else {
                axios.get('http://localhost:8000/api/board/users/list', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then((responseUserBoard) => {
                    const usersBoard = responseUserBoard.data;
                    // console.log(usersBoard);
                    store.dispatch(setUsers(usersBoard));
                    store.dispatch(isLogged());
                    store.dispatch(stopLoader());

                    axios.get('http://localhost:8000/api/book/all', {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                      .then((responseAllBooks) => {
                        const { data } = responseAllBooks;
                        store.dispatch(setAllBooks(data));
                        store.dispatch(isLogged());
                        store.dispatch(stopLoader());
                      })
                      .catch((error5) => {
                        // console.log('Board ,3eme requete, erreur ;', error5);
                      });
                  })
                  .catch((error4) => {
                    // console.log('Board 2eme requete, erreur ;', error4);
                  });
              }
            })
            .catch((error2) => {
              // console.log('2eme requete, erreur ;', error2);
            });
        })
        .catch((error1) => {
          // console.log('1eme requete, erreur ;', error1);
          store.dispatch(loginFailureMessage());
          store.dispatch(deleteInput());
        });

      break;
    default:
      // let action pass by default
      next(action);
  }
};

export default loginMiddleware;
