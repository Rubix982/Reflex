import React from 'react';

// Material UI imports
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Icon
import GroupAdd from '@material-ui/icons/GroupAdd';
import RemoveIcon from '@material-ui/icons/Remove';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


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
        margin: 'auto',
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
    },
    spacing: {
        marginLeft: '10px',
    },
    dropdownStyling: {
        /* Subtitle 2 - medium 14 (18, 0.1px) */
        fontStyle: 'normal',
        fontWeight: 'light',
        fontSize: '24px',
        lineHeight: '18px',

        /* identical to box height, or 129% */
        alignItems: 'center',
        letterSpacing: '0.1px',
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
    },
    entryDetail: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: '25%',
    },
    fullDim: {
        width: '100%',
        height: '100%',
    }
}));

const MarkEntry = () => {
    const classes = useStyles();
    const [attendance, setAttendance] = React.useState('');

    const handleChange = (event) => {
        setAttendance(event.target.value);
    };

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
                            <Avatar alt="Remy Sharp" src="/assets/img/students/boy.svg" />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid className={classes.entryDetail}  item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Attendance</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={attendance}
                                onChange={handleChange}
                                label="Attendance"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}><GroupAdd /><span className={`${classes.spacing} ${classes.dropdownStyling}`}>Present</span></MenuItem>
                                <MenuItem value={20}><RemoveIcon /> <span className={`${classes.spacing} ${classes.dropdownStyling}`}>Absent</span></MenuItem>
                                <MenuItem value={30}><WatchLaterIcon /> <span className={`${classes.spacing} ${classes.dropdownStyling}`}>Late</span></MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid className={classes.entryDetail} item xs={3}>
                    <Paper className={classes.paper}>
                        <span className={`${classes.name} ${classes.fullDim}`}>
                            Saif Ul Islam
                        </span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default MarkEntry;