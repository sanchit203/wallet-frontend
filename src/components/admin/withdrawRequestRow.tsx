import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import {
  IWthdrawRequest,
  updateWithdrawRequestThunk
} from "../../feature/adminWithdrawSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";

export default function WithdrawRequestRow(props: {
  withdrawRequest: IWthdrawRequest;
}) {
  const { withdrawRequest } = props;
  const [status, setStatus] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (withdrawRequest.status === undefined) setStatus("Pending");
  }, []);

  const handleStatusTypeChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleUpdate = () => {
    dispatch(updateWithdrawRequestThunk(withdrawRequest.id));
  };

  return (
    <tr>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        {withdrawRequest.name}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        {withdrawRequest.phoneNumber}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        {withdrawRequest.bankAccountNumber}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        {withdrawRequest.ifscCode}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        {withdrawRequest.nameOnBankAccount}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        ₹ {withdrawRequest.amount}
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        <Box sx={{ minWidth: 40 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleStatusTypeChange}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Success"}>Success</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </td>
      <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
        <Button
          variant="outlined"
          disabled={
            status === "Pending" || withdrawRequest.status !== undefined
          }
          onClick={handleUpdate}
        >
          {withdrawRequest.status !== undefined ? "Updated" : "Update"}
        </Button>
      </td>
    </tr>
  );
}
