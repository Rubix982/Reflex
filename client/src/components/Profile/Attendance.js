import React from 'react';

// Material imports
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    },
    button: {
        marginTop: '10px',
        background: "#E0E1E1",
        border: '1px solid #000000',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '40px',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '28px',
        display: 'flex',
        alignItems: 'center',
    },
    attendanceButton: {
        marginTop: '200px',
    }
}));


const Attendance = ({setOption}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid direction='column' alignItems='center' container justify="space-between" spacing={spacing}>
                    <Button variant='contained' size="large" className={`${classes.button} ${classes.attendanceButton}`} startIcon={<VisibilityIcon />} onClick={() => setOption(3)}>
                        <span className={classes.buttonText}>View Attendance</span>
                    </Button>
                    <Button variant='contained' size="large" className={classes.button} startIcon={<SpellcheckIcon />} onClick={() => setOption(4)}>
                        <span className={classes.buttonText}>Mark Attendance</span>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Attendance;