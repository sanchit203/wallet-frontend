export default function SignIn() {
    return (
        <div className="p-8 flex flex-col">
            <div className="flex justify-center">
                <div className="w-[500px] block table mt-8 mb-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl" >
                    <div className="p-3">
                    <a href="/" className="flex justify-center"><img className="w-30 h-8 mb-8" src="/images/logo.png" alt="logo" /></a>
                        <h1 className="text-xl font-bold leading-tight mb-6 tracking-tight text-gray-600 md:text-2xl">Sign in to your account</h1>
                        <form className="space-y-4 md:space-y-6" action="/">
                            <div>
                                <label htmlFor="username" className="block mb-1 mt-4 text-sm font-medium">Username</label>
                                <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm font-medium">Password*</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>

                            <div>
                                <button type="submit" className="w-full block mb-4 border hover:bg-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                <a href="/" className="font-medium text-sm text-gray-500 hover:underline">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}