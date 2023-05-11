import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../../model/User";


export interface AuthState {
    isAuth: boolean;
    userLogin: User | undefined
}

// Define initial state
const initialState: AuthState = {
    isAuth: false,
    userLogin: undefined
};

// Define the Redux slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Handle start of fetching user
        toggleAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUserLogin: (state, action: PayloadAction<User | undefined>) => {
            console.log('aaa', action.payload
            )
            state.userLogin = action.payload;
        }
    },
});
export const { toggleAuth, setUserLogin } = authSlice.actions;
export default authSlice.reducer;