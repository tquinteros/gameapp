import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isMining: boolean;
}

const initialState: InitialState = {
    isMining: false,
}

export const isMining = createSlice({
    name: 'isMining',
    initialState,
    reducers: {
        startMining: (state) => {
            state.isMining = true;
        },
        stopMining: (state) => {
            state.isMining = false;
        },
    }
})

export const { startMining, stopMining } = isMining.actions;
export default isMining.reducer;
