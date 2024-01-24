import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    // {"ip": ["iphone", "ipaddress"]}
    reducers: {
        cacheResults: (state, action) => {
            state = {...state, ...action.payload};
            return state;
        }
    }
})

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;