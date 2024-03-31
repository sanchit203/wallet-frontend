export default function Footer() {
    return (
        <>
            <footer className="absolute bottom-0 w-full bg-white">
                <div className="w-full mx-auto pl-4 pr-4 flex items-center justify-between m-4">
                    <div className="text-md text-gray-500 ml-2">© 2024
                        <a href="/" className="hover:underline"> WorldPay™</a>. All Rights Reserved
                    </div>
                    <div className="flex text-md text-gray-500 gap-x-2 items-center mr-2">
                        CONTACT US : 
                        <img className="w-4 h-4" src="https://cdn.iconscout.com/icon/free/png-512/free-phone-1767889-1502142.png?f=webp&w=512" alt="logo" />
                        00000-00000
                    </div>
                </div>
            </footer>
        </>
    )
}