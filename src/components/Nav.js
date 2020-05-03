import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();

  const handleClick = () => {
    alert('Hello, world!')
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={() => { handleClick() }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gatsby Pipeline
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
