import { combineReducers } from "redux";
import DashboardReducer from "./../modules/dashboard/reducer";
import MenuReducer from "../modules/menu/menu-action";
import CustomerSetupStore from "./../modules/customer-setup/reducer";
import ActivePageReducer from "../modules/menu/active-page-action"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    menubar: MenuReducer,
    customerSetup: CustomerSetupStore,
    visiblePage: ActivePageReducer
});
export default rootReducer;