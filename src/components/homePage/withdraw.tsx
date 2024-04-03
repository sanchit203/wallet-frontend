import GoBackButton from "../GoBackButton";
import Header from "../mainHeader";

export default function Withdraw() {
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
                            <p>Withdrawable : ₹ 352.04</p>
                            <div className="bg-gray-200 text-xs rounded-md mt-2 p-1">
                                <p>John Jacobs</p>
                                <p>19008+73899300</p>
                                <p>BOBHANSIX</p>
                            </div>
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={() => { }}>
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
                                            className="lucide lucide-indian-rupee text-gray-500">
                                            <path d="M6 3h12" /><path d="M6 8h12" />
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
                                        required />
                                </div>
                            </form>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full block mb-4 mt-[200px] border bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Withdraw
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}