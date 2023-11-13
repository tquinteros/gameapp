import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isWoodcutting: boolean;
}

const initialState: InitialState = {
    isWoodcutting: false,
}

export const isWoodcutting = createSlice({
    name: 'isWoodcutting',
    initialState,
    reducers: {
        startWoodcutting: (state) => {
            state.isWoodcutting = true;
        },
        stopWoodcutting: (state) => {
            state.isWoodcutting = false;
        },
    }
})

export const { startWoodcutting, stopWoodcutting } = isWoodcutting.actions;
export default isWoodcutting.reducer;
