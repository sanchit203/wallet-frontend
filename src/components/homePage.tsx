import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import TransactionsTable from "./homePage/transationsTable";
import Header from "./mainHeader";
import { Link } from "react-router-dom";
import { homePageThunk } from "../feature/homePageSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const withdrawableAmount = useAppSelector(state => state.homePageSlice.withdrawable);
  const investedAmount = useAppSelector(state => state.homePageSlice.totalInvested);

  useEffect(() => {
    dispatch(homePageThunk());
  }, [])

  return (
    <>
      <Header />
      <div>
        <div
          className="m-6 h-[700px] rounded-lg block"
        >
          <div className="w-[350px] p-6 bg-white text-center rounded-2xl shadow-2xl mx-auto balance">
            <p className="mb-2 text-xl font-bold text-gray-500">Total invested :</p>
            <p className="mb-2 text-2xl font-bold text-green-600">₹ {`${investedAmount}`}</p>
            <h5 className="mb-2 text-xl font-bold text-gray-500 withdraw">
              Withdrawable : ₹ {`${withdrawableAmount}`}
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
