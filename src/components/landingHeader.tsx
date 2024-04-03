import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import SignOutButton from "./SignOutButton";

export default function LandingHeader() {
  const isLoggedIn = useAppSelector(state => state.loginSlice.isLoggedIn);

  return (
    <header
      className="flex w-full items-center justify-between px-4 py-4 bg-white"
      style={{ height: 70 }}
    >
      <Link to="/">
        <img className="w-30 h-8 ml-1" src="/images/logo.png" alt="logo" />
      </Link>
      <div>
        {isLoggedIn ? (
          <SignOutButton />
        ) : (
          <Link to="/sign-in">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800"
            >
              Sign in
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
