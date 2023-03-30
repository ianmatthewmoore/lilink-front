import { configureStore } from '@reduxjs/toolkit'
import  userDataSlice  from './user'

export const store = configureStore({
    reducer: {
        user : userDataSlice,
    },
})
