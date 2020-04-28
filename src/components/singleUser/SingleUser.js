import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './SingleUser.scss';

const SingleUser = ({ avatar, name, username }) => (
  <Card className="user-single">
    <CardActionArea>
      <CardMedia className="user-single__media" image={avatar} title={name} />
      <CardContent className="user-single__content">
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="p">
          {username}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default SingleUser;
