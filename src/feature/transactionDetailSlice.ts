import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utilities/axiosInstance";
import { TRANSACTION } from "../constant/ApiPath";

interface ITransactionDetailSlice {
  id: number;
  amount: number;
  status: string;
  type: string;
  dateTime: string;
}

const initialState: ITransactionDetailSlice = {
  id: 0,
  amount: 0,
  status: "",
  type: "",
  dateTime: ""
};

export const getTransacationDetailThunk = createAsyncThunk(
  "getTransactionDetail",
  async (id: number) => {
    try {
      const response = await axiosInstance.get(TRANSACTION + `/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const transactionDetailSlice = createSlice({
  name: "transactionDetailSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getTransacationDetailThunk.fulfilled,
      (state, action: PayloadAction<ITransactionDetailSlice>) => {
        state.id = action.payload.id;
        state.amount = action.payload.amount;
        state.dateTime = action.payload.dateTime;
        state.status = action.payload.status;
        state.type = action.payload.type;
      }
    );
  }
});

export default transactionDetailSlice.reducer;
