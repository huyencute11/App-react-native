import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface AuthState {
    isAuth: boolean;
}

// Define initial state
const initialState: AuthState = {
    isAuth: false,
};

// Define the Redux slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Handle start of fetching user
        toggleAuth: (state, action: PayloadAction<boolean>) => {
            console.log('aaaaaaaaa', action.payload);
            state.isAuth = action.payload;
        }
    },
});
export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;