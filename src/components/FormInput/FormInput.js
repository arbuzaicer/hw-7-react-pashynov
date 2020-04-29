import React from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {switchSelector} from '../../store/selectors/rootSelectors';

const useStyles = makeStyles({
  textfield: {
    width: 550,
    marginBottom: 10,
    transition: "0.5s",
    border: props => props.borderColor,
    "& > label": {
      transition: "0.5s",
      color: props => props.textColor,
    }
  },
});

const FromInput = ({ placeholder, onChange, value }) => {
  const selectMode = useSelector(switchSelector);
  const themeMode = {
    borderColor: selectMode ? "1px solid #262626" : "1px solid #ccc",
    textColor: selectMode ? "#262626" : "#ccc",
  };
  const classes = useStyles(themeMode);

  return (
    <TextField
      className={classes.textfield}
      label={placeholder}
      variant="outlined"
      onChange={onChange}
      value={value}
    />
  );
};

export default FromInput;
