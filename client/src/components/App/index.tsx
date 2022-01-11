import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Login } from "../Login";
import { AppFooter } from "../AppFooter";

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppHeader />
      {/* <Login /> */}
      <AppFooter />
    </BrowserRouter>
  );
}
