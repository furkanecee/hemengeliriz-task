import React from 'react';
import SectorCity from './components/sectorCity/Sector-city';
import Dashboard from './components/dashboard/Dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<SectorCity />}/>
      <Route index path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    );
};

export default App;