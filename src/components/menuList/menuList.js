import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { menuNameAction } from '../../store/actions/rootActions';
import { withStyles } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import routes from '../../routes';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
  a: {
    textDecoration: "none",
  },
}))(MenuItem);

const MenuList = ({ anchorEl, handleClose }) => {
  const dispatch = useDispatch();
  const links = routes.map((item, ind) => {
    const routeName = item.routeTitle;
    return (
      <Link key={item+ind} to={item.path} onClick={() => dispatch(menuNameAction(routeName))}>
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary={item.routeTitle} />
        </StyledMenuItem>
      </Link>
    );
  });

  return (
    <>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links}
      </StyledMenu>
    </>
  );
};

export default MenuList;
