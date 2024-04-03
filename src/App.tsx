import Header from "./components/mainHeader";
import HomePage from "./components/homePage";
import LandingPage from "./components/landingPage.tsx";
import AllTransactions from "./components/homePage/allTransactions";
import MyProfile from "./components/myProfile";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import BankDetails from "./components/bankDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/transactions" element={<AllTransactions />} />
      </Routes>
    </>
  );
}

export default App;
