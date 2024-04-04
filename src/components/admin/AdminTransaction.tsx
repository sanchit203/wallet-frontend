import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./AdminTransaction.css";
import AdminAccordionSummary from "./AdminAccordionSummary";
import AdminAccordionDetails from "./AdminAccordionDetails";

export default function AdminTransaction() {
  return (
    <div>
      <div className="w-[450px] h-[115px] p-6 bg-white max-w-sm text-center rounded-2xl shadow-2xl mx-auto balance">
        <h5 className="mb-2 text-2xl font-bold text-gray-500">
          Total invested : ₹ 5869.04
        </h5>
        <h5 className="mb-2 text-xl font-bold text-gray-500 withdraw">
          Total withdrawl : ₹ 352.04
        </h5>
      </div>

      <div className="accordions">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <AdminAccordionSummary email="sanchitmunjal203@gmail.com" name="Sanchit Munjal" phoneNumber="9729672926" />
        </AccordionSummary>
        <AccordionDetails>
         <AdminAccordionDetails />
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
