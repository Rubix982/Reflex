import React from 'react';

// Material UI imports
import { makeStyles, Snackbar, Grid, Avatar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { getProfile } from './../../services/teacher';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    studentContainer: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        margin: '150px auto',
    },
    studentContainerHeader: {
        background: "#F3D1A5",
        border: '1px solid rgba(0, 0, 0, 0.38)',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px 20px 0px 0px',
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
        background: '#F7EBDC',
        paddingBottom: '100px',
    },
    avatar: {
        width: '245px',
        height: '245px',
        border: '0.5px solid #000000',
        boxShadow: '0px 0px 10px 4px rgba(0, 0, 0, 0.25)',
        margin: '10px',
    },
    biography: {
        margin: '10px 40px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '28px',
        textAalign: 'center',
        color: '#000000',
    }
}));

const Profile = () => {
    // The first commit of Material-UI
    const classes = useStyles();
    const [data, setData] = React.useState({});
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const [snackBar, setSnackBar] = React.useState(false);

    React.useEffect(async () => {
        try {
            setData(await getProfile());
            setDataLoaded(true);
        } catch (error) {
            console.log(error);
            setSnackBar(true);
        };
    }, []);

    const handleSnackBar = () => {
        setSnackBar(false);
    };

    if (!dataLoaded) {
        return (
            <>
            </>
        )
    } else {

        console.log(data);

        return (
            <div className={classes.root}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={4000}
                    open={snackBar}
                    onClose={handleSnackBar}
                    message="Unable to load profile information - error"
                    key={'top center error'}
                >
                    <Alert onClose={handleSnackBar} severity="error">
                        Profile could not be loaded!
                    </Alert>
                </Snackbar>
                <Grid container className={classes.studentInfoContainer}>
                    <Grid direction='column' justify='center' alignItems='center' className={classes.studentContainer} container >
                        <Grid container>
                            <Grid container direction="row"
                                justify="space-between"
                                alignItems="stretch"
                                className={`${classes.studentContainerHeader}`}>
                                <Grid item xs={12}>
                                    <div className={`${classes.studentContainerHeaderText}`}>
                                        {data.UserName}
                                </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.studentContainerBody} item xs={12}>
                            <Grid container direction='column' justify='center' alignItems='center'>
                                <Avatar className={classes.avatar} alt={data.UserName} src={`/assets/img/students/${data.ProfilePicture}`} />

                                <div className={classes.biography}>
                                    <p>
                                        {data.Biography}
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default Profile;