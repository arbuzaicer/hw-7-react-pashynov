import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  menuSelector, switchSelector,
} from '../../store/selectors/rootSelectors';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MyMenu from '../menu';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  menu: {
    background: props => props.HeaderColor,
    color: props => props.TextColor
  }
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuNavName = useSelector(menuSelector);
  const selectMode = useSelector(switchSelector);
  const themeColor = {
    HeaderColor: selectMode
        ? "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)"
        : "linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)",
    TextColor: selectMode ?  "#000" : "#fff",
  };
  const handleMenuClose = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );
  const classes = useStyles(themeColor);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <MyMenu />
          <Typography className={classes.title} variant="h6" noWrap>
            {menuNavName}
          </Typography>
          <div className={classes.grow} />
          <p>Developed by M. Pashynov</p>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default Navbar;
