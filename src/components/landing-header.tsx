export default function LandingHeader() {
    return (
        <header className="flex w-full items-center justify-between px-4 py-4 bg-white" style={{ height: 70 }}>
            <a href="/"><img className="w-28 h-8 ml-1" src="/images/logo.png" alt="logo" /></a>
            <div>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800">Sign in</button>
            </div>
        </header>
    )
}