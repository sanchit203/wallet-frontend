import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../utilities/axiosInstance";
import { GET_ALL_WITHDRAW_REQUEST, UPDATE_WITHDRAW_REQUEST } from "../constant/ApiPath";

export interface IWthdrawRequest {
  id: number;
  name: string;
  phoneNumber: string;
  bankAccountNumber: string;
  ifscCode: string;
  nameOnBankAccount: string;
  amount: number;
  status: string;
}

interface IWithdrawSlice {
    withdrawRequests: Array<IWthdrawRequest>,
}

const initialState: IWithdrawSlice = {
    withdrawRequests: []
};

export const getAllWithdrawRequestThunk = createAsyncThunk(
  "getWithdrawRequest",
  async () => {
    try {
      const response = await axiosInstance.get(GET_ALL_WITHDRAW_REQUEST);
      return response.data;
    } catch (ex: any) {
      if (ex instanceof AxiosError)
        toast.error(ex?.response?.data?.message, {
          theme: "dark"
        });
      throw ex;
    }
  }
);

export const updateWithdrawRequestThunk = createAsyncThunk(
    "updateWithdrawRequest",
    async(id: number) => {
        try {
            await axiosInstance.post(UPDATE_WITHDRAW_REQUEST + `/${id}`);
            toast.success("Withdraw request completed successfully", {theme: "dark"});
            return id;
          } catch (ex: any) {
            if (ex instanceof AxiosError)
              toast.error(ex?.response?.data?.message, {
                theme: "dark"
              });
            throw ex;
          }
    }
)

const AdminWithdrawSlice = createSlice({
  name: "adminWithdraw",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAllWithdrawRequestThunk.fulfilled,
      (state, action: PayloadAction<Array<IWthdrawRequest>>) => {
        state.withdrawRequests = action.payload;
      }
    );
    builder.addCase(
        updateWithdrawRequestThunk.fulfilled,
        (state, action: PayloadAction<number>) => {
            const index = state.withdrawRequests.findIndex(withdrawRequest => withdrawRequest.id === action.payload);
            const withdrawRequest = state.withdrawRequests[index];
            withdrawRequest.status = "Success";
            state.withdrawRequests[index] = withdrawRequest;
        }
    )
  }
});

export default AdminWithdrawSlice.reducer;