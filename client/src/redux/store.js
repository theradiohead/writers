import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dynamicMiddlewares from "redux-dynamic-middlewares";

import rootReducer from "./reducers/rootReducer";

const initialState = {};

const middleware = [thunk, dynamicMiddlewares];

let store_middleware;
store_middleware = applyMiddleware(...middleware);

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store_middleware = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
const store = createStore(rootReducer, initialState, store_middleware);

export default store;
