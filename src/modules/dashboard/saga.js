import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { GET_DASHBOARD_INFO } from "./constants";


function* getDashboardInfoAction(data){
   console.log("==== aaa");
   try {
        //yield delay(2000);
        yield put(actions.getDashboardInfoSuccess({data:"success"}))
     } catch (e) {
        yield put(actions.getDashboardInfoFailure("Dashbaord error"))
     }
}

export function* dashboardWatchers() {
    yield takeLatest(GET_DASHBOARD_INFO, getDashboardInfoAction);

}