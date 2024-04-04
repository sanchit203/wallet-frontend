import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./AdminTransaction.css";
import AdminAccordionSummary from "./AdminAccordionSummary";
import AdminAccordionDetails from "./AdminAccordionDetails";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getAllUsersThunk } from "../../feature/adminTransactionSlice";

export default function AdminTransaction() {
  const dispatch = useAppDispatch();
  const adminData = useAppSelector(state => state.adminTransactionSlice);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, []);

  return (
    <div>
      <div className="w-[450px] h-[115px] p-6 bg-white max-w-sm text-center rounded-2xl shadow-2xl mx-auto balance">
        <h5 className="mb-2 text-2xl font-bold text-gray-500">
          Total Credited : ₹ {adminData.totalAmountCredited}
        </h5>
        <h5 className="mb-2 text-xl font-bold text-gray-500 withdraw">
          Total Withdrawl : ₹ {adminData.totalWithdrawn}
        </h5>
      </div>

      <div className="accordions">
        {Object.keys(adminData.userResponseDTO)
          .map(key => Number(key))
          .map(userId => {
            return (
              <Accordion key={userId}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <AdminAccordionSummary
                    email={adminData.userResponseDTO[userId]?.email ?? ""}
                    name={adminData.userResponseDTO[userId]?.name ?? ""}
                    phoneNumber={adminData.userResponseDTO[userId]?.phoneNumber ?? ""}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <AdminAccordionDetails userId={userId} withdrawable={adminData.userResponseDTO[userId]?.withdrawable} transactions={adminData.userResponseDTO[userId]?.transactions}/>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
}
