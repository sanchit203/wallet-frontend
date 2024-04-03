import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ISignUpRequest, signUpThunk } from "../feature/authenticationThunk";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useAppSelector(state =>state.loginSlice.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnChangeName = (event: any) => {
    setName(event.target.value);
  }

  const handleOnChangeEmail = (event: any) => {
    setEmail(event.target.value);
  }

  const handleOnChangePhoneNumber = (event: any) => {
    setPhoneNumber(event.target.value);
  }

  const handleOnChangeUsername = (event: any) => {
    setUsername(event.target.value);
  }

  const handleOnChangePassword = (event: any) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = (event: any)=> {
    event.preventDefault();
    const signUpData: ISignUpRequest = {
      name,
      username,
      phoneNumber,
      password,
      email
    }

    dispatch(signUpThunk(signUpData));
  }

  useEffect(()=>{
    if(isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

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
            <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
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
                  onChange={handleOnChangeName}
                  value={name}
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
                  onChange={handleOnChangeEmail}
                  value={email}
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
                  onChange={handleOnChangePhoneNumber}
                  value={phoneNumber}
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-medium"
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
              <button
                type="submit"
                className="w-full border bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-medium text-gray-500">
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
