import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import assetsReducer from './slices/assetsSlice'
import portfolioReducer from './slices/portfolioSlice'

const assetsPersist = {
  key: 'assets',
  storage,
  whitelist: ['assets'],
}

const currencyPersist = {
  key: 'currency',
  storage,
  whitelist: ['currency'],
}

const rootReducer = combineReducers({
  assets: persistReducer(assetsPersist, assetsReducer),
  currency: persistReducer(currencyPersist, portfolioReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)
