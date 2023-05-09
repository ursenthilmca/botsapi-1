import {
    GET_CUSTOMER_SETUP_HEADER_DATA,
    GET_CUSTOMER_DETAIL,
    GET_CUSTOMER_SETUP_COMPONENT
} from '../customer-setup/constants';

export const fetchCustomerHeaderdata = (value) => (dispatch, getState) => {
    dispatch({
        type: GET_CUSTOMER_SETUP_HEADER_DATA,
        data: value
    })
}

export const fetchCustomerDetails = (value) => (dispatch, getState) => {
    dispatch({
        type: GET_CUSTOMER_DETAIL,
        data: value
    })
}

export const customerSetupcomponent = (value) => (dispatch, getState) => {
    console.log('value', value)
    dispatch({
        type: GET_CUSTOMER_SETUP_COMPONENT,
        data: value
    })
}