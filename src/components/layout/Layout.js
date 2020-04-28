import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { switchSelector } from '../../store/selectors/rootSelectors';
import { switchAction } from '../../store/actions/rootActions';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    minHeight: "90vh",
    background: (theme) => {
      return theme.color;
    },
  },
});

const Layout = (props) => {
  const selectMode = useSelector(switchSelector);
  const dispatch = useDispatch();
  const themeColor = {
    color: selectMode
      ? "linear-gradient(315deg, #d3d3d3 0%, #57606f 74%"
      : "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
  };
  useEffect(() => {
    dispatch(switchAction());
  }, [dispatch]);

  const classes = useStyles(themeColor);

  return <div className={classes.root}>{props.children}</div>;
};

export default Layout;
