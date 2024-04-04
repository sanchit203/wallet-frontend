import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import GoBackButton from "../GoBackButton";
import Header from "../mainHeader";
import { getTransacationsThunk } from "../../feature/transactionSlice";
import { convertDateTimeToEnglishDate } from "../../utilities/timeUtil";
import { Link } from "react-router-dom";

export default function AllTransactions() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    state => state.transactionsSlice.transactions
  );

  useEffect(() => {
    dispatch(getTransacationsThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <GoBackButton />
        <h1 className="text-3xl mt-4 font-semibold flex justify-center">
          Transactions
        </h1>
        <div className="flex justify-center">
          <div className="w-[700px] block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
            {transactions.length === 0 ? (
              <div className="p-2 text-m font-semibold text-gray-500">
                No transactions found
              </div>
            ) : (
              <div className="p-1.5">
                <div className="border rounded-lg shadow overflow-scroll h-[500px] table-height">
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
                              <Link
                                to={`/transaction-detail/${transaction.id}`}
                              >
                                <button
                                  type="button"
                                  className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100"
                                >
                                  Details
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
    </>
  );
}
