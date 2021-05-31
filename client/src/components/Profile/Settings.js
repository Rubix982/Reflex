import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, FormLabel, FormControl, FormGroup, FormControlLabel, Typography, Button, FormHelperText, Checkbox } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(3),
    },
    studentContainer: {
        margin: '150px auto',
    },
    studentContainerHeader: {
        height: '100%',
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.38)',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px 20px 0px 0px',
        margin: 'auto',
        background: "#F3D1A5",
    },
    studentContainerHeaderText: {
        fontFamily: 'Roboto',
        fontStyle: 'light',
        fontWeight: 'light',
        fontSize: '72px',
        lineHeight: '100%',
        /* or 72px */

        alignItems: 'center',
        textAlign: 'center',

        color: '#000000',
    },
    top: {
        paddingTop: '100px',
        paddingBottom: '100px',
        width: '100%',
        background: '#F7EBDC',
        border: '1px solid rgba(0, 0, 0, 0.38)',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.25)',
        borderRadius: '0px 0px 20px 20px',
    },
    formLabelStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '32px',
        lineHeight: '100%',
        /* or 36px */

        alignItems: 'center',
        textAlign: 'center',

        color: '#000000',
    },
    submit: {
        width: '315px',
        height: '69px',
        background: '#1E1115',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        transition: 'none !important',
        '&:hover': 'none',
        margin: 'auto',
        marginRight: '5px',
    },
    submitText: {
        margin: '15px',
        width: '100%',
        height: '100%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '36px',
        lineHeight: '100%',
        /* or 36px */

        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#FFFFFF',
    }
}));

const Settings = () => {
    // The first commit of Material-UI
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.studentInfoContainer}>
                <Grid direction='column' justify='center' alignItems='center' className={classes.studentContainer} container >
                    <Grid container>
                        <Grid container direction="row"
                            justify="space-between"
                            alignItems="stretch"
                            className={`${classes.studentContainerHeader}`}>
                            <Grid item xs={12}>
                                <div className={`${classes.studentContainerHeaderText}`}>
                                    Account
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" justify="space-between" alignItems='center'>
                        <Grid className={classes.top} container direction='column' justify='space-between' alignItems='center'>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                                <FormGroup>
                                    <FormControlLabel
                                        control={<TextField
                                            required
                                            id="filled-required"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                        />}
                                        label={<Typography className={classes.formLabelStyle} uariant="headline" component="h3"> Old Password</Typography>}
                                        labelPlacement="start"
                                        className={classes.formLabelStyle}
                                    />
                                    <FormControlLabel
                                        control={<TextField
                                            required
                                            id="filled-required"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                        />}
                                        label={<Typography className={classes.formLabelStyle} uariant="headline" component="h3"> New Password</Typography>}
                                        labelPlacement="start"
                                        className={classes.formLabelStyle}
                                    />
                                    <FormControlLabel
                                        control={<TextField
                                            required
                                            id="filled-required"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                        />}
                                        label={<Typography className={classes.formLabelStyle} uariant="headline" component="h3"> Confirm Password</Typography>}
                                        labelPlacement="start"
                                        className={classes.formLabelStyle}
                                    />
                                </FormGroup>
                            </FormControl>
                            <Grid container direction='row' justify='flex-end' alignItems='flex-end'>
                                <Grid>
                                    <div className={classes.submit}>
                                        <div className={classes.submitText} >Submit!</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Settings;