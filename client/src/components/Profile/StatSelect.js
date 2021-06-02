import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Local component
import ClassroomEntry from './ClassroomEntry';

// Local services
import { getClassrooms } from './../../services/classrooms';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const StatSelect = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [classroomData, setClassroomData] = React.useState({});
    const [dataReceived, setDataReceived] = React.useState(false);

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(async () => {
        try {
            await setClassroomData(await getClassrooms());
            setDataReceived(true);
        } catch (error) {
            alert('Classroom information could not be fetched');
        }
    }, []);

    if (!dataReceived) {
        return (
            <>
            </>
        )
    } else {
        return (
            <div>
                <Button onClick={handleClickOpen}>Open select dialog</Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Classroom</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange}
                                    label="Classroom"
                                    inputProps={{
                                        name: 'classrom',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {classroomData.classrooms.map((entry) => {
                                        return (
                                            <option key={entry._id} value={entry._id}>
                                                <Grid key={entry._id} item>
                                                    <ClassroomEntry description={entry.description} displayPicture={entry.displayPicture} name={entry.name} />
                                                </Grid>
                                            </option>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={handleClose} color="primary">
                            Ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default StatSelect;