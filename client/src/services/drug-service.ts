import { Drug } from "../models/Drug";
import { User } from "../models/User";
import { HttpService } from "./http-service";

class DrugService {
  private http = new HttpService();

  getDrug(pharmacyId: number, drugId: number) {
    return this.http.get<Drug>(`/pharmacy/${pharmacyId}/drugs/${drugId}`);
  }

  getPharmacies(search: string) {
    return this.http.get<User[]>("/pharmacy/", {
      name: search,
    });
  }

  getAllDrugsOfPharmacy(pharmacyId: number, search: string) {
    return this.http.get<Drug[]>(`/pharmacy/${pharmacyId}/drugs`, {
      name: search,
    });
  }

  createDrug(pharmacyId: number, genericName: string) {
    return this.http.post<Drug>(`/pharmacy/${pharmacyId}/drug`, genericName);
  }

  deleteDrug(pharmacyId: number, drugId: number) {
    return this.http.delete<Drug>(`/pharmacy/${pharmacyId}/drug/${drugId}`);
  }
}

export const drugService = new DrugService();
