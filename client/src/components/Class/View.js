import React, { useEffect } from 'react';

// Material UI imports
import { makeStyles, Snackbar, Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

// Local imports
import ViewEntry from './ViewEntry';

// Local Service
import { getStudents } from './../../services/students';
import { getStudentAttendance } from './../../services/record';

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
}));

const View = ({ id }) => {
    // The first commit of Material-UI
    // const defaultDate = '2020-01-01T21:11:54'
    const classes = useStyles();
    const [studentData, setStudentData] = React.useState({});
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [attendanceList, setAttendanceList] = React.useState([]);
    const [newUpdate, setNewUpdate] = React.useState(false);
    const [openSnackBarError, setOpenSnackBarError] = React.useState(false);
    const [asyncUpdate, setAsyncUpdate] = React.useState({
        update: false,
        date: new Date(),
    });
    const numberList = []

    const handleCloseErrorSnack = () => {
        setOpenSnackBarError(false);
    };

    const handleDateChange = (date) => {
        setAsyncUpdate({
            update: true,
            date,
        });
        setNewUpdate(true);
    };

    useEffect(async () => {
        if (Object.entries(studentData).length === 0) {
            try {
                setStudentData(await getStudents(id));
                const data = await getStudentAttendance(id, `${String(selectedDate).split(' ').slice(1, 4).join('-')}`);

                if (data.length === 0) {
                    setAttendanceList(data);
                }
                else {
                    setAttendanceList(data.presence);
                }

            } catch (error) {
                console.log(error);
                alert('Unable to fetch students');
            };
        };

        if (asyncUpdate.update) {
            setSelectedDate(asyncUpdate.date);
            const data = await getStudentAttendance(id, `${String(asyncUpdate.date).split(' ').slice(1, 4).join('-')}`);

            if (data.length === 0) {
                setAttendanceList(data);
                setOpenSnackBarError(true);
            }
            else {
                setAttendanceList(data[0].presence);
            }
            setAsyncUpdate(({
                update: false,
                date: asyncUpdate.date,
            }));
        }

    }, [asyncUpdate]);

    if (Object.entries(studentData).length === 0) {
        return (
            <>
            </>
        );
    } else {

        for (var i = 0; i < studentData.students.length; ++i) {
            numberList.push(i);
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
                        No attendance record found for this date!
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
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
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
                        <Grid container justify="center" alignItems="center" direction='column'>
                            <Grid className={classes.studentContainerBody} item xs={12}>
                                {studentData.students.map((entry) => {
                                    return (
                                        <Grid key={entry.id} item>
                                            <ViewEntry id={entry.id} list={attendanceList} profilePicture={entry.profilePicture} name={entry.name} update={newUpdate} setUpdate={setNewUpdate} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        );
    };
};

export default View;