import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { SIGN_IN, SIGN_UP } from "../constant/ApiPath";

export interface ISignInRequest {
    username: string,
    password: string,
}

export interface ISignUpRequest {
    username: string,
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
}

export const signInThunk = createAsyncThunk(
    "signIn",
    async (signInRequest: ISignInRequest) => {
        try {
            const response = await axiosInstance.post(SIGN_IN, signInRequest);
            return response.data.jwtToken;
        } catch(err) {
            throw err;
        }
    }
)

export const signUpThunk = createAsyncThunk(
    "signUp",
    async (signUpRequest: ISignUpRequest) => {
        try {
            const response = await axiosInstance.post(SIGN_UP, signUpRequest);
            return response.data.jwtToken;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
)