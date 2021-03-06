import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Icons

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        height: '100%',
    },
    entry: {
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.34)',
        boxSizing: 'border-box',
        boxShadow: '0px 2px 18px 0.2px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: '10px',
    },
    name: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        color: '#000000',
        marginLeft: '5px',
    },
    entryDetail: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: '25%',
    },
    fullDim: {
        width: '100%',
        height: '100%',
    },
}));

const PeopleEntry = ({ profilePicture, name }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={`${classes.entry} ${classes.entryDetail}`} container direction="row"
                justify="flex-start"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid className={classes.fullDim} container direction='row' justify='center' alignItems='center' >
                            <Avatar alt={name} src={`/assets/img/students/${profilePicture}`} />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid className={classes.entryDetail} item xs={3}>
                    <Paper className={classes.paper}>
                        <span className={`${classes.name} ${classes.fullDim}`}>
                            {name}
                        </span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default PeopleEntry;