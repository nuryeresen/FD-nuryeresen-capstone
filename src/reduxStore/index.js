import {combineReducers, createStore} from "redux"
import { userReducer } from "./userInit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



import { genresReducer } from "./getGenres";
const rootReducer = combineReducers({
 user: userReducer,
 genres: genresReducer,
})

const persistConfig = {
    key: 'root',
    storage,
   
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
// const store = createStore(rootReducer)

store.subscribe(() => console.log("STORE:::", store.getState()))

export const persistor = persistStore(store)
export default store


   
