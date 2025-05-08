import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";

export const App = () => {
  return (
    <Router>
    <div className="flex bg-black flex-col min-h-screen">
     
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-black text-white p-6 min-h-screen">
            <Routes>
              <Route path="/" element={<AIAssistant />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
    </div>
    </Router>
  );
};