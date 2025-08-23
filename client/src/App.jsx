import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth";
import Home from "./pages/Home";
import { usePuterStore } from "./lib/puter";
import Upload from "./pages/Upload";

function App() {
  const {init} = usePuterStore();
  useEffect(()=>{
    init()
  },[init])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
