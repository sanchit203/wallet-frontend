import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { SIGN_IN, SIGN_UP } from "../constant/ApiPath";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

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
            toast.success("Logged in successfully", {theme: "dark"});
            return response.data.jwtToken;
        } catch(ex: any) {
            if (ex instanceof AxiosError)
                toast.error(ex?.response?.data?.message, {
                    theme: "dark"
                });
            throw ex;
        }
    }
)

export const signUpThunk = createAsyncThunk(
    "signUp",
    async (signUpRequest: ISignUpRequest) => {
        try {
            const response = await axiosInstance.post(SIGN_UP, signUpRequest);
            toast.success("Signed up successfully", {theme: "dark"});
            return response.data.jwtToken;
        } catch(ex: any) {
            if (ex instanceof AxiosError)
                toast.error(ex?.response?.data?.message, {
                    theme: "dark"
                });
            throw ex;
        }
    }
)