import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth';
import isMiningReducer from './features/isMining';
import isWoodcuttingReducer from './features/isWoodcutting';

import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        authReducer,
        isMiningReducer,
        isWoodcuttingReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;