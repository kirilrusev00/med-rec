import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "16px",
  },
}));

export function AppFooter() {
  const classes = useStyles();

  return <Box className={classes.footer}>Adventure Squad 2022</Box>;
}
