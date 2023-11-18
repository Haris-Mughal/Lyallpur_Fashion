import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./pages/Routes/AppRoutes";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Header } from "antd/es/layout/layout";
>>>>>>> c303197d03cbb617de42ee3e709e092fbe152dc3

function App() {
  return (
    <>
      {/* <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
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
