import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterComponents from "./pages/FooterComponents";
// import { Header } from "antd/es/layout/layout";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <FooterComponents />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
