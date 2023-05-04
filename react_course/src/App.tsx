import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home_page";
import AboutPage from "./pages/about/About_page";
import ProductsPage from "./pages/products/Products_page";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error/Error_page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
