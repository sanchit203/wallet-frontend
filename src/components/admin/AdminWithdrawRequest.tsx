import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllWithdrawRequestThunk } from "../../feature/adminWithdrawSlice";
import WithdrawRequestRow from "./withdrawRequestRow";

export default function AdminWithdrawRequest() {
  const dispatch = useAppDispatch();
  const withdrawRequests = useAppSelector(
    state => state.adminWithdrawSlice.withdrawRequests
  );

  useEffect(() => {
    dispatch(getAllWithdrawRequestThunk());
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
          {withdrawRequests.length === 0 ? (
            <div className="p-2 text-m font-semibold text-gray-500">
              No withdraw requests found
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
                        NAME
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        PHONE NO.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        BANK ACC. NO.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        IFSC CODE
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        NAME ON BANK ACCOUNT
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        AMOUNT
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                      >
                        UPDATE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {withdrawRequests.map(withdrawRequest => {
                      return (
                        <WithdrawRequestRow
                          key={withdrawRequest.id}
                          withdrawRequest={withdrawRequest}
                        />
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
