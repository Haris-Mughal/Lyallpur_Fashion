import "./App.scss";
import Navbar from "./components/Header/Navbar";
import Topbar from "./components/Header/Topbar";
import Details from "./components/Footer/Details";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import ExchangeAndReturn from "./pages/ExchangeAndReturn";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Topbar />
        <AboutUs />
        <ExchangeAndReturn />
        <PrivacyPolicy />
      </header>
      <footer>
        <Details />
        <Footer />
      </footer>
    </>
  );
}

export default App;
