import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import todoReducer from "./todos/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import languageReducer from "./language/reducer"
import todoReducer from "./async/todos/reducer";
import { thunk } from "redux-thunk";

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_SECRET_KEY,
    onError: function (error) {
        console.error("encryption error: ", error);
    },
});

const rootReducer = combineReducers({
    todo: todoReducer,
    lang: languageReducer,
})

//persist config
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["todo", "lang"],
    transforms: [encryptor],
};

//persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//redux-thunk
//store
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

//persist store
const persistor = persistStore(store);


export {persistor, store};