import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 550,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormSelect = ({ value, handleChange, options }) => {
  const classes = useStyles();
  const optionsData = options.map((option) => {
    return (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    );
  });

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">UsersId</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label="User"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {optionsData}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
