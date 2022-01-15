export interface User {
  id: number;
  type: "patient" | "pharmacy";
  name: string;
  address: string;
}
