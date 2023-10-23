import "./App.scss";
import Navbar from "./components/Header/Navbar";
import Topbar from "./components/Header/Topbar";
import Details from "./components/Footer/Details";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Topbar />
      </header>
      <footer>
        <Details />
        <Footer />
      </footer>
    </>
  );
}

export default App;
