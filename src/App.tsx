import Footer from "./components/footer";
import Header from "./components/main-header";
import HomePage from "./components/home-page";
import LandingPage from "./components/landing-page";
import LandingHeader from "./components/landing-header";

function App() {
  return (
    <>
      <LandingHeader />
      <div className="flex justify-center"><LandingPage /></div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
