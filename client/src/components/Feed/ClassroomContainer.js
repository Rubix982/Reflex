import React from 'react';

// Local imports
import ClassroomEntry from './ClassroomEntry';

// Material UI Imports
import { fade, makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  containerSizing: {
    marginTop: '3em'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 330,
    width: 300,
    backgroundColor: "#c0c0c0"
  },
  control: {
    padding: theme.spacing(2)
  }  
}));

const ClassroomContainer = () => {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.containerSizing} maxWidth='lg'>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <ClassroomEntry className={classes.paper} />
                </Grid>
              ))}
            </Grid>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <ClassroomEntry className={classes.paper} />
                </Grid>
              ))}
            </Grid>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <ClassroomEntry className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ClassroomContainer;