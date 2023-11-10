import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth';
import flagReducer from './features/flag';

import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        authReducer,
        flagReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;