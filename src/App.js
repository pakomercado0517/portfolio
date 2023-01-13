import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GetCosts from "../src/pages/GetCosts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get/cost" element={<GetCosts />} />
      </Routes>
    </div>
  );
}

export default App;
