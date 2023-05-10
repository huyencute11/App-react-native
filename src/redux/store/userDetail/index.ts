import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../../interface/User";

export interface UserDetailState {
    userOnclick: User;
    showUserDetail: boolean;
}

// Define initial state
const initialState: UserDetailState = {
    userOnclick: {} as User,
    showUserDetail: false,
};

// Define the Redux slice
export const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState,
    reducers: {
        // Handle start of fetching user
        setUserSelectedDetail: (state, action: PayloadAction<User>) => {
            state.showUserDetail = !state.showUserDetail;
            state.userOnclick = action.payload;
        },
        setCloseUserDetail: (state) => {
            state.showUserDetail = !state.showUserDetail;
        }

    },
});

export const { setUserSelectedDetail, setCloseUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
