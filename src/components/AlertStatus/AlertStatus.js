import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertStatus = ({ type }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {type === "success" && (
        <Alert variant="filled" severity="success">
          Success!!! New item was created in DB!!!
        </Alert>
      )}
      {type === "fail" && (
        <Alert severity="error">
          Error!!! Please!!! Complete all text fields!!!
        </Alert>
      )}
    </div>
  );
};

export default AlertStatus;
