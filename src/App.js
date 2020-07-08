import React from 'react';
import AppToolbar from './components/AppToolbar';
import Player from './components/Player';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    paddingLeft: "0.5rem",
  },
  mainContent: {
    padding: "96px 24px 0 24px",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppToolbar />
      <div className={classes.mainContent}>
        {Array.from({ length: 50 }, (v, i) => {
          return <div>{i}</div>;
        })}
      </div>
      <Player />
    </div>
  );
}

export default App;
