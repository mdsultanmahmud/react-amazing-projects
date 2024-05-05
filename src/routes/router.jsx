import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherHomePage from "../pages/Weather";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import CalculatorPage from "../pages/Weather/Calculator";

const AppRouter = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/weather" element={<WeatherHomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRouter;
