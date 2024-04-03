import GoBackButton from "./GoBackButton";
import Header from "./mainHeader";

export default function BankDetails() {
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
            <div className="p-1.5 font-semibold text-gray-500 text-center gap-y-12 w-full">
              <div className="w-full flex justify-center">
                <img
                  src="/images/bank.png"
                  className="h-[120px] w-[120px] mb-6"
                />
              </div>
              <div className="bank">
                <p className="mb-1">Account holder name: John Jacobs</p>
                <p className="mb-1">Account No.: 34684324897865667</p>
                <p>IFSC code: GNEM4TEE4M85EHDN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
