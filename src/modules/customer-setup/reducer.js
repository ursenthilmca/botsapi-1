import {
  GET_CUSTOMER_SETUP_HEADER_DATA,
  GET_CUSTOMER_DETAIL,
  GET_CUSTOMER_SETUP_COMPONENT
} from './constants';



const defaultState = {
  headerData: [],
  customerSetupdetails:[],
  customerSetupclicked:false
}

const CustomerSetupStore = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_SETUP_HEADER_DATA:
      return {
        ...state,
        headerData: action.data
      }
    case GET_CUSTOMER_DETAIL:
      return {
        ...state,
        customerSetupdetails: action.data
      }
    case GET_CUSTOMER_SETUP_COMPONENT:
      return {
        ...state,
        customerSetupclicked: action.data
      }
    default:
      return {
        ...state,
      };
  }
};

export default CustomerSetupStore;
