import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as filter from '../../../constant/filters'

export interface filterState {
    filterbyAct: string;
    filterbyDate: string;
}

// // Define initial state
const initialState: filterState = {
    filterbyAct: filter.FILTER_BY_POST,
    filterbyDate: filter.FILTER_BY_MONTH
};

// // Define the Redux slice
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterByAct: (state, action: PayloadAction<string>) => {
            console.log("action.payload", action.payload)
            state.filterbyAct = action.payload
        }
        ,
        setFilterByDate: (state, action: PayloadAction<string>) => {
            state.filterbyDate = action.payload
        }

    },
});

export const { setFilterByAct, setFilterByDate } = filterSlice.actions;
export default filterSlice.reducer;
