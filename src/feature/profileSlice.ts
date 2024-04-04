import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { PROFILE } from "../constant/ApiPath";

interface IProfileSlice {
    username: string,
    name: string,
    email: string,
    phoneNumber: string,
}

const initialState: IProfileSlice = {
    username: "",
    name: "",
    email: "",
    phoneNumber: ""
};

export const profileSliceThunk = createAsyncThunk("profile", async () => {
  try {
    const response = await axiosInstance.get(PROFILE);
    return response.data;
  } catch (err) {
    throw err;
  }
});

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
        profileSliceThunk.fulfilled,
      (state, action: PayloadAction<IProfileSlice>) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.phoneNumber = action.payload.phoneNumber;
      }
    );
  }
});

export default profileSlice.reducer;
