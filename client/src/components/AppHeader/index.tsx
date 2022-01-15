import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Button, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/use-current-user";
import { authService } from "../../services/auth-service";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    fontSize: "20px",
    color: "white",
  },
  icon: {
    marginRight: "10px",
  },
});

export function AppHeader() {
  const classes = useStyles();
  const user = useCurrentUser();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  function logout() {
    setAnchorEl(null);
    authService.logout();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <LocalHospitalIcon className={classes.icon} />
        <Link
          className={classes.title}
          color="secondary"
          underline="none"
          component={RouterLink}
          to="/"
        >
          MedRec
        </Link>

        {user && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
