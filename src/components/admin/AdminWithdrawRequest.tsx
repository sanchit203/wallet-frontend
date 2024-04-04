import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getTransacationsThunk } from "../../feature/transactionSlice";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

export default function AdminWithdrawRequest() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTransacationsThunk());
    }, []);

    const [clicked, setClicked] = useState(false);

    const handleUpdate = () => {
        setClicked(!clicked);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = () => {
        
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full block table mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
                    {/* {transactions.length === 0 ? (
                        <div className="p-2 text-m font-semibold text-gray-500">
                            No transactions found
                        </div>
                    ) : ( */}
                    <div className="p-1.5">
                        <div className="border rounded-lg shadow overflow-scroll h-[500px] table-height">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 sticky top-0">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 text-start text-xs font-medium text-gray-500"
                                        >
                                            USERNAME
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
                                            NAME IN BANK
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
                                    {/* {transactions.map((transaction, index) => {
                                            return ( */}
                                    <tr
                                    // key={index}
                                    >
                                        <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
                                            jstsanam
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            7011573591
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            64538273647192039
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            HGRIFE87JG4J
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            SANAM YADAV
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            ₹ 5000
                                        </td>
                                        <td
                                            className={`px-2 py-4 whitespace-nowrap text-sm`}
                                        >
                                            <div>
                                                <div className="block">
                                                    <Button
                                                        id="basic-button"
                                                        aria-controls={open ? "basic-menu" : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? "true" : undefined}
                                                        onClick={handleClick}
                                                    >
                                                        Pending
                                                    </Button>
                                                    <Menu
                                                        id="basic-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                            "aria-labelledby": "basic-button"
                                                        }}
                                                    >
                                                        <MenuItem onClick={handleSelect}>PENDING</MenuItem>
                                                        <MenuItem onClick={handleSelect}>SUCCESS</MenuItem>
                                                    </Menu>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`px-2 py-4 whitespace-nowrap text-sm`}>
                                            <button
                                                type="submit"
                                                className={`p-2 items-center gap-x-2 text-sm rounded-lg border rounded-md hover:bg-gray-100 ${clicked ? 'bg-green-300 hover:bg-green-400' : ''}`}
                                                onClick={handleUpdate}
                                            >
                                                {clicked ? 'Updated' : 'Update'}
                                            </button>
                                        </td>
                                    </tr>
                                    {/* );
                                        })} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}