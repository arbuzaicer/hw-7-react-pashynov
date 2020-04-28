import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchAction } from '../../store/actions/rootActions';
import { switchSelector } from '../../store/selectors/rootSelectors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles({
  text: {
    color: (props) => {
      return props.TextColor;
    },
    fontSize: "1.2em",
    fontFamily: '"Concert One", cursive',
  },
});

export default function CustomizedSwitches({ mode }) {
  const [state, setState] = React.useState({
    checkedC: mode,
  });
  const selectMode = useSelector(switchSelector);
  const themeColor = {
    TextColor: selectMode ? "#000" : "#fff",
  };

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(switchAction());
  };
  const classes = useStyles(themeColor);

  return (
    <div className="switch">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid className={classes.text} item>
            Light Side
          </Grid>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          </Grid>
          <Grid className={classes.text} item>
            Dark Side
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}
