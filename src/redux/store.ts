import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
}
const reducers = combineReducers({
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;
export const persistor = persistStore(store)
