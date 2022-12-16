import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Cars from "./pages/Cars";
import CarsFormE from "./pages/CarsFormE";
import CarsFormI from "./pages/CarsFormI";
import Art from "./pages/Art";
import Merchandising from "./pages/Merchandising";
import HallOfPrestige from "./pages/HallOfPrestige";
import "./App.css";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/Merchandising" element={<Merchandising />} />
          <Route path="/HallOfPrestige" element={<HallOfPrestige />} />
          <Route path="/CarsFormI" element={<CarsFormI />} />
          <Route path="/CarsFormE" element={<CarsFormE />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
