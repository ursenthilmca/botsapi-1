
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./root-reducer";
import rootWatchers from "./root-saga";

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootWatchers)