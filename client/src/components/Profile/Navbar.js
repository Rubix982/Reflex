import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';

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
        boxShadow: 'none',
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

    const [dashboardStyling, setDashboardStyling] = useState(`${classes.paper} ${classes.active} ${classes.options}`);
    const [profileStyling, setProfileStyling] = useState(`${classes.paper} ${classes.nonActive} ${classes.options}`);
    const [settingStyling, setSettingStyling] = useState(`${classes.paper} ${classes.nonActive} ${classes.options}`);

    const DashboardOption = () => {
        setOption(1);
        setDashboardStyling(`${classes.paper} ${classes.active} ${classes.options}`);
        setProfileStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
        setSettingStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);        
    };

    const ProfileOption = () => {
        setOption(2);
        setDashboardStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
        setProfileStyling(`${classes.paper} ${classes.active} ${classes.options}`);
        setSettingStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);        
    };

    const SettingOption = () => {
        setOption(3);
        setDashboardStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
        setProfileStyling(`${classes.paper} ${classes.nonActive} ${classes.options}`);
        setSettingStyling(`${classes.paper} ${classes.active} ${classes.options}`);        
    }

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
                <Grid width={1} className={classes.centerComponent} item xs={10} onClick={DashboardOption}>
                    <Paper width={1} className={dashboardStyling}>
                        <DashboardIcon />
                        <span className={classes.spacing}>
                            Dashboard
                        </span>
                    </Paper>
                </Grid>
                <Grid width={1} className={classes.centerComponent} item xs={10} onClick={ProfileOption}>
                    <Paper width={1} className={profileStyling}>
                        <SupervisedUserCircleIcon />
                        <span className={classes.spacing}>
                            Profile
                        </span>
                    </Paper>
                </Grid>
                <Grid width={1} className={classes.centerComponent} item xs={10} onClick={SettingOption}>
                    <Paper width={1} className={settingStyling}>
                        <SettingsIcon />
                        <span className={classes.spacing}>
                            Settings
                        </span>
                    </Paper>
                </Grid>                
            </Grid>
        </div>
    );
};

export default Navbar;