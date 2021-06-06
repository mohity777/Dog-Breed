import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Logo from "../assets/gif/dogAnimation.gif"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "inline-flex",
    alignItems:"center",
    justifyContent:"center"
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Typography variant="h6" className={classes.title}>
          <img src={Logo} height={60} width={60} className={classes.center} />
          Dogs All Around
        </Typography>
      </AppBar>
    </div>
  );
}
