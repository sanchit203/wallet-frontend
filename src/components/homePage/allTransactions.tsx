import Header from "../mainHeader";

export default function AllTransactions() {
    return (
        <>
            <Header />
            <h1 className="text-3xl mt-4">Transactions</h1>
            <div className=" w-[700px] block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl" >
                
                <div className="p-1.5">

                    <div className="border rounded-lg shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-2 py-3 text-start text-xs font-medium text-gray-500">DATE</th>
                                    <th scope="col" className="px-2 py-3 text-start text-xs font-medium text-gray-500">AMOUNT</th>
                                    <th scope="col" className="px-2 py-3 text-end text-xs font-medium text-gray-500">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">20 MAR'24</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">₹ 500.00</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">23 FEB'24</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-red-500">₹ 20.00</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800">08 FEB'24</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-green-500">₹ 10500.00</td>
                                    <td className="px-2 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}