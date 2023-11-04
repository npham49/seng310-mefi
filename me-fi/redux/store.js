import { configureStore } from '@reduxjs/toolkit'
import statusReducer from './status'

export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
})
