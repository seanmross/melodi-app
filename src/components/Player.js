import React from "react";
import { makeStyles } from "@material-ui/styles";
import { PlayCircleOutline, SkipNext, SkipPrevious } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  nowPlayingBar: {
    width: "100%",
    height: "115px",
    background: theme.palette.primary.main,
    display: 'flex',
    flexShrink: "0",
  },
  nowPlayingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: '1'
  },
  playbackContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  playbackIcons: {
    color: "#b3b3b3",
    padding: '4px'
  },
}));

const Player = () => {
    const classes = useStyles();

    return (
      <footer className={classes.nowPlayingBar}>
        <div className={classes.nowPlayingContainer}>left</div>
        <div className={classes.nowPlayingContainer}>
          <div className={classes.playbackContainer}>
            <SkipPrevious fontSize="medium" className={classes.playbackIcons} />
            <PlayCircleOutline
              fontSize="large"
              className={classes.playbackIcons}
            />
            <SkipNext fontSize="medium" className={classes.playbackIcons} />
          </div>
        </div>
        <div className={classes.nowPlayingContainer}>right</div>
      </footer>
    );
}

export default Player;
