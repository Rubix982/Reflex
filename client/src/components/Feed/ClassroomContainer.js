import React, { useState, useEffect } from 'react';

// Local imports
import ClassroomEntry from './ClassroomEntry';
import { getClassroomsForTeacher } from '../../services/classrooms';

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

// Local imports
import Background from './../../assets/img/background_wallpaper/Login.jpg';

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

    const ids = []

    const CompleteGridView = teacherData.classrooms.map((entry) => {
      
      ids.push(entry._id);
      
      return (<Grid key={entry._id} item>
        <ClassroomEntry title={entry.name} subheader={entry.created} image={`/assets/img/classrooms/${entry.displayPicture}`} content={entry.description} className={classes.paper} />
      </Grid>
      )
    });

    console.log(CompleteGridView);

    return (
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.containerSizing} maxWidth='lg'>
          <Grid container className={classes.root} spacing={8}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={8}>
                {/* {ids.map((value) => (
                  <Grid key={value} item>
                    <ClassroomEntry title={"Artificial Intelligence"} subheader={"September 14, 2016"} image={Background} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam justo at scelerisque euismod. Phasellus semper malesuada sapien ut gravida. Aenean dapibus dignissim pellentesque. Suspendisse tincidunt ante in nulla tempor posuere. Phasellus venenatis sodales neque in laoreet."} className={classes.paper} />
                  </Grid>
                ))} */}
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