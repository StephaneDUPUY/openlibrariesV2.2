/* eslint-disable no-case-declarations */
import axios from 'axios';

import { ON_KEY_PRESS, SUBMIT_FORM_ADD_USER, setAddressAPI, displayMessageSuccess } from 'src/store/actions';

const addUserMiddleware = (store) => (next) => (action) => {
  const { address } = store.getState().formAddUser;

  switch (action.type) {
    case ON_KEY_PRESS:
      delete axios.defaults.headers['Authorization'];
      axios
        .get(`http://api-adresse.data.gouv.fr/search/?q=${address}`)
        .then((response) => {
          const { features } = response.data;
          const addressesAPI = [];


          features.forEach((feature) => {
            addressesAPI.push(feature);

          });

          store.dispatch(setAddressAPI(addressesAPI));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    case SUBMIT_FORM_ADD_USER:

      const { addressesAPI } = store.getState().formAddUser;

      //  if book search became
      if (addressesAPI.length > 1) {

        const poscode = addressesAPI[0].properties.postcode;
        const poscodeToNumber = parseInt(poscode, 10);
        //  no one check on forms
        const token2 = window.localStorage.getItem('token');
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/board/user/add',
          data: {
            firstname: store.getState().formAddUser.firstname,
            lastname: store.getState().formAddUser.lastname,
            email: store.getState().formAddUser.email,
            phoneNumber: store.getState().formAddUser.phone,
            password: store.getState().formAddUser.password,
            latitude: addressesAPI[0].geometry.coordinates[0],
            longitude: addressesAPI[0].geometry.coordinates[1],
            city: addressesAPI[0].properties.city,
            postalcode: poscodeToNumber,
            street: addressesAPI[0].properties.name
          },
          headers: {
            Authorization: `Bearer ${token2}`,
          },
        })
          .then((response) => {
            if (response.status === 200) {
              store.dispatch(displayMessageSuccess());
            }

          })
          .catch((error) => {
            // console.log(error);
          });
      }

      break;
    default:
      // action pass by default
      next(action);
  }
};

export default addUserMiddleware;
