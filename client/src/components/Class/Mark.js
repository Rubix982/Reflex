import React, { useEffect, useRef } from 'react';

// Material UI imports
import {
    makeStyles, Grid, FormControl,
    InputLabel, MenuItem, Select,
    Button, Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// Icon
import GroupAdd from '@material-ui/icons/GroupAdd';
import RemoveIcon from '@material-ui/icons/Remove';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

// Local imports
import MarkEntry from './MarkEntry';

// Local Service
import { getStudents } from './../../services/students';
import { markAttendance } from './../../services/marking';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    alertMsg: {
        fontSize: '20px',
    },
}));

const Mark = ({ id }) => {
    // The first commit of Material-UI
    const classes = useStyles();
    const selectedDefaultVal = useRef(null);
    const [canUpdateAttendance, setCanUpdateAttendance] = React.useState(false);
    const [attendance, setAttendance] = React.useState('Absent');
    const [studentData, setStudentData] = React.useState({});
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-01T21:11:54'));
    const [openSnackBarError, setOpenSnackBarError] = React.useState(false);
    const [openSnackBarSuccess, setOpenSnackBarSuccess] = React.useState(false);    
    const numberList = []
    const tempAttendanceList = []

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setAttendance(event.target.value);
        setCanUpdateAttendance(true);
    };

    const handleCloseErrorSnack = () => {
        setOpenSnackBarError(false);
    };

    const handleCloseSuccessSnack = () => {
        setOpenSnackBarSuccess(false);
    }

    const submitData = async () => {
        try {
            await markAttendance({
                course_id: id,
                date: String(selectedDate).split(' ').slice(0, 6).join(' ') + " PST",
                presence: tempAttendanceList,
                names: studentData.students.map(entry => entry.name),
            });
            setOpenSnackBarSuccess(true);
        } catch (err) {

            if (String(err).includes('Duplicate key error collection')) {
                console.log(err);
                setOpenSnackBarError(true);
            }
        }
    };

    useEffect(async () => {
        if (Object.entries(studentData).length === 0) {
            try {
                setStudentData(await getStudents(id));
            } catch (error) {
                console.log(error);
                alert('Unable to fetch students');
            };
        };
    });

    if (Object.entries(studentData).length === 0) {
        return (
            <>
            </>
        );
    } else {

        for (var i = 0; i < studentData.students.length; ++i) {
            numberList.push(i);
            tempAttendanceList.push(attendance);
        }

        studentData.students.forEach((entry, index) => {
            entry['id'] = index;
        });

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={openSnackBarError}
                    onClose={handleCloseErrorSnack}
                    message="Attendance being marked on same date - error"
                    key={'top center error'}
                >
                    <Alert className={classes.alertMsg} onClose={handleCloseErrorSnack} severity="error">
                        Attendance has already been marked on this date
                    </Alert>
                </Snackbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={openSnackBarSuccess}
                    onClose={handleCloseSuccessSnack}
                    message="Attendance successfully marked"
                    key={'top center success'}
                >
                    <Alert className={classes.alertMsg} onClose={handleCloseSuccessSnack} severity="success">
                        Success! Attendance marked
                    </Alert>
                </Snackbar>                
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
                                <InputLabel id="demo-simple-select-outlined-label">Default</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={attendance}
                                    onChange={handleChange}
                                    label="Attendance"
                                    inputRef={selectedDefaultVal}
                                >
                                    <MenuItem value={"Present"}><GroupAdd /><span className={`${classes.spacing} ${classes.dropdownStyling}`}>Present</span></MenuItem>
                                    <MenuItem value={"Absent"}><RemoveIcon /> <span className={`${classes.spacing} ${classes.dropdownStyling}`}>Absent</span></MenuItem>
                                    <MenuItem value={"Late"}><WatchLaterIcon /> <span className={`${classes.spacing} ${classes.dropdownStyling}`}>Late</span></MenuItem>
                                </Select>
                            </FormControl>
                            <Button onClick={submitData} className={classes.button} size='large' variant="contained">
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
                            {studentData.students.map((entry) => {
                                return (
                                    <Grid key={entry.id} item>
                                        <MarkEntry profilePicture={entry.profilePicture} name={entry.name} attendanceDefaultVal={attendance} updateAttendance={canUpdateAttendance} setUpdateAttendance={setCanUpdateAttendance} id={entry.id} entryAttendanceList={tempAttendanceList} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
};

export default Mark;