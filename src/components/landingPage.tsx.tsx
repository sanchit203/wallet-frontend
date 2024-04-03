export default function LandingPage() {
    return (
        <div className="flex justify-between ml-6 mr-6 mb-6 items-center h-[700px] rounded-lg columns" style={{ backgroundColor: "#5683d2" }}>
            <div className="ml-12 intro">
                <h1 className="acme-regular text-8xl text-white heading">Invest and grow</h1>
                <p className="mt-4 text-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, expedita aliquid cum <br /> at quas aperiam commodi electus iusto facere totam
                    consequuntur repellat ex quae maxime dignissimos.</p>
                <button type="button" className="flex gap-x-1 items-center text-gray-700 font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-1 focus:ring-yellow-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-4 mb-1">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right text-gray-700">
                        <path d="M18 8L22 12L18 16" /><path d="M2 12H22" />
                    </svg>
                </button>
            </div>
            <div>
                <img className="w-[750px] h-[600px] mr-4" src="/images/landing-page-banner.jpeg" alt="logo" />
            </div>
        </div>
    )
}