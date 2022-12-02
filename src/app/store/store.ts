import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { scoreControllerSlice } from '../../components/Game/scoreSlice';
import { authSlice } from '../../components/Login/authSlice';
const reducer = combineReducers({
  auth: authSlice.reducer,
  counter: scoreControllerSlice.reducer,
});
const persistConfig = {
  key: 'root',
  transform: [
    expireReducer('root', {
      persistedAtKey: 'loadedAt',
      expireSeconds: 15,
      expiredState: {
        auth: {
          isLoggedIn: false,
        },
      },
    }),
  ],
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
