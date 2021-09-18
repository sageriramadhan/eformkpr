import React, { Component, useState } from 'react';
import { makeStyles,createStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import '../Styles/DataSuamiIstri.css'
import Footer from './Footer'
import InputMask from "react-input-mask";

const styles = theme => createStyles({
    text: {
        width: '50vw'
    }
});

export class FormSuamiIstri extends Component {
    lanjut = e => {
        e.preventDefault();
        this.props.nextStep();
        console.log('nama suami/istri: ',this.props.values.namaSuamiIstri)
        console.log('tempat lahir suami/istri: ',this.props.values.tempatLahirSuamiIstri)
        console.log('tanggal lahir suami/istri: ',this.props.values.tanggalLahirSuamiIstri)
        console.log('nomor ktp suami/istri: ',this.props.values.nomorKTPSuamiIstri)
        console.log('nomor npwp suami/istri: ',this.props.values.nomorNPWPSuamiIstri)
        console.log('pekerjaan suami/istri: ',this.props.values.pekerjaanSuamiIstri)
        console.log('nomor telpon suami/istri: ',this.props.values.nomorTelponSuamiIstri)
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values,handleChange,classes} = this.props

        return (
            <div id='mainPage'>
                <div id='mainForm'>
                    <p className="judul">Data Suami / Istri</p>
                    <div id='formContainer'>
                        <div id='firstSubformContainer'>
                            <text className="subformTitle">Nama Lengkap Sesuai KTP</text>
                            <TextField
                                placeholder="Masukan Nama Lengkap Sesuai KTP"
                                name='namaSuamiIstri'
                                onChange={handleChange('namaSuamiIstri')}
                                defaultValue={values.namaSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            {/* {console.log('nama suami/istri: ',state.namaSuamiIstri)} */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Tempat/Tanggal Lahir</text>
                            <TextField
                                multiline
                                name='tempatLahirSuamiIstri'
                                placeholder="Masukan Tempat/Tanggal Lahir"
                                onChange={handleChange('tempatLahirSuamiIstri')}
                                defaultValue={values.tempatLahirSuamiIstri}
                                fullWidth
                                margin='dense'
                            /> 
                            {/* {console.log ('tempat lahir :',state.tempatLahirSuamiIstri)} */}
                            <TextField
                                id="date"
                                className={classes.text}
                                helperText="Masukan Tanggal Lahir Suami/Istri"
                                name='tanggalLahirSuamiIstri'
                                onChange={handleChange('tanggalLahirSuamiIstri')}
                                // onChange={(e) => setState(e.target.value)}
                                defaultValue={values.tanggalLahirSuamiIstri}
                                type="date"
                                margin='dense'
                            />
                            {/* {console.log('tangal lahir: ',state.tanggalLahirSuamiIstri)} */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Nomor KTP</text>
                            <TextField
                                placeholder="Masukan 16 digit Nomor KTP"
                                name='nomorKTPSuamiIstri'
                                onChange={handleChange('nomorKTPSuamiIstri')}
                                // onChange={(e) => setState(e.target.value)}
                                defaultValue={values.nomorKTPSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            {/* {console.log('nomor ktp: ',state.nomorKTPSuamiIstri)} */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Nomor NPWP</text>
                            <TextField
                                placeholder="Masukan Nomor NPWP"
                                name='nomorNPWPSuamiIstri'
                                onChange={handleChange('nomorNPWPSuamiIstri')}
                                // onChange={(e) => setState(e.target.value)}
                                defaultValue={values.nomorNPWPSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            {/* {console.log('nomor npwp: ',state.nomorNPWPSuamiIstri)} */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Pekerjaan</text>
                            <TextField
                                placeholder="Masukan Pekerjaan Saat Ini"
                                name='pekerjaanSuamiIstri'
                                onChange={handleChange('pekerjaanSuamiIstri')}
                                // onChange={(pekerjaanSuamiIstri) => setState(pekerjaanSuamiIstri.target.value)}
                                defaultValue={values.pekerjaanSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            {/* {console.log('pekerjaan: ',state.pekerjaanSuamiIstri)} */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Nomor Handphone</text>
                            <div>
                                <InputMask
                                    mask="+62 | 999-999-999-999"
                                    value={values.nomorTelponSuamiIstri}
                                    onChange={handleChange('nomorTelponSuamiIstri')}
                                    maskChar=" "
                                >
                                    {() => <TextField 
                                    placeholder="+62 | xxx-xxx-xxx"
                                    name='nomorTelponSuamiIstri'
                                    fullWidth
                                    margin='dense'/>}
                                </InputMask>
                            </div>
    
                            {/* 
                            <PhoneInput
                                international
                                defaultCountry="ID"
                                name='nomorTelponSuamiIstri'
                                // onChange={setTlp}
                                onChange={handleChange}
                                // value={tlp}
                                value={values.nomorTelponSuamiIstri}
                                margin='dense'
                            />
                            {/* {console.log('no.tlpn: ',state.nomorTelponSuamiIstri)} */}
                        </div>
                    </div>
                    <footer id='formButton'>
                        <Button
                            id='bckBtn'
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Kembali</Button>
    
                        <Button
                            id='nxtBtn'
                            color="primary"
                            variant="contained"
                            onClick={this.lanjut}
                        >Lanjut</Button>
                    </footer>
                </div>
            </div>
                
        );
    }

}

export default withStyles(styles)(FormSuamiIstri)