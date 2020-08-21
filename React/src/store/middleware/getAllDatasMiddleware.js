import axios from 'axios';

import {
  GET_ALL_DATAS,
  setProfilUser,
  // setBooksByCategory,
  isLogged,
  stopLoader,
  displayLoader,
  setUsers,
  getBorrowedBooks,
  getBookILend,
  setAllBooks,
  getLatestBook,
  setTypes,
  listBookByOneCategoryInitApp,
} from 'src/store/actions';

const getAllDatasMiddleware = (store) => (next) => (action) => {

  const token = window.localStorage.getItem('token');

  // this action allow to get all datas present on pages
  //  action reloaded at each refresh in the componentDidMount of application
  switch (action.type) {
    case GET_ALL_DATAS:
      // loader displayed before all requests
      store.dispatch(displayLoader());
      // user objetc asked befor to display HomeUser page or Board page.
      axios.get('http://localhost:8000/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response1) => {

          const dataUser = response1.data;
          const roleUser = dataUser.roles[0];
          // user object and role stored in state. 
          // role allow manage redirections.
          store.dispatch(setProfilUser(dataUser, roleUser));

          const { typeUser } = store.getState().user;

          if (typeUser === 'ROLE_USER') {
            // ask list of books ordered by category to display on Homeuser page
            axios.get('http://localhost:8000/api/book/list', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
              .then((response3) => {
                const listBooksByCategory = response3.data;
                // store list of books in state
                // store.dispatch(setBooksByCategory(listBooksByCategory));
                // pass state "isLogged" to true to allow some routes access
                store.dispatch(isLogged());
                // stop loader
                store.dispatch(stopLoader());
                // display all books whom user connetced is borrower
                axios.get('http://localhost:8000/api/user/booking/borrowed', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                  .then((bookBorrowed) => {
                    const getBookBorrowed = bookBorrowed.data;
                    store.dispatch(getBorrowedBooks(getBookBorrowed));
                    // pass state "isLogged" to true to allow some routes access
                    store.dispatch(isLogged());
                    // stop loader
                    store.dispatch(stopLoader());

                    // books from user is owner
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
                        // stop loader
                        store.dispatch(stopLoader());

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

                            axios.get('http://localhost:8000/api/book/list/type', {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            })
                              .then((response) => {
                                const types = response.data;
                                store.dispatch(setTypes(types));

                                //  category set in hard way to display it on start
                                //  to be modified
                                axios.get('http://localhost:8000/api/book/list/Design', {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                })
                                  .then((response3) => {
                                    const listBooksCategoryInitApp = response3.data;
                                    // store list of books in state
                                    store.dispatch(listBookByOneCategoryInitApp(listBooksCategoryInitApp));
                                    // pass state "isLogged" to true to allow some routes access
                                    store.dispatch(isLogged());
                                    // stop loader
                                    store.dispatch(stopLoader());
                                  })
                                  .catch((error5) => {
                                    // console.log(error5);
                                  });
                              })
                              .catch((error4) => {
                                // console.log('liste des types ;', error4);
                              });
                          })
                          .catch((error3) => {
                            // console.log('3eme requete, erreur ;', error3);
                          });
                      })
                      .catch((error4) => {
                        // console.log('Role User, 4eme requete,les livres dont le User est le propriétaire erreur ;', error4);
                      });
                  })
                  .catch((error3) => {
                    // console.log('RoleUser : 3eme requete, Affiche tous les livres dont le User connecté est l\' emprunteur,  erreur ', error3);
                  });
              })
              .catch((error2) => {
                // console.log('RoleUser: 2eme requete, livre classé par catégorie, erreur ;', error2);
              });
          } else {
            // list of all users
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
                //  list of all books
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
                  .catch((error3bis) => {
                    // console.log('Board ,3eme requete, liste de tous les vivres,erreur ;', error3bis);
                  });
              })
              .catch((error2bis) => {
                // console.log('Board ,2eme requete,liste de tous les users, erreur ;', error2bis);
              });
          }
        }).catch((error1) => {
          // console.log('1eme requete: demande l\'objet user ,erreur ;', error1);
        });

      break;
    default:
      // action let to pas by default
      next(action);
  }
};

export default getAllDatasMiddleware;
