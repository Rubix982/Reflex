import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';

// Local imports
import Classroom from './Classroom';
import Statistics from './Statistics';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 650,
        height: 400,
        boxShadow: 'none',
    },
    spacing: {
        padding: '80px',
    },
}));

const Dashboard = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.spacing} container direction='row' justify='space-between' alignItems='stretch' spacing={12}>
                <Grid item xs={12}>
                    <Grid container direction='row' justify='space-between' alignItems='stretch' spacing={2}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Classroom />
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Statistics />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;