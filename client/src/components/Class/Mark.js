import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// Icon
import GroupAdd from '@material-ui/icons/GroupAdd';
import RemoveIcon from '@material-ui/icons/Remove';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

// Local imports
import MarkEntry from './MarkEntry';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
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
    button: {
        width: '20%',
        borderRadius: "14px",
        border: '0.01px solid rgba(0, 0, 0, 0.02)',
        boxSizing: 'border-box',
        boxShadow: '0px 2px 18px 0.2px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        background: '#007AFF',
        color: '#ffffff',
    },
    buttonStyling: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '22px',
    },
    studentContainer: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
    },
    studentContainerHeader: {
        width: '974px',
        height: '62px',
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.38)',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px 20px 0px 0px',
        margin: 'auto',   
    },
    studentContainerHeaderText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center',
        margin: '18px',
    },
    studentContainerBody: {
        width: '100%',
        height: '754px',
        margin: 'auto', 
        border: '1px solid rgba(0, 0, 0, 0.38)',
        boxSizing: 'border-box',
        borderRadius: '0px 0px 20px 20px',                       
    },
    topHeader: {
        marginBottom: '50px',
    },
}));

const Mark = () => {
    // The first commit of Material-UI
    const classes = useStyles();
    const [attendance, setAttendance] = React.useState('');

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setAttendance(event.target.value);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.studentInfoContainer}>
                <Grid className={classes.topHeader} item xs={12}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            maxDate={new Date()}
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
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
                        <Button className={classes.button} size='large' variant="contained">
                            <span className={classes.buttonStyling}>
                                Finish Marking
                            </span>
                        </Button>
                    </Grid>
                </Grid>
                <Grid direction='column' justify='center' alignItems='center' className={classes.studentContainer} container >
                    <Grid container>
                        <Grid container direction="row"
                            justify="flex-start"
                            alignItems="flex-start">
                            <Grid className={`${classes.studentContainerHeader}`} item xs={12}>
                                <div className={classes.studentContainerHeaderText}>
                                    Students
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.studentContainerBody} item xs={12}>
                        <Grid item>
                            <MarkEntry />
                        </Grid>
                        <Grid item>
                            <MarkEntry />
                        </Grid>
                        <Grid item>
                            <MarkEntry />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default Mark;