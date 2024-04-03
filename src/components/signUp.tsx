import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[500px] block table mt-8 mb-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
          <div className="p-3">
            <a href="/" className="flex justify-center">
              <img
                className="w-30 h-8 mb-8"
                src="/images/logo.png"
                alt="logo"
              />
            </a>
            <h1 className="text-xl font-bold leading-tight mb-6 tracking-tight text-gray-600 md:text-2xl">
              Create Account
            </h1>
            <form className="space-y-4 md:space-y-6" action="/">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 mt-4 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 text-sm font-medium"
                >
                  Phone no.
                </label>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-medium"
                >
                  Username*
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium"
                >
                  Password*
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded cursor-pointer"
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label>
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="/"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full border hover:bg-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
