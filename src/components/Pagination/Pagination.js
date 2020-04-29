import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { switchSelector } from '../../store/selectors/rootSelectors';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    "& > ul > li > button": {
      transition: "0.5s",
      background: (props) => props.bgColor,
      color: (props) => props.textColor,
    },
  },
}));

const PaginationSection = ({ count, onPaginationChange }) => {
  const selectMode = useSelector(switchSelector);
  const themeMode = {
    bgColor: selectMode ? "rgba(38,38,38,0.35)" : "rgba(149,149,149,0.35)",
    textColor: selectMode ? "#262626" : "#ccc",
  };
  const classes = useStyles(themeMode);

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        onChange={onPaginationChange}
        className={classes.pagination}
      />
    </div>
  );
};

export default PaginationSection;
