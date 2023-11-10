import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    enabled: boolean;
}

const initialState: InitialState = {
    enabled: false,
}

export const flag = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        toggleFlag: (state) => {
            state.enabled = !state.enabled;
        },
    }
})

export const {toggleFlag} = flag.actions;
export default flag.reducer;