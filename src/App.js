import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./pages/Routes/AppRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
