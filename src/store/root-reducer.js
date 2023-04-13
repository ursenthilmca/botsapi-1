import { combineReducers } from "redux";
import DashboardReducer from "./../modules/dashboard/reducer";
import MenuReducer from "../modules/menu/menu-action";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    menubar: MenuReducer
});
export default rootReducer;