import HomePage from "./components/homePage";
import LandingPage from "./components/landingPage.tsx";
import AllTransactions from "./components/homePage/allTransactions";
import MyProfile from "./components/myProfile";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import BankDetails from "./components/bankDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkLocalStorageForAccessTokenAndValidateItsTTL } from "./utilities/authUtils";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { ToastContainer } from "react-toastify";
import { MILLISECONDS_IN_AN_HOUR } from "./constant/Time";

function App() {
  const dispatch = useAppDispatch();
  const isCheckingLocalStorage = useAppSelector(state => state.loginSlice.isCheckingLocalStorage);
  const isLoggedIn = useAppSelector(state => state.loginSlice.isLoggedIn);

  useEffect(() => {
    checkLocalStorageForAccessTokenAndValidateItsTTL(dispatch);

    const intervalToValidateAccessToken = setInterval(
      () => checkLocalStorageForAccessTokenAndValidateItsTTL(dispatch),
      MILLISECONDS_IN_AN_HOUR
    );

    return () => clearInterval(intervalToValidateAccessToken);
  }, [dispatch]);

  if (isCheckingLocalStorage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/bank-details" element={isLoggedIn ? <BankDetails /> : <Navigate to="/" />} />
        <Route path="/my-profile" element={isLoggedIn ? <MyProfile /> : <Navigate to="/" />} />
        <Route path="/transactions" element={isLoggedIn ? <AllTransactions /> : <Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
