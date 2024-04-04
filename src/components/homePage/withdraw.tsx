import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import GoBackButton from "../GoBackButton";
import Header from "../mainHeader";
import { createWithdrawRequestThunk, getWithdrawDetailThunk } from "../../feature/withdrawPageSlice";

export default function Withdraw() {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.withdrawDetailSlice);

  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleOnChangeWithdrawAmount = (event: any) => {
    setWithdrawAmount(event.target.value);
  };

  const isDisabled = () => {
    return (
      withdrawAmount > details.withdrawableAmount ||
      details.withdrawableAmount === 0 || !isBankAccountDetailsPresent()
    );
  };

  const handleOnSubmitWithdraw = (event: any) => {
    event.preventDefault();
    
    dispatch(createWithdrawRequestThunk(withdrawAmount));
  };

  const isBankAccountDetailsPresent = () => {
    return (
      details.bankAccountNumber !== "" &&
      details.ifscCode !== "" &&
      details.nameOnBankAccount !== ""
    );
  };

  useEffect(() => {
    dispatch(getWithdrawDetailThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <GoBackButton />
        <h1 className="text-3xl mt-4 font-semibold flex justify-center">
          Withdraw Money
        </h1>
        <div className="flex justify-center">
          <div className="w-[400px] user mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
            <div className="p-1.5 mb-[40px] font-semibold text-center text-gray-500 gap-y-12 w-full">
              <p>Withdrawable : ₹ {details.withdrawableAmount.toString()}</p>
              {isBankAccountDetailsPresent() ? <div className="bg-gray-200 text-xs rounded-md mt-2 p-1">
                <p>{details.nameOnBankAccount}</p>
                <p>{details.bankAccountNumber}</p>
                <p>{details.ifscCode}</p>
              </div>: <div className="text-red-400">Please fill up the Bank Details first.</div>}
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleOnSubmitWithdraw}
            >
              <form className="max-w-[18rem] mx-auto flex">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-indian-rupee text-gray-500"
                    >
                      <path d="M6 3h12" />
                      <path d="M6 8h12" />
                      <path d="m6 13 8.5 8" />
                      <path d="M6 13h3" />
                      <path d="M9 13c6.667 0 6.667-10 0-10" />
                    </svg>
                  </div>
                  <input
                    type="number"
                    id="currency-input"
                    className="focus:border-none p-2.5 w-full ps-10 text-md text-gray-800 bg-gray-50"
                    placeholder="0"
                    value={withdrawAmount}
                    onChange={handleOnChangeWithdrawAmount}
                    required
                  />
                </div>
              </form>
              <div>
                <button
                  type="submit"
                  className={`w-full block mb-4 mt-[200px] border text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    isDisabled()
                      ? "bg-gray-300"
                      : "bg-blue-500 hover:bg-blue-700"
                  }`}
                  disabled={isDisabled()}
                >
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
