import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Login } from "../../pages/Login";
import { AppFooter } from "../AppFooter";
import { Library } from "../../pages/Library";
import { Register } from "../../pages/Register";
import { PharmacyDrugs } from "../../pages/PharmacyDrugs";
import { DrugPageForPatient } from "../../pages/DrugPageForPatient";
import { CreateDrug } from "../../pages/CreateDrug";
import { PrivateRoute } from "../PrivateRoute";
import { UserProvider } from "../../hooks/use-current-user";
import { DrugPageForPharmacy } from "../../pages/DrugPageForPharmacy";

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <UserProvider>
        <AppHeader />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/pharmacy/:id" element={<PharmacyDrugs />} />
          <PrivateRoute
            path="/pharmacy/:pharmacyId/drugs/:drugId"
            element={<DrugPageForPatient />}
          />
          <PrivateRoute path="/drugs/new" element={<CreateDrug />} />
          <PrivateRoute
            path="/drugs/:drugId"
            element={<DrugPageForPharmacy />}
          />
          <PrivateRoute path="/" element={<Library />} />
          <Navigate to={{ pathname: "/" }} />
        </Routes>
        <AppFooter />
      </UserProvider>
    </BrowserRouter>
  );
}
