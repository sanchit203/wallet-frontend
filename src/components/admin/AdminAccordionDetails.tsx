import { Clear, Done } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from "@mui/material";
import "./AdminAccordionDetails.css";
import React, { useState } from "react";
import { ITransaction } from "../../feature/homePageSlice";
import { convertDateTimeToEnglishDate } from "../../utilities/timeUtil";
import { Link } from "react-router-dom";
import {
  ICreateTransactionRequest,
  IUpdateWithdrawl,
  createTransaction,
  updateWithdrawl
} from "../../feature/adminTransactionSlice";
import { useAppDispatch } from "../../app/hooks";

interface AdminAccordionDetailsProps {
  userId: number;
  withdrawable: number;
  transactions: Array<ITransaction>;
}

export default function AdminAccordionDetails(
  props: AdminAccordionDetailsProps
) {
  const [type, setType] = React.useState("");
  const [withdrawable, setWithdrawable] = useState(
    props.withdrawable.toString()
  );
  const [transaction, setTransaction] = useState("");
  const dispatch = useAppDispatch();

  const { transactions } = props;

  const isWithDrawButtonDisabled = (): boolean => {
    if (Number(withdrawable) > props.withdrawable) return false;
    return true;
  };

  const isTransactionButtonDisabled = (): boolean => {
    if (Number(transaction) === 0 || type === "") return true;
    return false;
  };

  const discardWithdrawlChanges = () => {
    setWithdrawable(props.withdrawable.toString());
  };

  const discardTransactionChanges = () => {
    setTransaction("");
    setType("");
  };

  const handleSaveOnWithdrawl = () => {
    const updateWithdrawRequest: IUpdateWithdrawl = {
      id: props.userId,
      amount: Number(withdrawable)
    };

    dispatch(updateWithdrawl(updateWithdrawRequest));
  };

  const handleSaveOnTransaction = () => {
    const createTransactionRequest: ICreateTransactionRequest = {
      id: props.userId,
      type: type,
      amount: Number(transaction)
    };
    dispatch(createTransaction(createTransactionRequest));
  };

  const handlePaymentTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div className="AdminAccordionDetails">
      <div className="withdrawal-balance">
        <div>Withdrawable balance: </div>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            value={withdrawable}
            onChange={event => setWithdrawable(event.target.value)}
          />
        </FormControl>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Clear />}
            disabled={isWithDrawButtonDisabled()}
            onClick={discardWithdrawlChanges}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            endIcon={<Done />}
            disabled={isWithDrawButtonDisabled()}
            onClick={handleSaveOnWithdrawl}
          >
            Save
          </Button>
        </Stack>
      </div>
      <div className="add-transaction">
        <div>Add Transaction:</div>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            type="number"
            value={transaction}
            onChange={event => setTransaction(event.target.value)}
          />
        </FormControl>
        <Box sx={{ minWidth: 180 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Transaction type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Transaction type"
              onChange={handlePaymentTypeChange}
            >
              <MenuItem value={"ADD"}>ADD</MenuItem>
              <MenuItem value={"WITHDRAW"}>WITHDRAW</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Clear />}
            disabled={isTransactionButtonDisabled()}
            onClick={discardTransactionChanges}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            endIcon={<Done />}
            disabled={isTransactionButtonDisabled()}
            onClick={handleSaveOnTransaction}
          >
            Save
          </Button>
        </Stack>
      </div>
      <div className="flex justify-center">
        <div className="w-[700px] block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
          {transactions.length === 0 ? (
            <div className="p-2 text-m font-semibold text-gray-500">
              No transactions found
            </div>
          ) : (
            <div className="p-1.5">
              <div className="border rounded-lg shadow overflow-scroll max-h-[300px] table-height">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        DATE
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        AMOUNT
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-end text-xs font-medium text-gray-500"
                      >
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {transactions.map((transaction, index) => {
                      return (
                        <tr key={index}>
                          <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {convertDateTimeToEnglishDate(transaction.date)}
                          </td>
                          <td
                            className={`px-2 py-4 whitespace-nowrap text-sm ${
                              transaction.type === "ADD"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            ₹ {`${transaction.amount}`}
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <Link to={`/transaction-detail/${transaction.id}`}>
                              <button
                                type="button"
                                className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                              >
                                Detials
                              </button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
