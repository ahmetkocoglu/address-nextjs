import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// ** Reducers
import country from '@/store/apps/country/index'
import address from '@/store/apps/address/index'

export const store = configureStore({
    reducer: {
        country,
        address
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>