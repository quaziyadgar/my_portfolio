import { useState, useEffect, useMemo } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import {
  Home,
  About,
  Contact,
  Portfolio,
  Skills,
  Resume,
  Certificates,
} from "./pages/index";
import { Navbar } from "./components";
import { options } from "./utils.ts/particle";

import "./App.scss";

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  const particles = useMemo(() => options, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    let path = location.pathname.replace(new RegExp("/", "g"), "");
    if (path === "") path = "Yadgar's Portfolio";
    document.title = path.toUpperCase();
  }, [location.pathname]);

  return (
    <div className="App">
      {/* particles ts */}

      {init && location.pathname === "/" && (
        <Particles id="tsparticles" options={particles} />
      )}

      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
