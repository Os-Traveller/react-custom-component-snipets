import { Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Home from "./components/navbar/Home";
import NavbarOverflow from "./components/navbar/NavbarOverflow";
import NavbarWithoutOverflow from "./components/navbar/NavbarWithoutOverflow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav-overflow" element={<NavbarOverflow />} />
        <Route path="nav-without-overflow" element={<NavbarWithoutOverflow />} />
        <Route path="hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
