import React from 'react';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
        border: '2.5px solid #000000',
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
                                    Profile
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.studentContainerBody} item xs={12}>
                        <Grid container direction='column' justify='center' alignItems='center'>
                            <Avatar className={classes.avatar} alt="Remy Sharp" src="/assets/img/classrooms/10.jpg" />

                            <div className={classes.biography}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit molestie elementum, eleifend ultrices fermentum nisi. Fringilla ipsum diam nunc sed egestas urna consectetur a nulla. Eu in nibh egestas tristique ut quisque porttitor. Magna a pretium ultricies bibendum sit odio sodales feugiat orci. At risus nunc amet tempus lectus ante lacus molestie. Tellus, urna, id elit dapibus ipsum elementum faucibus. Ipsum non senectus viverra blandit blandit etiam tellus pharetra. Sit ipsum arcu, a a enim nunc orci. Vel elit euismod iaculis nisl venenatis magna libero.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;