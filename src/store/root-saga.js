import { all } from 'redux-saga/effects';
import { dashboardWatchers } from '../modules/dashboard/saga';


export default function* rootWatchers() {
    yield all([
        dashboardWatchers()
    ]);
}