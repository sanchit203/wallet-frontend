import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "./authenticationThunk";
import { setAccessTokenAndTTL } from "../utilities/authUtils";

interface ILoginState {
    isLoggedIn: Boolean,
    loading: Boolean,
    isCheckingLocalStorage: Boolean
}

const initialState: ILoginState = {
    isLoggedIn: false,
    loading: false,
    isCheckingLocalStorage: true,
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
            state.isCheckingLocalStorage = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false;
            setAccessTokenAndTTL(action.payload);
            state.isLoggedIn = true;
        });
        builder.addCase(signInThunk.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(signInThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(signUpThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.loading = false;
            setAccessTokenAndTTL(action.payload);
            state.isLoggedIn = true;
        });
        builder.addCase(signUpThunk.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(signUpThunk.pending, (state) => {
            state.loading = true;
        });
    },
});

export const {setLogin} = loginSlice.actions;

export default loginSlice.reducer;