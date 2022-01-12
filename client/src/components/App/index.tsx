import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Login } from "../../pages/Login";
import { AppFooter } from "../AppFooter";
import { Library } from "../../pages/Library";
import { Register } from "../../pages/Register";
import { Drugs } from "../Drugs";

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppHeader />

      {/* TODO:
      Create private route after auth service is created (and user provider) */}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pharmacy/:id" element={<Drugs />} />
        <Route path="/" element={<Library />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
}
