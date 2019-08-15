import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSusccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (errorMsg) => {
  return {
      type: actionTypes.PURCHASE_BURGER_FAIL,
      error: errorMsg
  }
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post( '/orders.json', orderData )
            .then( response => {
                console.log(response.data)
                dispatch(purchaseBurgerSusccess(response.data(), orderData))
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail((error)))
            } );
    }
};
