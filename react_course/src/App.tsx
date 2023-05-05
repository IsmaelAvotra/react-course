import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home_page";
import ProductsPage from "./pages/products/Products_page";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error/Error_page";
import { createContext, useEffect, useState } from "react";
import ProfilePage from "./pages/profile/Profile_page";

interface CurrentUserContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const AppContext = createContext<CurrentUserContextType>({
  username: "Unknown user",
  setUsername: () => {},
});

const App = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "Unknown user"
  );

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default App;
