import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GetCosts from "../src/pages/GetCosts";
import MoneyCounter from "./pages/MoneyCounter";
import PaybackInformation from "./pages/PaybackInformation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<MoneyCounter />} />
        <Route path="/get/cost" element={<GetCosts />} />
        <Route path="/payback" element={<PaybackInformation />} />
      </Routes>
    </div>
  );
}

export default App;
