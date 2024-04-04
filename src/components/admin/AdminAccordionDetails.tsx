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
import React from "react";

export default function AdminAccordionDetails() {
  const [type, setType] = React.useState("");

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
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          />
        </FormControl>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Clear />}>
            Cancel
          </Button>
          <Button variant="contained" endIcon={<Done />}>
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
              <MenuItem value={10}>ADD</MenuItem>
              <MenuItem value={20}>WITHDRAW</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Clear />}>
            Cancel
          </Button>
          <Button variant="contained" endIcon={<Done />}>
            Save
          </Button>
        </Stack>
      </div>
      <div className="flex justify-center">
        <div className="w-[1100px] block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
          <div className="p-1.5">
            <div className="border rounded-lg shadow overflow-scroll h-[300px] table-height">
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
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      20 MAR'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      23 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-red-500">
                      ₹ 20.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      08 FEB'24
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">
                      ₹ 10500.00
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
