import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./todos/reducer";
import languageReducer from "./language/reducer"


const rootReducer = combineReducers({
    todo: todoReducer,
    lang: languageReducer,
})
//store
const store = createStore(rootReducer, composeWithDevTools());
export default store;