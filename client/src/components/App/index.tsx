import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Login } from "../../pages/Login";
import { AppFooter } from "../AppFooter";
import { Library } from "../../pages/Library";
import { Register } from "../../pages/Register";
import { PharmacyDrugs } from "../../pages/PharmacyDrugs";
import { DrugPage } from "../../pages/DrugPage";
import { CreateDrug } from "../../pages/CreateDrug";

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
        <Route path="/pharmacy/:id" element={<PharmacyDrugs />} />
        <Route
          path="/pharmacy/:pharmacyId/drugs/:drugId"
          element={<DrugPage />}
        />
        <Route
          path="/pharmacy/:pharmacyId/drugs/new"
          element={<CreateDrug />}
        />
        <Route path="/" element={<Library />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
}
