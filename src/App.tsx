import Header from "./components/mainHeader";
import HomePage from "./components/homePage";
import LandingPage from "./components/landing-page";
import LandingHeader from "./components/landingHeader";
import AllTransactions from "./components/homePage/allTransactions";
import MyProfile from "./components/myProfile";

function App() {
  return (
    <>
      <Header />
      <div className="">
        <HomePage />
      </div>
    </>
  );
}

export default App;
