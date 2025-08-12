import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@src/pages/home";
import { Country } from "@src/pages/country";
import "./App.css";

function App() {
  const isDarkTheme = localStorage.getItem("countryIsDark");

  useEffect(() => {
    if (isDarkTheme === null) {
      localStorage.setItem("countryIsDark", "false");
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
