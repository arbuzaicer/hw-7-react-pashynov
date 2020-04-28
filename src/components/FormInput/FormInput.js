import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    width: 550,
    "& label.Mui-focused": {
      color: "#1d3887",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1d3887",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#1d3887",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const FromInput = ({ placeholder, onChange, value }) => {
  const classes = useStyles();

  return (
    <CssTextField
      className={classes.margin}
      label={placeholder}
      variant="outlined"
      onChange={onChange}
      value={value}
    />
  );
};

export default FromInput;
