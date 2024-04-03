import Header from "./components/mainHeader";
import HomePage from "./components/homePage";
import LandingPage from "./components/landingPage.tsx";
import LandingHeader from "./components/landingHeader";
import AllTransactions from "./components/homePage/allTransactions";
import MyProfile from "./components/myProfile";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import BankDetails from "./components/bankDetails";


function App() {
  return (
    <>
    <Header/>
    <BankDetails />
    </>
  );
}

export default App;
