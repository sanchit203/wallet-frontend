import TransactionsTable from "./homePage/transationsTable";
import Header from "./mainHeader";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header />
      <div>
        <div
          className="m-6 h-[700px] rounded-lg block"
        // style={{ backgroundColor: "#5683d2" }}
        >
          <div className="w-[350px] p-6 bg-white text-center rounded-2xl shadow-2xl mx-auto balance">
            <p className="mb-2 text-xl font-bold text-gray-500">Total invested :</p>
            <p className="mb-2 text-2xl font-bold text-green-600">₹ 5869.04</p>
            <h5 className="mb-2 text-xl font-bold text-gray-500 withdraw">
              Withdrawable : ₹ 352.04
            </h5>
            <Link to="/withdraw">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-600 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mt-2"
              >
                WITHDRAW
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <TransactionsTable />
          </div>
        </div>
      </div>
    </>
  );
}
