import { legacy_createStore as createStore,} from "redux";
import { reducers } from "./reducers/index";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

const store = compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) (createStore)(
 reducers,
);

export default store;
