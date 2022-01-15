import React from "react";
import { Patient } from "../../components/Patient";
import { Pharmacy } from "../../components/Pharmacy";

// 1) If the user is patient:
// Show a list of pharmacies (+ option for searching)
// When clicking on a pharmacy show a list of available drugs (+ option for searching)
// When clicking on a drug show details about the drug
// 2) If the user is pharmacy (need to get the id of the pharmacy somehow):
// Show a list of available drugs (+ option for searching and adding a drug)
// When clicking on a drug show details about the drug (+ option for deleting a drug)

let pharmacy = { id: 1, name: "Mareshki", address: "Ralevitsa 69" };

export function Library() {
  // TODO: check if the user is patient or pharmacy
  // return <Patient />;
  return <Pharmacy pharmacyId={pharmacy.id} />;
}
