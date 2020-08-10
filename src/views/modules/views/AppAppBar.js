import React from "react";
import PropTypes from "prop-types";
import ReactGA from "react-ga";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <MuiLink
            component={Link}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
          >
            {"onepirate"}
          </MuiLink>
          <div className={classes.right}>
            <MuiLink
              component={Link}
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/sign-in/"
            >
              {"Sign In"}
            </MuiLink>
            <MuiLink
              component={Link}
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/sign-up/"
              onClick={() => {
                ReactGA.event({
                  category: "Link",
                  action: "Register",
                });
              }}
            >
              {"Sign Up"}
            </MuiLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
