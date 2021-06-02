import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    makeStyles,
} from '@material-ui/core';

// Local imports
import ClassroomEntry from './ClassroomEntry';

// Local Services
import { getClassrooms, postClassroom } from './../../services/classrooms';

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
    studentHeader: {
        textAlign: 'right',
    },
    addStudent: {
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        display: 'flex',
        color: '#9DCDE4',
        padding: '0px',
    },
    transition: {
        borderRadius: '5px',
        transition: '0.6s',
        '&:hover': {
            background: '#474747',
            opacity: '0.6',
            color: '#FFFFFF',
        }
    }
}));

const Classroom = () => {
    // The first commit of Material-UI
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [receivedInput, setReceivedInput] = React.useState(false);
    const [classroomData, setClassroomData] = React.useState({});
    const name = useRef('');
    const description = useRef('');
    const image = useRef('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addClassroomToRecord = () => {
        handleClose(false);
        setReceivedInput(true);
    };

    useEffect(async () => {
        if (receivedInput == true) {
            try {
                await postClassroom({
                    name: name.current.value,
                    description: description.current.value,
                    image: image.current.value
                });

                setReceivedInput(false);
            } catch (error) {
                console.log(error);
                alert('Unable to store new classroom!');
            }
        }

        if (Object.entries(classroomData).length === 0) {
            try {
                setClassroomData(await getClassrooms());
            } catch (error) {
                console.log(error);
                alert('Unable to fetch classrooms');
            };
        };
    });

    if (Object.entries(classroomData).length === 0) {
        return (
            <>
            </>
        );
    } else {
        return (
            <Grid container className={classes.studentInfoContainer}>
                <Grid direction='column' justify='center' alignItems='center' className={classes.studentContainer} container >
                    <Grid container>
                        <Grid container direction="column"
                            justify="space-between"
                            alignItems="stretch"
                            className={`${classes.studentContainerHeader}`}>
                            <Grid item xs={6}>
                                <div className={`${classes.studentHeader} ${classes.studentContainerHeaderText}`}>
                                    Classrooms
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={`${classes.addStudent} ${classes.studentContainerHeaderText}`}>
                                    <Button className={`${classes.addStudent}`} onClick={handleClickOpen}>
                                        + Classroom
                                    </Button>
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Adding A New Classroom</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                To create a new class, please fill in the form below.
                                                The images can be chosen from <i>1.jpg, ... , 10.jpg</i>
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Name"
                                                type="email"
                                                fullWidth
                                                inputRef={name}
                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="description"
                                                label="Description"
                                                type="email"
                                                fullWidth
                                                inputRef={description}
                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="image"
                                                label="Image"
                                                type="email"
                                                fullWidth
                                                inputRef={image}
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={addClassroomToRecord} color="primary">
                                                Add
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.studentContainerBody} item xs={12}>
                        {classroomData.classrooms.map((entry) => {
                            return (
                                <Grid key={entry._id} item>
                                    <Link to={{ pathname: `/class/${entry._id}` }}>
                                    <ClassroomEntry description={entry.description} displayPicture={entry.displayPicture} name={entry.name} />
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
            </Grid>
            </Grid >
        );
    };
};

export default Classroom;