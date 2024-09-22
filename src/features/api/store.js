import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from 'src/features/app/apiSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['someOtherReducer'], // Add any reducers you want to persist here
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);