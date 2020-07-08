import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "115px",
    background: theme.palette.primary.main
  },
}));

const Player = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            player
        </footer>
    )
}

export default Player;
