import { configureStore } from '@reduxjs/toolkit'
import statusReducer from './status'
import userReducer from './user'

export const store = configureStore({
  reducer: {
    status: statusReducer,
    user: userReducer,
  },
})
