import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
// import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import CurrencyInput from './CurrencyInput';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import { Select, FormControl, InputLabel } from "@material-ui/core";
import '../Styles/Form.css'
import Footer from './Footer'
import InputMask from "react-input-mask";


function DataPekerjaanSuamiIstri (props) {

    const{nextStep,prevStep,values,handleChange} = props
    const lanjut = e => {
        e.preventDefault();
        props.nextStep();
    };
    
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    
    // const [state, setState] = useState({
    //     lamaBekerjaSuamiIstri: '',
    //     jenisPekerjaanSuamiIstri: '',
    //     statusPekerjaanSuamiIstri: '',
    //     namaPerusahaanSuamiIstri: '',
    //     tempatUsahaSuamiIstri: '',
    //     kategoriInstansiSuamiIstri: '',
    //     bidangUsahaSuamiIstri: '',
    //     jumlahKaryawanSuamiIstri: '',
    //     teleponKantorSuamiIstri: '',
    //     teleponHrdSuamiIstri: '',
    //     jabatanSuamiIstri: '',
    //     pendapatanBulananSuamiIstri: '',
    //     pembayaranGajiSuamiIstri: '',
    //     emailHrdSuamiIstri: '',
    //     emailAtasanSuamiIstri: '',
    //     teleponAtasanSuamiIstri: '',
    // })
    // const [tlp,setTlp] = useState({teleponAtasanSuamiIstri: ''})
    // const {lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri, statusPekerjaanSuamiIstri, namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, kategoriInstansiSuamiIstri,bidangUsahaSuamiIstri,jumlahKaryawanSuamiIstri,teleponKantorSuamiIstri,teleponHrdSuamiIstri,jabatanSuamiIstri,pendapatanBulananSuamiIstri,pembayaranGajiSuamiIstri,emailHrdSuamiIstri,emailAtasanSuamiIstri} = state
    // const values = {lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri, statusPekerjaanSuamiIstri, namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, kategoriInstansiSuamiIstri,bidangUsahaSuamiIstri,jumlahKaryawanSuamiIstri,teleponKantorSuamiIstri,teleponHrdSuamiIstri,jabatanSuamiIstri,pendapatanBulananSuamiIstri,pembayaranGajiSuamiIstri,emailHrdSuamiIstri,emailAtasanSuamiIstri}
    // const handleChange = input => e => {
    //     setState({ [input]: e.target.value });
    // };

    const useStyles = makeStyles((theme) => ({
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
    }));
    const classes = useStyles();
    // const [form, setForm] = useState([])
    // const simpan = (e) => {
    //     e.preventDefault()
    //     let style = e.target.style
    //     style['box-shadow'] = 'none'
    //     setTimeout(() => {
    //         style['box-shadow'] = '3px 3px 5px rgb(80,80,80)'
    //     },100)

    //     axios(({
    //         url: `http://localhost:5000/api/form/edit/${id}`,
    //         method: 'PUT',
    //         data: {
    //             namaSuamiIstri: namaSuamiIstri,
    //             tempatLahirSuamiIstri: tempatLahirSuamiIstri, 
    //             tanggalLahirSuamiIstri: tanggalLahirSuamiIstri, 
    //             nomorKTPSuamiIstri: nomorKTPSuamiIstri, 
    //             nomorNPWPSuamiIstri: nomorNPWPSuamiIstri, 
    //             pekerjaanSuamiIstri: pekerjaanSuamiIstri, 
    //             nomorTelponSuamiIstri: nomorTelponSuamiIstri
    //         }
    //     }))
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                                onChange={handleChange}
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
                            onChange={handleChange}
                            defaultValue={values.namaPerusahaanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        <TextField
                            placeholder="Masukan Kantor / Tempat Usaha"
                            name='tempatUsahaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.tempatUsahaSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Kategori Instansi"
                            name='kategoriInstansiSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.kategoriInstansiSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Bidang Usaha"
                            name='bidangUsahaSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.bidangUsahaSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                        <TextField
                            placeholder="Masukan Jumlah Karyawan"
                            name='jumlahKaryawanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.jumlahKaryawanSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Telepon Kantor"
                            name='teleponKantorSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.teleponKantorSuamiIstri}
                            fullWidth
                        />
                        <TextField
                            placeholder="Masukan Telepon HRD"
                            name='teleponHrdSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.teleponHrdSuamiIstri}
                            fullWidth
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Jabatan</text>
                        <TextField
                            placeholder="Masukan Jabatan Saat Ini"
                            name='jabatanSuamiIstri'
                            onChange={handleChange}
                            defaultValue={values.jabatanSuamiIstri}
                            fullWidth
                            margin='dense'
                        />
                    </div>

                    <div className='subformContainer'>
                        <text className="subformTitle">Pendapatan per Bulan</text>
                        <CurrencyTextField
                            className={classes.root}
                            defaultValue={values.pendapatanBulananSuamiIstri}
                            currencySymbol="Rp | "
                            decimalCharacter=","
                            digitGroupSeparator="."
                            onChange={handleChange}
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
                                onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                                onChange={handleChange}
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
                        onClick={back}
                    >Kembali</Button>

                    <Button
                        id='nxtBtn'
                        color="primary"
                        variant="contained"
                        onClick={lanjut}
                    >Lanjut</Button>
                </footer>
            </div>
        </div>
    );
}

export default DataPekerjaanSuamiIstri