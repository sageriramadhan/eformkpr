import React, { Component } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import { withStyles, Grid, TextField, Button, MenuItem } from '@material-ui/core';
import '../Styles/formStyle.css'
import notarobot from "../notrobot.png"
import axios from 'axios';
import swal from 'sweetalert';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import rexter from "rexter";

const sitekey = "e76d04b5-85fd-4c27-b158-d521e16e1382";
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    padding: {
        paddingTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 22.5,
    }
});

class Register extends React.Component {

    state = {
        punyaRekening: false,
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        captchaValid: false,
        noRekening:''
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
    }


    register = () => {
        axios.post("http://localhost:5000/api/user/signup", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            noRekening: this.state.noRekening
        }).then((res) => {
            swal({
                text: "Sign Up Success",
                icon: "success",
            })
            this.props.history.push('/')
        }).catch((err) => {
            swal({
                text: "Sign Up Failed. Try Again",
                icon: "error",
            })
        })
    }

    handlePertanyaan = (event) => {
        console.log(event.target.value);
        console.log(event.target.name)
        if (event.target.value === "Ya") {
            this.setState({ punyaRekening: true })
        } else {
            this.setState({ punyaRekening: false })
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    handleVerificationSuccess = async response => {
        // note - if it wreen't for CORS this woulld work
        var bodyFormData = new FormData();
        console.log(bodyFormData)
        bodyFormData.set("secret", sitekey);
        bodyFormData.set("response", response);
        try {
            const { data } = await rexter.post(
                "https://hcaptcha.com/siteverify",
                bodyFormData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    crossdomain: true
                }
            );
            console.log("server response:", data);
            //setValidation(data);
            this.setState({ captchaValid: data });
        } catch (err) {
            // console.log("CANNOT SUBMIT:", response, err);
            this.setState({ captchaValid: true})
        }
        console.log(this.state.captchaValid)
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="mainPage">
                <div className="mainForm">
                    {/* <br /> */}
                    <div className={classes.padding}>
                        <div className={classes.margin}>
                            <p className="judulLogin">Daftar Menjadi Member</p>
                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item>
                                    <TextField
                                        // label={values.isNasabah === "" ? "Sudah memiliki rekening Muamalat?" : ""}
                                        label="Sudah memiliki rekening Muamalat?"
                                        // InputLabelProps={{ shrink: false }}
                                        onChange={event => this.handlePertanyaan(event)}
                                        // defaultValue={values.isNasabah}
                                        className="loginField"
                                        fullWidth
                                        select>
                                        <MenuItem value="Ya">Ya, saya sudah memiliki rekening bank Muamalat</MenuItem>
                                        <MenuItem value="Belum">Belum, saya belum memiliki rekening bank Muamalat</MenuItem>
                                    </TextField>
                                    {
                                        this.state.punyaRekening ?
                                            <Grid container justify="" alignItems="flex-end">
                                                <Grid item>
                                                    <TextField
                                                        type="text"
                                                        placeholder="Masukkan Nomor Rekening"
                                                        className="loginField"
                                                        defaultValue={this.state.noRekening}
                                                        onChange={this.onChange("noRekening")}
                                                        fullWidth required />
                                                </Grid>
                                            </Grid>
                                            : null
                                    }
                                </Grid>
                            </Grid>


                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item>
                                    <TextField
                                        id="name"
                                        type="text"
                                        autoComplete="off"
                                        defaultValue={this.state.name}
                                        onChange={this.onChange("name")}
                                        placeholder="Nama Lengkap Tanpa Singkatan"
                                        className="loginField"
                                        fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item >
                                    <TextField
                                        id="email"
                                        type="email"
                                        defaultValue={this.state.email}
                                        onChange={this.onChange("email")}
                                        placeholder="Email"
                                        className="loginField"
                                        fullWidth autoFocus required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item >
                                    <TextField
                                        id="nama"
                                        type="text"
                                        placeholder="Nomor Handphone"
                                        className="loginField"
                                        fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item >
                                    <TextField
                                        id="password"
                                        type="password"
                                        defaultValue={this.state.password}
                                        onChange={this.onChange("password")}
                                        placeholder="Password (8-12 Karakter)"
                                        className="loginField"
                                        fullWidth required />
                                </Grid>
                            </Grid>
                            <Grid container justify="center" alignItems="flex-end">
                                <Grid item >
                                    <TextField
                                        id="konfirmasi"
                                        type="password"
                                        defaultValue={this.state.confirm_password}
                                        onChange={this.onChange("confirm_password")}
                                        placeholder="Konfirmasi Password"
                                        className="loginField"
                                        fullWidth required />
                                </Grid>
                            </Grid>
                            {/* <Grid item>
                                <img src={notarobot} />
                            </Grid> */}
                            <HCaptcha
                                sitekey={sitekey}
                                onVerify={token => this.handleVerificationSuccess(token)}
                            />
                            <Grid container alignItems="center" justify="center" style={{ marginTop: '10px' }}>
                                <p>Dengan melakukan pendaftaran, saya setuju dengan <a style={{ fontWeight: "bold", textDecoration: "underline" }}>Kebijakan Syarat dan Privasi
                                    & Ketentuan Web Form Muamalat</a>
                                </p>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px' }}>
                                <Button
                                    variant="contained"
                                    className="loginButton"
                                    style={{ textTransform: "none" }}
                                    disabled={this.state.captchaValid === false}
                                    onClick={this.register}>
                                    Sign Up
                                </Button>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Register);
