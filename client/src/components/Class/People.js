import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';

// Local imports
import ViewEntry from './ViewEntry';


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
        margin: '150px auto',
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
        // justifyContent: 'center',
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

const People = () => {
    // The first commit of Material-UI
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.studentInfoContainer}>
                <Grid direction='column' justify='center' alignItems='center' className={classes.studentContainer} container >
                    <Grid container>
                        <Grid container direction="row"
                            justify="space-between"
                            alignItems="stretch"
                            className={`${classes.studentContainerHeader}`}>
                            <Grid item xs={6}>
                                <div className={`${classes.studentHeader} ${classes.studentContainerHeaderText}`}>
                                    Students
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={`${classes.addStudent} ${classes.studentContainerHeaderText}`}>
                                    <Button className={`${classes.addStudent}`} onClick={handleClickOpen}>
                                        + Students
                                    </Button>
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Adding A New Student</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                To add a new student to this class, please fill in the form below.
                                                The images can be chosen from <i>boy(1).svg, ... boy(5).svg</i>, and similarly from <i>girl(1).svg, ... girl(5).svg</i>
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Name"
                                                type="email"
                                                fullWidth
                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Image"
                                                type="email"
                                                fullWidth
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleClose} color="primary">
                                                Add
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.studentContainerBody} item xs={12}>
                        <Grid item>
                            <ViewEntry />
                        </Grid>
                        <Grid item>
                            <ViewEntry />
                        </Grid>
                        <Grid item>
                            <ViewEntry />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default People;