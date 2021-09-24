import React from 'react';
import { withStyles, Grid, TextField, Button } from '@material-ui/core';
import '../Styles/formStyle.css'
import axios from 'axios';
import swal from 'sweetalert';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 17,
    },
    padding: {
        padding: theme.spacing.unit *5
    }
});

class LoginTab extends React.Component {
    state = {
        email: "",
        password: ""
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.render()
        } else {
            this.setState({ token: token }, () => {
                this.props.history.push('/profile')
            })
        }
    }

    onChange = input => (e) => {
        this.setState({ [input]: e.target.value })
        console.log(input)
        console.log(e.target.value)
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    login = () => {

        axios.post("http://localhost:5000/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
            localStorage.setItem("token", res.data.results.data);
            this.props.history.push({
                pathname: "/profile",
                state: {userId: res.data.results.id}
            })
            localStorage.setItem("userId", res.data.results.id)
            // console.log(res.data.results.id)
            // this.props.history.push('/userForm');
        }).catch((err) => {
            swal({
                text: "Email atau Password Salah",
                icon: "error",
            });
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="mainPage">
                <div className="mainForm">
                    <div className={classes.padding}>
                        <div className={classes.margin}>
                            <p className="judulLogin">Login untuk Masuk</p>
                            <Grid container justify="center" style={{ marginTop: '10vh' }}>
                                <Grid item>
                                    <TextField id="username"
                                        className="loginField"
                                        placeholder="Email"
                                        type="email"
                                        defaultValue={this.state.email}
                                        onChange={this.onChange("email")}
                                        fullWidth autoFocus required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item>
                                    <TextField id="password"
                                        className="loginField"
                                        placeholder="Password"
                                        type="password"
                                        defaultValue={this.state.password}
                                        onChange={this.onChange("password")}
                                        fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px' }}>
                                <Button
                                    variant="outlined"
                                    className="loginButton"
                                    onClick={this.login}
                                    disabled={this.state.email === '' && this.state.password === ''}
                                    style={{ textTransform: "none" }}>
                                    Login
                                </Button>
                            </Grid>
                            <Grid container justify="flex-end" style={{ marginTop: '10px' }}>
                                <Button disableFocusRipple disableRipple variant="text" style={{ textTransform: "none", color: "#C8C8C8", fontSize: "20px" }}>Lupa Password?</Button>
                            </Grid>
                            <Grid container justify="space-around" alignItems="center" style={{ marginTop: '10px' }}>
                                <Grid item>
                                    <p style={{ color: "#C8C8C8", fontSize: "20px", fontWeight: "600" }}>Belum memiliki Akun?</p>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined"
                                        className="signUpButton"
                                        style={{ textTransform: "none" }}
                                        href="/register"
                                    // onClick={this.props.history.push('/register')}
                                    >Sign Up</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginTab);