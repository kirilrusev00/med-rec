import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Login } from "../../pages/Login";
import { AppFooter } from "../AppFooter";
import { Library } from "../../pages/Library";
import { Register } from "../../pages/Register";
import { PharmacyDrugs } from "../../pages/PharmacyDrugs";
import { DrugPageForPatient } from "../../pages/DrugPageForPatient";
import { CreateDrug } from "../../pages/CreateDrug";
import { UserProvider } from "../../hooks/use-current-user";
import { DrugPageForPharmacy } from "../../pages/DrugPageForPharmacy";
import { SinglePrescription } from "../../pages/SinglePrescription";
import { PrescriptionPage } from "../../pages/PrescriptionPage";

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <UserProvider>
        <AppHeader />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pharmacy/:id" element={<PharmacyDrugs />} />
          <Route
            path="/pharmacy/:pharmacyId/drugs/:drugId"
            element={<DrugPageForPatient />}
          />
          <Route path="/drugs/new" element={<CreateDrug />} />
          <Route path="/drugs/:drugId" element={<DrugPageForPharmacy />} />
          <Route path="/prescriptions/" element={<PrescriptionPage />} />
          <Route path="/prescriptions/:id" element={<SinglePrescription />} />
          <Route path="/" element={<Library />} />
        </Routes>
        <AppFooter />
      </UserProvider>
    </BrowserRouter>
  );
}
