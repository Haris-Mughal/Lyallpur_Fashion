import "./App.scss";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
// import { Header } from "antd/es/layout/layout";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
