import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import ClassroomEntry from './ClassroomEntry';
import { getClassroomsForTeacher } from '../../services/classrooms';

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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

  const classes = useStyles();

  const [teacherData, setTeacherData] = useState({});

  useEffect(async () => {
    if (Object.entries(teacherData).length === 0) {
      try {
        const data = await getClassroomsForTeacher();
        setTeacherData(data);
      } catch (err) {
        alert('Unable to fetch classrooms!');
      };
    };
  });

  if (Object.entries(teacherData).length === 0) {
    return (
      <>
      </>
    );
  } else {

    const CompleteGridView = teacherData.classrooms.map((entry) => {

      return (
        <Grid key={entry._id} item>
          <Link to={{ pathname: `/class/${entry._id}` }}>
            <ClassroomEntry title={entry.name} subheader={entry.created} image={`/assets/img/classrooms/${entry.displayPicture}`} content={entry.description} className={classes.paper} />
          </Link>
        </Grid >
      )
    });

    return (
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.containerSizing} maxWidth='lg'>
          <Grid container className={classes.root} spacing={8}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={8}>
                {CompleteGridView}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  };
};

export default ClassroomContainer;