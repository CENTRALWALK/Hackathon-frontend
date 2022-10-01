import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoonVisualization from "./pages/MoonVisualization";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/moonVisualization" element={<MoonVisualization />} />
    </Routes>
  );
}

export default MainRoute;
