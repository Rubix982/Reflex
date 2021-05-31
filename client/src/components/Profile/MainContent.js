import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Local imports
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: '96.7vh',
    },
    navbar: {
        background: `url('/assets/img/background/2.jpg') 70% 50% no-repeat`,

        /* Add the blur effect */
        borderRadius: '0px',

        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
}));

const MainContent = () => {
    const classes = useStyles();
    const [option, setOption] = useState(1);

    let { id } = useParams();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6} sm={2}>
                    <Paper className={`${classes.paper} ${classes.navbar}`}>
                        <Navbar setOption={setOption} />
                    </Paper>
                </Grid>
                <Grid width={1} item xs={6} sm={10}>
                    <Paper className={classes.paper}>
                        {option == 1 ? <Dashboard /> : option == 2 ? <Profile /> : <Settings />}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainContent;