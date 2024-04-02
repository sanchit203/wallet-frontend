import TransactionsTable from "./homePage/transationsTable";

export default function HomePage() {
    return (
        <div className=" ml-6 mr-6 mb-6 h-[700px] rounded-lg block" style={{ backgroundColor: "#5683d2" }}>
            <div className="w-[350px] h-[180px] p-6 bg-white max-w-sm text-center rounded-2xl shadow-2xl mx-auto balance">
                <h5 className="mb-2 text-2xl font-bold text-gray-500">Total invested : ₹ 5869.04</h5>
                <h5 className="mb-2 text-xl font-bold text-gray-500 withdraw">Withdrawable : ₹ 352.04</h5>
                <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mt-2">WITHDRAW</button>
            </div>
            <div className="flex justify-center">
                <TransactionsTable />
            </div>
        </div>
    )
}