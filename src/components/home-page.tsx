import TransactionsTable from "./homePage/transationsTable";

export default function HomePage() {
    return (
        <div className="flex justify-center items-center h-[700px] w-[1400px]">
            <div className="w-3/5">
                <div className="w-[500px] h-[200px] text-center p-6 bg-white border border-gray-200 rounded-xl shadow" style={{ backgroundColor: "#75c946" }}>
                    <h5 className="mb-2 text-3xl font-bold mt-6">Balance : ₹ 5869.04</h5>
                    <a href="/`" className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800">
                        ADD MONEY
                    </a>
                </div>
                <TransactionsTable />
            </div>
        </div>
    )
}