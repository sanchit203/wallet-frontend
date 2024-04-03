export default function MyProfile() {
    return (
        <>
            <div className="p-6">
                <a href="">
                    <button type="button" className="flex items-center justify-center px-3 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg gap-x-2 hover:bg-gray-300">
                        <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Go back</span>
                    </button>
                </a>
                <h1 className="text-3xl mt-4 font-semibold flex justify-center">My Profile</h1>
                <div className="flex justify-center">
                    <div className="w-[400px] user mt-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl" >
                        <div className="p-1.5 font-semibold text-gray-500 text-center gap-y-12 w-full">
                            <div className="w-full flex justify-center">
                                <div className="h-[120px] w-[120px] mb-6 bg-blue-200 p-4 rounded-full">
                                    <img src="/images/profile.png" />
                                </div>
                            </div>
                            <p className="mb-1">Name: John Jacobs</p>
                            <p className="mb-1">Mobile No.: 9732498471</p>
                            <p>E-mail: blabla@123.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}