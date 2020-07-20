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
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    padding: "96px 24px 24px 24px",
    flex: "1 0 auto",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppToolbar />
      <div className={classes.content}>
        {Array.from({ length: 20 }, (v, i) => {
          return <div key={i}>{i+1}</div>;
        })}
      </div>
      <Player />
    </div>
  );
}

export default App;
