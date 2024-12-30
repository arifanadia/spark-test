import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import OverOns from "./components/vertical/Overons";
import App from "./App";
import HeroForm from "./components/Horizontal/HeroForm";
import Carousel from "./components/vertical/carousel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diensten" element={<Carousel />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<HeroForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;