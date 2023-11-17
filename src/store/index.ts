import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// ** Reducers
import country from '@/store/apps/country/index'
import address from '@/store/apps/address/index'
import user from '@/store/apps/user'

export const store = configureStore({
    reducer: {
        country,
        address,
        user
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>