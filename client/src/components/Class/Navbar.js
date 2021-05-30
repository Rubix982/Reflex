import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Icons
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        height: '100%'
    },
    reflex: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '52px',
        lineHeight: '42px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        margin: 'auto',
        background: 'none',
    },
    centerComponent: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
    },
    options: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        color: '#FFFFFF',
        width: '100%',
    },
    active: {
        background: '#2A9D8F',
    },
    nonActive: {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    },
    spacing: {
        width: '100%'
    }
}));


const Navbar = ({ setOption }) => {

    const classes = useStyles();

    const [attendanceStyling, setAttendanceStyling] = useState(`${classes.paper} ${classes.active} ${classes.options}`);
    const [peopleStyling, setPeopleStyling] = useState(`${classes.paper} ${classes.nonActive} ${classes.options}`);

    const AttendanceOption = () => {
        setOption(1);
        setAttendanceStyling(`${classes.paper} ${classes.active} ${classes.options}`);
        setPeopleStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
    };

    const PeopleOption = () => {
        setOption(2);
        setAttendanceStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
        setPeopleStyling(`${classes.paper} ${classes.active} ${classes.options}`);
    };

    return (
        <div className={classes.root}>
            <Grid container direction="column"
                justify="flex-start"
                alignItems="baseline"
                width={1}
                spacing={3}>
                <Grid width={1} className={classes.centerComponent} item xs={10}>
                    <Paper className={`${classes.paper} ${classes.centerComponent} ${classes.reflex}`}>Reflex</Paper>
                </Grid>
                <Grid width={1} className={classes.centerComponent} item xs={10} onClick={AttendanceOption}>
                    <Paper width={1} className={attendanceStyling}>
                        <BookmarksOutlinedIcon />
                        <span className={classes.spacing}>
                            Attendance
                        </span>
                    </Paper>
                </Grid>
                <Grid width={1} className={classes.centerComponent} item xs={10} onClick={PeopleOption}>
                    <Paper width={1} className={peopleStyling}>
                        <PeopleAltOutlinedIcon />
                        <span className={classes.spacing}>
                            People
                        </span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Navbar;