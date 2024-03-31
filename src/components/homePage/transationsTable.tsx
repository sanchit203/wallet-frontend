export default function TransactionsTable() {
    return (
        <div className="block mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between items-center p-2">
                <p className="text-lg font-semibold">Recent Transactions</p>
                <button className="font-semibold text-blue-600 hover:underline">View all</button>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500">DATE</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500">STATUS</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500">AMOUNT</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">20 MAR 2024</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500">Received</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">₹ 500.00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">23 FEB 2024</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500">Received</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">₹ 20.00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">08 FEB 2024</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500">Failed</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">₹ 10500.00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button" className="p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100">Details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}