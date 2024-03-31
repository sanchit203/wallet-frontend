export default function Header() {
    return (
        <header className="flex w-full items-center justify-between px-4 py-4 bg-white" style={{ height: 70 }}>
            <a href="/"><img className="w-48 h-28" src="/images/logo.png" alt="logo" /></a>
            <div className="flex gap-x-4 text-lg font-bold">
                <button className="rounded-full bg-transparent px-6 pb-2 pt-2.5 text-sm font-medium transition duration-150 hover:bg-blue-100">HOME</button>
                <button className="rounded-full bg-transparent px-6 pb-2 pt-2.5 text-sm font-medium transition duration-150 hover:bg-blue-100">DEPOSIT</button>
                <button className="rounded-full bg-transparent px-6 pb-2 pt-2.5 text-sm font-medium transition duration-150 hover:bg-blue-100">WITHDRAW</button>
                <button className="rounded-full bg-transparent px-6 pb-2 pt-2.5 text-sm font-medium transition duration-150 hover:bg-blue-100">TRANSACTIONS</button>
                <button>
                    <img className="w-10 h-10 ml-8" src="https://cdn.iconscout.com/icon/free/png-512/free-user-1851010-1568997.png?f=webp&w=512" alt="logo" />
                </button>
            </div>
        </header>
    )
}