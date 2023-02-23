import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { themes } from "./assets/themes";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MobileMenu from "./components/MobileMenu";
import { MenuProvider } from "./context/menu-context";
import { UserProvider } from "./context/user-context";


function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <UserProvider>
        <MenuProvider>
          <BrowserRouter>
            <MobileMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
