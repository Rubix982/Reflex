import React from 'react';

// Material UI imports
import {
    makeStyles,
    Grid,
    TextField,
    FormGroup,
    FormControlLabel,
    Typography,
    Snackbar,
    FormControl,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

import { changePassword } from './../../services/teacher';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    const oldPassword = React.useRef('');
    const newPassword = React.useRef('');
    const confirmPassword = React.useRef('');
    const [snackBar, setSnackBar] = React.useState({
        status: false,
        msg: '',
    });
    const [successSnackBar, setSuccessSnackBar] = React.useState({
        status: false,
        msg: '',
    });

    const submitData = async () => {
        if (newPassword.current.value != confirmPassword.current.value) {
            setSnackBar({
                status: true,
                msg: '"New Password" and "Confirm Password" fields are not the same'
            });
            return;
        };

        try {
            await changePassword(oldPassword.current.value,
                newPassword.current.value,
                confirmPassword.current.value);
            setSuccessSnackBar({
                status: true,
                msg: 'Password successfully changed!',
            })
        } catch (error) {
            console.log(error);
            setSnackBar({
                status: true,
                msg: 'Password could not be changed',
            });
        };
    };

    const handleClose = () => {
        setSnackBar({
            status: false,
            msg: '',
        });
    }

    const handleSuccessSnackBarClose = () => {
        setSuccessSnackBar({
            status: false,
            msg: '',
        });
    }

    return (
        <div className={classes.root}>
            <Grid container className={classes.studentInfoContainer}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={snackBar.status}
                    onClose={handleClose}
                    message="Password could not be changed"
                    key={'top center error'}
                >
                    <Alert className={classes.alertMsg} onClose={handleClose} severity="error">
                        {snackBar.msg}
                    </Alert>
                </Snackbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={successSnackBar.status}
                    onClose={handleSuccessSnackBarClose}
                    message="Password could not be changed"
                    key={'top center success'}
                >
                    <Alert className={classes.alertMsg} onClose={handleClose} severity="success">
                        {successSnackBar.msg}
                    </Alert>
                </Snackbar>
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
                                <FormGroup>
                                    <FormControlLabel
                                        control={<TextField
                                            type='password'
                                            required
                                            id="old-password"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                            inputRef={oldPassword}
                                        />}
                                        label={<Typography className={classes.formLabelStyle} uariant="headline" component="h3"> Old Password</Typography>}
                                        labelPlacement="start"
                                        className={classes.formLabelStyle}
                                    />
                                    <FormControlLabel
                                        control={<TextField
                                            type='password'
                                            required
                                            id="new-password"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                            inputRef={newPassword}
                                        />}
                                        label={<Typography className={classes.formLabelStyle} uariant="headline" component="h3"> New Password</Typography>}
                                        labelPlacement="start"
                                        className={classes.formLabelStyle}
                                    />
                                    <FormControlLabel
                                        control={<TextField
                                            type='password'
                                            required
                                            id="confirm-password"
                                            label=""
                                            defaultValue=""
                                            variant="filled"
                                            inputRef={confirmPassword}
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
                                        <div className={classes.submitText} onClick={submitData}>Submit!</div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
};

export default Settings;