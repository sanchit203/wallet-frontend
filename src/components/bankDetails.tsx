import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import GoBackButton from "./GoBackButton";
import Header from "./mainHeader";
import { IBankDetailSlice, getBankDetailThunk, updateBankDetailThunk } from "../feature/bankDetailSlice";

export default function BankDetails() {
  const bankDetails = useAppSelector(state => state.bankDetailSlice);
  const dispatch = useAppDispatch();

  const [accountNo, setAccountNo] = useState("");
  const [name, setName] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleOnChangeAccountNo = (event: any) => {
    setAccountNo(event.target.value);
  };

  const handleOnChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleOnChangeIfsc = (event: any) => {
    setIfscCode(event.target.value);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const bankDetails: IBankDetailSlice = {
      bankAccountNumber: accountNo,
      nameOnBankAccount: name,
      ifscCode: ifscCode
    }

    dispatch(updateBankDetailThunk(bankDetails));
  };

  useEffect(() => {
    dispatch(getBankDetailThunk());
  }, []);

  useEffect(() => {
    setAccountNo(bankDetails.bankAccountNumber);
    setIfscCode(bankDetails.ifscCode);
    setName(bankDetails.nameOnBankAccount);
  }, [bankDetails])

  return (
    <>
      <Header />
      <div className="p-6">
        <GoBackButton />
        <h1 className="text-3xl mt-4 font-semibold flex justify-center">
          Bank Details
        </h1>
        <div className="flex justify-center">
          <div className="w-[400px] user mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
            <div className="p-1.5 font-semibold text-gray-500 gap-y-12 w-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/bank.png"
                  className="h-[120px] w-[120px] mb-6"
                />
              </div>
              <div className="bank">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleOnSubmit}
                >
                  <div>
                    <label
                      htmlFor="accountHolderName"
                      className="block mb-1 mt-4 text-sm font-medium"
                    >
                      Account holder name
                    </label>
                    <input
                      type="accountHolderName"
                      name="accountHolderName"
                      id="accountHolderName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                      onChange={handleOnChangeName}
                      value={name}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="accountNo"
                      className="block mb-1 text-sm font-medium"
                    >
                      Account Number
                    </label>
                    <input
                      type="accountNo"
                      name="accountNo"
                      id="accountNo"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                      onChange={handleOnChangeAccountNo}
                      value={accountNo}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ifscCode"
                      className="block mb-1 text-sm font-medium"
                    >
                      IFSC code
                    </label>
                    <input
                      type="ifscCode"
                      name="ifscCode"
                      id="ifscCode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                      onChange={handleOnChangeIfsc}
                      value={ifscCode}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full block mb-4 border bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
