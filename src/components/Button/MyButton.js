import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 550,
  },
}));

const MyButton = ({ onSubmit, type }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      type={type}
      className={classes.button}
      onClick={onSubmit}
    >
      Send
    </Button>
  );
};

export default MyButton;
