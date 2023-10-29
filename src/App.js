import "./App.scss";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import AppRoutes from "./pages/Routes/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Header } from "antd/es/layout/layout";

function App() {
  return (
    <>
      {/* <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer> */}
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
