import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import logo from "../img/Spotify_Icon_RGB_White.png";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    paddingLeft: "0.5rem"
  },
}));

const AppToolbar = () => {
  const classes = useStyles();
  const appName = 'melodi';
  
  return (
    <AppBar>
      <Toolbar>
        <img src={logo} alt="logo" width="40px" />
        <Typography variant="h6" className={classes.title}>
          {appName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
