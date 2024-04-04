import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "./homePageSlice";
import axiosInstance from "../utilities/axiosInstance";
import { ALL_USERS, CREATE_TRANSACTION, UPDATE_WITHDRAWL } from "../constant/ApiPath";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IAdminViewUserResponse {
  name: string;
  phoneNumber: string;
  email: string;
  withdrawable: number;
  transactions: Array<ITransaction>;
}

interface IAdminTransactionSlice {
  totalAmountCredited: number;
  totalWithdrawn: number;
  userResponseDTO: Record<number, IAdminViewUserResponse>;
}

export interface ICreateTransactionRequest {
  id: number;
  type: string;
  amount: number;
}

export interface IUpdateWithdrawl {
  id: number,
  amount: number,
}

interface ICreateTransactionResponse {
    totalInvestedAmount: number,
    totalWithdrawl: number,
    transactions: Array<ITransaction>
}

const initialState: IAdminTransactionSlice = {
  totalAmountCredited: 0,
  totalWithdrawn: 0,
  userResponseDTO: {}
};

export const getAllUsersThunk = createAsyncThunk("getAllUsers", async () => {
  try {
    const response = await axiosInstance.get(ALL_USERS);
    return response.data;
  } catch (ex: any) {
    if (ex instanceof AxiosError)
      toast.error(ex?.response?.data?.message, {
        theme: "dark"
      });
    throw ex;
  }
});

export const createTransaction = createAsyncThunk(
  "createTransaction",
  async (createTransactionRequest: ICreateTransactionRequest) => {
    try {
      const response = await axiosInstance.post(
        CREATE_TRANSACTION,
        createTransactionRequest
      );
      toast.success("Transaction addedd successfully", {
        theme: "dark"
      });
      return {
        result: response.data,
        id: createTransactionRequest.id
      };
    } catch (ex: any) {
      if (ex instanceof AxiosError)
        toast.error(ex?.response?.data?.message, {
          theme: "dark"
        });
      throw ex;
    }
  }
);

export const updateWithdrawl = createAsyncThunk(
  "updateWithdrawl",
  async (updateWithdrawlRequest: IUpdateWithdrawl) => {
    try {
      const response = await axiosInstance.post(
        UPDATE_WITHDRAWL,
        updateWithdrawlRequest
      );
      toast.success("Withdrawable balance updated", {
        theme: "dark"
      });
      return updateWithdrawlRequest;
    } catch (ex: any) {
      if (ex instanceof AxiosError)
        toast.error(ex?.response?.data?.message, {
          theme: "dark"
        });
      throw ex;
    }
  }
)

const AdminTransactionSlice = createSlice({
  name: "adminTransactionSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAllUsersThunk.fulfilled,
      (state, action: PayloadAction<IAdminTransactionSlice>) => {
        state.totalAmountCredited = action.payload.totalAmountCredited;
        state.totalWithdrawn = action.payload.totalWithdrawn;
        state.userResponseDTO = action.payload.userResponseDTO;
      }
    );
    builder.addCase(
      createTransaction.fulfilled,
      (
        state,
        action: PayloadAction<{ result: ICreateTransactionResponse; id: number }>
      ) => {
        const adminViewUserResponse = state.userResponseDTO[action.payload.id];
        adminViewUserResponse.transactions = action.payload.result.transactions;
        state.userResponseDTO[action.payload.id] = adminViewUserResponse;
        state.totalAmountCredited = action.payload.result.totalInvestedAmount;
        state.totalWithdrawn = action.payload.result.totalWithdrawl;
      }
    );
    builder.addCase(
      updateWithdrawl.fulfilled,
      (state, action: PayloadAction<IUpdateWithdrawl>) => {
        const adminViewUserResponse = state.userResponseDTO[action.payload.id];
        adminViewUserResponse.withdrawable = action.payload.amount;
        state.userResponseDTO[action.payload.id] = adminViewUserResponse;
      }
    )
  }
});

export default AdminTransactionSlice.reducer;
