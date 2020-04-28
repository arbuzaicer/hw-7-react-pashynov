import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FavoriteBorder, Share } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 700,
    margin: theme.spacing(2),
  },
  media: {
    height: 400,
  },
  socialSection: {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-end",
  },
  socialBlock: {
    marginRight: 25,
    width: "10%",
    display: "flex",
    justifyContent: "space-around",
  },
  social: {
    cursor: "pointer",
  },
}));

const SinglePost = ({ avatar, userName, name, imgContent, textContent }) => {
  const classes = useStyles();
  const randomValue = () => Math.floor(1000 * Math.random());
  const [value1, setValue1] = useState(randomValue());
  const [isValue1, setIsValue1] = useState(false);
  const [value2, setValue2] = useState(randomValue());
  const [isValue2, setIsValue2] = useState(false);

  const socialIconHandler = (value, isValue, setValue, setIsValue) => {
    !isValue ? setValue(value + 1) : setValue(value - 1);
    setIsValue(!isValue);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar=<Avatar alt="User post" src={avatar} />
        action=<IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
        title={name}
        subheader={userName}
      />
      <CardMedia
        className={classes.media}
        image={imgContent}
        title="Star wars app"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {textContent}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <div className={classes.socialSection}>
            <div className={classes.socialBlock}>
              {
                <FavoriteBorder
                  className={classes.social}
                  onClick={() =>
                    socialIconHandler(value1, isValue1, setValue1, setIsValue1)
                  }
                  color={isValue1 ? "primary" : "inherit"}
                />
              }
              {value1}
            </div>
            <div className={classes.socialBlock}>
              {
                <Share
                  className={classes.social}
                  color={isValue2 ? "primary" : "inherit"}
                  onClick={() =>
                    socialIconHandler(value2, isValue2, setValue2, setIsValue2)
                  }
                />
              }
              {value2}
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
