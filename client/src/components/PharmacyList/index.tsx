import { Pharmacy } from "../../models/Pharmacy";
import { PharmacyCard } from "../PharmacyCard";

export interface PharmacyListProps {
  pharmacies: Pharmacy[];
}

export function PharmacyList({ pharmacies }: PharmacyListProps) {
  return pharmacies ? (
    <>
      {pharmacies.map((pharmacy) => (
        <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </>
  ) : null;
}
