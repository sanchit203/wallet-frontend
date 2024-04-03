import GoBackButton from "../GoBackButton";
import Header from "../mainHeader";

export default function TransactionDetail() {

    const status = "";   //to be worked
    const type = "d"
    return (
        <>
            <Header />
            <div className="p-6">
                <GoBackButton />
                <h1 className="text-3xl mt-4 font-semibold flex justify-center">
                    Transaction Details
                </h1>
                <div className="flex justify-center">
                    <div className="w-[400px] font-semibold text-gray-500 user mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
                        <div className="flex justify-between">
                            <div className="flex justify-between h-[120px] w-[120px] mb-4 bg-yellow-200 p-4 rounded-full">
                                <img src="/images/transaction-detail.png" />
                            </div>
                            <p className="bg-gray-200 rounded-full px-2 h-6">24 Mar 2024</p>
                        </div>
                        <hr />
                        {type ? (
                            <p className="mb-1 mt-4">Amount withdrawn</p>
                        ) : (
                            <p className="mb-1 mt-4">Amount added</p>
                        )}

                        <div className="flex items-center mb-1 gap-x-1">
                            <p className="text-3xl font-semibold">₹ 500</p>
                            {status ? (
                                <img src="/images/check.png" className="h-12 w-12" />
                            ) : (
                                <img src="/images/pending.png" className="h-7 w-7" />
                            )}
                        </div>
                        <p className="mb-4">Rupees Five Hundred Only</p>  {/* ye dekhlena apko dalna h ki ni */}
                        {!status && (
                            <p className="mt-4 bg-yellow-100 p-6 rounded-lg">Your transaction is in process.
                                It will be credited to your account upto next 48 hours.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
