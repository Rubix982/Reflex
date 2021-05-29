import React from 'react';
import { makeStyles } from '@material-ui/core/styles';import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Local imports
import Background from './../../assets/img/background_wallpaper/Login.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ClassroomEntry = (() => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Artificial Intelligence"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={Background}
        title="Artificial Intelligence"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam justo at scelerisque euismod. Phasellus semper malesuada sapien ut gravida. Aenean dapibus dignissim pellentesque. Suspendisse tincidunt ante in nulla tempor posuere. Phasellus venenatis sodales neque in laoreet.
        </Typography>
      </CardContent>
    </Card>
  );
});

export default ClassroomEntry;
