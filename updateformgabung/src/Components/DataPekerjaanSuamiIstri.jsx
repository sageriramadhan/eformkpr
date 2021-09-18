import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
// import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import CurrencyInput from './CurrencyInput';
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import { Select, FormControl, InputLabel } from "@material-ui/core";
import '../Styles/DataSuamiIstri.css'
import Footer from './Footer'
import InputMask from "react-input-mask";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

const styles = theme => createStyles({
    formControl: {
      margin: 0,
      width: 450
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    text: {
        width: '50vw'
    }
});

export class FormPekerjaanSuamiIstri extends Component {
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
                    <p className="judul">Data Pekerjaan Suami / Istri</p>
                    <div id='formContainer'>
                        <div id='firstSubformContainer'>
                            <text className="subformTitle">Lama Bekerja</text>
                            <TextField
                                placeholder="Masukan Lama Bekerja dalam Tahun"
                                name='lamaBekerjaSuamiIstri'
                                onChange={handleChange('lamaBekerjaSuamiIstri')}
                                defaultValue={values.lamaBekerjaSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Jenis Pekerjaan</text>
                            <TextField
                                placeholder="Masukan Jenis Pekerjaan"
                                name='jenisPekerjaanSuamiIstri'
                                onChange={handleChange('jenisPekerjaanSuamiIstri')}
                                defaultValue={values.jenisPekerjaanSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Status Pekerjaan</text>
                            <FormControl className={clsx(classes.formControl,classes.root)}>
                                <TextField
                                    label={values.statusPekerjaanSuamiIstri === "" ? "Masukan Status Pekerjaan" : ""}
                                    className={classes.text}
                                    name='statusPekerjaanSuamiIstri'
                                    InputLabelProps={{ shrink: false }}
                                    onChange={handleChange('statusPekerjaanSuamiIstri')}
                                    defaultValue={values.statusPekerjaanSuamiIstri}
                                    select
                                    fullWidth
                                    margin='dense'>
                                    <MenuItem value="Karyawan Tetap">Karyawan Tetap</MenuItem>
                                    <MenuItem value="Karyawan Kontrak">Karyawan Kontrak</MenuItem>
                                </TextField>
                            </FormControl>
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Data Perusahaan</text>
                            <TextField
                                placeholder="Masukan Nama Perusahaan"
                                name='namaPerusahaanSuamiIstri'
                                onChange={handleChange('namaPerusahaanSuamiIstri')}
                                defaultValue={values.namaPerusahaanSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            <TextField
                                placeholder="Masukan Kantor / Tempat Usaha"
                                name='tempatUsahaSuamiIstri'
                                onChange={handleChange('tempatUsahaSuamiIstri')}
                                defaultValue={values.tempatUsahaSuamiIstri}
                                fullWidth
                            />
                            <TextField
                                placeholder="Masukan Kategori Instansi"
                                name='kategoriInstansiSuamiIstri'
                                onChange={handleChange('kategoriInstansiSuamiIstri')}
                                defaultValue={values.kategoriInstansiSuamiIstri}
                                fullWidth
                            />
                            <TextField
                                placeholder="Masukan Bidang Usaha"
                                name='bidangUsahaSuamiIstri'
                                onChange={handleChange('bidangUsahaSuamiIstri')}
                                defaultValue={values.bidangUsahaSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                            <TextField
                                placeholder="Masukan Jumlah Karyawan"
                                name='jumlahKaryawanSuamiIstri'
                                onChange={handleChange('jumlahKaryawanSuamiIstri')}
                                defaultValue={values.jumlahKaryawanSuamiIstri}
                                fullWidth
                            />
                            <TextField
                                placeholder="Masukan Telepon Kantor"
                                name='teleponKantorSuamiIstri'
                                onChange={handleChange('teleponKantorSuamiIstri')}
                                defaultValue={values.teleponKantorSuamiIstri}
                                fullWidth
                            />
                            <TextField
                                placeholder="Masukan Telepon HRD"
                                name='teleponHrdSuamiIstri'
                                onChange={handleChange('teleponHrdSuamiIstri')}
                                defaultValue={values.teleponHrdSuamiIstri}
                                fullWidth
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Jabatan</text>
                            <TextField
                                placeholder="Masukan Jabatan Saat Ini"
                                name='jabatanSuamiIstri'
                                onChange={handleChange('jabatanSuamiIstri')}
                                defaultValue={values.jabatanSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Pendapatan per Bulan</text>
                            <CurrencyTextField
                                className={classes.root}
                                name='pendapatanBulananSuamiIstri'
                                defaultValue={values.pendapatanBulananSuamiIstri}
                                currencySymbol="Rp | "
                                decimalCharacter=","
                                digitGroupSeparator="."
                                onChange={handleChange('pendapatanBulananSuamiIstri')}
                                inputProps={{style: { textAlign: 'left',display: "flex",flexWrap: 'wrap'}}}
                            />
                            {/* <CurrencyInput
                                id='currencyContainer'
                                name='pendapatanBulananSuamiIstri'
                                placeholder="Rp | 0"
                                onChange={handleChange}
                                defaultValue={values.pendapatanBulananSuamiIstri}
                                fullWidth
                                margin='dense'
                            /> */}
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Pembayaran Gaji</text>
                            <FormControl className={clsx(classes.formControl,classes.root)}>
                                <TextField
                                    label={values.pembayaranGajiSuamiIstri === "" ? "Masukan Cara Pembayaran Gaji" : ""}
                                    className={classes.text}
                                    name='pembayaranGajiSuamiIstri'
                                    InputLabelProps={{ shrink: false }}
                                    onChange={handleChange('pembayaranGajiSuamiIstri')}
                                    defaultValue={values.pembayaranGajiSuamiIstri}
                                    select
                                    fullWidth
                                    >
                                    <MenuItem value="Transfer Bank Muamalat">Transfer Bank Muamalat</MenuItem>
                                    <MenuItem value="Transfer Bank Lain">Transfer Bank Lain</MenuItem>
                                </TextField>
                            </FormControl>
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Alamat Email HRD</text>
                            <TextField
                                placeholder="Masukan Alamat Email HRD"
                                name='emailHrdSuamiIstri'
                                onChange={handleChange('emailHrdSuamiIstri')}
                                defaultValue={values.emailHrdSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">Alamat Email Atasan</text>
                            <TextField
                                placeholder="Masukan Alamat Email Atasan"
                                name='emailAtasanSuamiIstri'
                                onChange={handleChange('emailAtasanSuamiIstri')}
                                defaultValue={values.emailAtasanSuamiIstri}
                                fullWidth
                                margin='dense'
                            />
                        </div>
    
                        <div className='subformContainer'>
                            <text className="subformTitle">No. Telepon Atasan</text>
                            <div>
                                <InputMask
                                    mask="+62 | 999-999-999-999"
                                    value={values.teleponAtasanSuamiIstri}
                                    onChange={handleChange('teleponAtasanSuamiIstri')}
                                    maskChar=" "
                                >
                                    {() => <TextField 
                                    placeholder="+62 | xxx-xxx-xxx"
                                    name='teleponAtasanSuamiIstri'
                                    fullWidth
                                    margin='dense'/>}
                                </InputMask>
                            </div>
                        </div>
                            {/* <PhoneInput
                                international
                                defaultCountry="ID"
                                name='teleponAtasanSuamiIstri'
                                onChange={handleChange}
                                defaultValue={values.teleponAtasanSuamiIstri}
                                fullWidth
                                margin='dense'
                            /> */}
                        
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

export default withStyles(styles)(FormPekerjaanSuamiIstri)