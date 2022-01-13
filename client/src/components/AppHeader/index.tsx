import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Button, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

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

        {/* TODO:
          - Show the button only if user is logged in 
          - Make the button work */}

        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
