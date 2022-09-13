import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import users from "./users"
import customers from "./customer"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  users,
  customers,
})

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
