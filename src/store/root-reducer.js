import { combineReducers } from "redux";
import DashboardReducer from "./../modules/dashboard/reducer";

const rootReducer = combineReducers({
    dashboard:DashboardReducer
});
export default rootReducer;