import {
  GET_DASHBOARD_INFO,
  GET_DASHBOARD_INFO_FAILURE,
  GET_DASHBOARD_INFO_SUCCESS,
} from "./constants";

const defaultState = {
  isLoading: false,
  dashboardInfo: {},
};

const DashboardReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_INFO:
      return {
        ...prevState,
        isLoading: true,
        dashboardInfo: {},
      };

    case GET_DASHBOARD_INFO_SUCCESS:
        console.log("==== res", action.payload);
      return {
        ...prevState,
        dashboardInfo: action.payload,
        isLoading: false,
      };

    case GET_DASHBOARD_INFO_FAILURE:
      return {
        ...prevState,
        dashboardInfo: action.error,
        isLoading: false,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default DashboardReducer;
