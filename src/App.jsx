import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ParisPage from "./Pages/ParisPage";
import FrancePage from "./Pages/FrancePage";
import TouristsPage from "./Pages/TouristsPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paris" element={<ParisPage />} />
        <Route path="/france" element={<FrancePage />} />
        <Route path="/tourists" element={<TouristsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
