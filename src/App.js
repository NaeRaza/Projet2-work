import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import SidebarBurger from "./components/sidebarBurger/SidebarBurger"
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Home/>
        <Sidebar/>
      </Router>
    </>
  );
}

export default App;
