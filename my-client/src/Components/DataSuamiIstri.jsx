import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Styles/formStyle.css'
import InputMask from "react-input-mask";
import { FormControl } from '@material-ui/core';
import { FormLabel } from 'react-bootstrap';

const styles = theme => createStyles({
    root: {
        "& .MuiFormLabel-root": {
            // color: "red"
        }
    },
    label: {
        color: "#490E73",
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "Open Sans"
    },
    formControl: {
        left: 150,
        right: 150
    },
    text: {
        width: "641px",
        display: "flex"
    }
});

export class FormSuamiIstri extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange, classes } = this.props

        return (
            <div className='mainPage'>
                <div className='mainForm'>
                    <p className="judul">Data Suami / Istri</p>
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Nama Lengkap Sesuai KTP</FormLabel>
                        <TextField
                            className={classes.text}
                            label={values.namaSuamiIstri === "" ? "Masukkan Nama Lengkap Sesuai KTP" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleChange('namaSuamiIstri')}
                            defaultValue={values.namaSuamiIstri}
                            fullWidth
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Tempat/Tanggal Lahir</FormLabel>
                        <TextField
                            className={classes.text}
                            label={values.tempatLahirSuamiIstri === "" ? "Tempat Lahir" : ""}
                            onChange={handleChange('tempatLahirSuamiIstri')}
                            defaultValue={values.tempatLahirSuamiIstri}
                            InputLabelProps={{ shrink: false }}
                            fullWidth
                            margin='normal'
                        />
                        <TextField
                            id="date"
                            className={classes.text}
                            // label={values.tanggalLahirSuamiIstri === "" ? "Tanggal Lahir" : ""}
                            onChange={handleChange('tanggalLahirSuamiIstri')}
                            // InputLabelProps={{ shrink: false }}
                            // onChange={(e) => setState(e.target.value)}
                            defaultValue={values.tanggalLahirSuamiIstri}
                            type="date"
                            margin='normal'
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Nomor KTP</FormLabel>
                        <InputMask
                            mask="9999999999999999"
                            value={values.nomorKTPSuamiIstri}
                            onChange={handleChange("nomorKTPSuamiIstri")}
                            maskChar=" "
                        >
                            {() => <TextField
                                className={classes.text}
                                placeholder="Masukkan 16 Digit Nomor KTP"
                                name="nomorKTPSuamiIstri"
                                fullWidth
                                margin="normal"
                            />}
                        </InputMask>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Nomor NPWP</FormLabel>
                        <InputMask
                            mask="999999999999999"
                            value={values.nomorNPWPSuamiIstri}
                            onChange={handleChange('nomorNPWPSuamiIstri')}
                            maskChar=" "
                        >
                            {() => <TextField
                                className={classes.text}
                                placeholder="Masukkan Nomor NPWP"
                                name="nomorNPWPSuamiIstri"
                                fullWidth
                                margin='normal'
                            />}
                        </InputMask>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Pekerjaan</FormLabel>
                        <TextField
                             className={classes.text}
                             label={values.pekerjaanSuamiIstri === "" ? "Masukkan Pekerjaan" : ""}
                             InputLabelProps={{ shrink: false }}
                            onChange={handleChange('pekerjaanSuamiIstri')}
                            // onChange={(pekerjaanSuamiIstri) => setState(pekerjaanSuamiIstri.target.value)}
                            defaultValue={values.pekerjaanSuamiIstri}
                            fullWidth
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Nomor Handphone</FormLabel>
                        <div>
                            <InputMask
                                mask="+62 | 999-9999-99999"
                                value={values.nomorTelponSuamiIstri}
                                onChange={handleChange('nomorTelponSuamiIstri')}
                                maskChar=" "
                            >
                                {() => <TextField
                                    className={classes.text}
                                    placeholder="+62 | xxx-xxxx-xxxx"
                                    name='nomorTelponSuamiIstri'
                                    fullWidth
                                    margin='normal' />}
                            </InputMask>
                        </div>
                    </FormControl>
                    <br/>
                    <br/>
                    <br/>
                    <div className="footer">
                        <Button
                            className="button1"
                            variant="contained"
                            onClick={this.back}
                        >Periksa Kembali</Button>

                        <Button
                            className="button2"
                            variant="contained"
                            onClick={this.continue}
                        >Lanjut</Button>
                    </div>
                </div>
            </div >

        );
    }

}

export default withStyles(styles)(FormSuamiIstri)