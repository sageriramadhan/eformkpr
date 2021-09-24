import React, { Component } from 'react';
import { withStyles, Grid, Divider, TextField, Button, MenuItem, List, ListItem, ListItemText } from '@material-ui/core';
import '../Styles/formStyle.css'
import axios from 'axios';
// import { Divider } from '@mui/material';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    padding: {
        paddingTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 22.5,
    },
    divider: {
        marginTop: theme.spacing.unit,
        color: '#6A0081',
    }
});

class Profile extends React.Component {

    state = {
        token: "",
        userId: "",
        section1: {
            name: "",
            email: ""
        }
    }

    async componentDidMount() {
        let token = await localStorage.getItem('token');
        let userId = await localStorage.getItem('userId')
        if (!token) {
            this.props.history.push('/')
        } else {
            this.setState({ token: token }, () => {
                // this.fetchUser()
                axios.get(`http://localhost:5000/api/user/${userId}`)
                    .then((response) => {
                        this.setState({ section1: response.data.results.data })
                    }).catch((err) => {
                        console.log("gagal fetch")
                    })
            })
        }
    }

    logOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userId", "");
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props;
        const {
            section1, token
        } = this.state

        return (
            <div className="mainPage">
                <div className="mainForm">
                    <div className={classes.padding}>
                        <div className={classes.margin}>
                            <div className="profileContainer">
                                <h2 className="sectionTitle">Profil</h2>
                                <Divider className={classes.divider} />
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Nama Lengkap" secondary={section1.name} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email" secondary={section1.email} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="No. Rekening Bank Muamalat" secondary="0" />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="profileContainer">
                                <div className="pengajuanKPR">
                                    <h2 className="sectionTitle">KPR diajukan</h2>
                                    <Button
                                        className="profileButton"
                                        variant="contained"
                                        onClick href="http://localhost:3000/userForm">

                                        Ajukan KPR
                                    </Button>
                                </div>
                                <Divider className={classes.divider} />
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Nama Lengkap" secondary={section1.name} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email" secondary={section1.email} />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="profileContainer">
                                <h2 className="sectionTitle">Bukti Bayar KPR</h2>
                                <Divider className={classes.divider} />
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Nama Lengkap" secondary={section1.name} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email" secondary={section1.email} />
                                    </ListItem>
                                </List>
                            </div>
                            <Grid container justify="center" style={{ marginTop: '20px' }}>
                            <Button
                                className="logOutButton"
                                variant="contained"
                                onClick={this.logOut}>
                                Log Out
                            </Button>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);