import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ISignInRequest, signInThunk } from "../feature/authenticationThunk";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useAppSelector(state =>state.loginSlice.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleOnChangeUsername = (event: any) => {
    setUsername(event.target.value);
  }

  const handleOnChangePassword = (event: any) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = (event: any)=> {
    event.preventDefault();
    const signUpData: ISignInRequest = {
      username,
      password
    }

    dispatch(signInThunk(signUpData));
  }

  useEffect(()=>{
    if(isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="p-8 flex flex-col">
      <div className="flex justify-center">
        <div className="w-[500px] block table mt-8 mb-8 p-4 bg-white border border-gray-200 rounded-2xl shadow-2xl">
          <div className="p-3">
            <Link to="/" className="flex justify-center">
              <img
                className="w-30 h-8 mb-8"
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
            <h1 className="text-xl font-bold leading-tight mb-6 tracking-tight text-gray-600 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 mt-4 text-sm font-medium"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={handleOnChangeUsername}
                  value={username}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={handleOnChangePassword}
                  value={password}
                />
              </div>

              <div className="font-medium text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="hover:underline font-medium text-sm text-blue-500"
                >
                  Sign up
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full block mb-4 border hover:bg-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
