import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputMask from "react-input-mask";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Stepper from '../Components/stepper';

const styles = theme => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
    width: "641px"
  }
});

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export class FormDataPemohon extends Component {
  state = { checkedA: false, isPekerjaanLainnyaSuamiIstri: false, isKategoriPekerjaanSuamiIstri:false }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })
    this.props.handleAlamatSama();
  }

  handlePekerjaanLainnyaSuamiIstri = (event) => {
    if (event.target.value === "Lainnya") {
      this.setState({ isPekerjaanLainnyaSuamiIstri: true })
      this.props.handleChange("jenisPekerjaanSuamiIstri")
    } else {
      this.setState({ isPekerjaanLainnyaSuamiIstri: false })
      this.props.handleChange("jenisPekerjaanSuamiIstri")
    }
  }

  handleInstansiLainnyaSuamiIstri = (event) => {
    if (event.target.value === "Lainnya") {
      this.setState({ isKategoriPekerjaanSuamiIstri: true })
      this.props.handleChange("kategoriInstansiLainnyaSuamiIstri")
    } else {
      this.setState({ isKategoriPekerjaanSuamiIstri: false })
      this.props.handleChange("kategoriInstansiLainnyaSuamiIstri")
    }
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handlePekerjaanLainnyaSuamiIstri, handleInstansiLainnyaSuamiIstri , isKategoriPekerjaanSuamiIstri, isPekerjaanLainnyaSuamiIstri, classes } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pekerjaan Suami/Istri</p>
          <Stepper currentStep={3} />
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Pekerjaan</FormLabel>
            <TextField
              label={values.jenisPekerjaanSuamiIstri === "" ? "Pilih Jenis Pekerjaan" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handlePekerjaanLainnyaSuamiIstri('jenisPekerjaanSuamiIstri')}
              defaultValue={values.jenisPekerjaanSuamiIstri}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Karyawan">Karyawan</MenuItem>
              <MenuItem value="Profesional">Profesional</MenuItem>
              <MenuItem value="Wiraswasta">Wiraswasta</MenuItem>
              <MenuItem value="Pegawai Negeri">Pegawai Negeri(PNS)</MenuItem>
              <MenuItem value="Pegawai Swasta">Pegawai Swasta</MenuItem>
              <MenuItem value="Lainnya">Lainnya</MenuItem>
            </TextField>
            {
              isPekerjaanLainnyaSuamiIstri ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("pekerjaanLainnyaSuamiIstri")}
                  //tambah state baru statusLainnya
                  defaultValue={values.pekerjaanLainnyaSuamiIstri}
                />
                : null
            }
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Perusahaan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Perusahaan "
              onChange={handleChange('namaPerusahaanSuamiIstri')}
              defaultValue={values.namaPerusahaanSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jabatan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Jabatan "
              onChange={handleChange('jabatanSuamiIstri')}
              defaultValue={values.jabatanSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Kategori Instansi</FormLabel>
            <TextField
              label={values.kategoriInstansiSuamiIstri === "" ? "Pilih Kategori Instansi" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleInstansiLainnyaSuamiIstri('kategoriInstansiSuamiIstri')}
              defaultValue={values.kategoriInstansiSuamiIstri}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Pemerintah</MenuItem>
              <MenuItem value={20}>BUMN</MenuItem>
              <MenuItem value={30}>TNI/Polri</MenuItem>
              <MenuItem value={40}>Wiraswasta/Profesional</MenuItem>
              <MenuItem value={50}>Swasta Asing</MenuItem>
              <MenuItem value={60}>Swasta Nasional</MenuItem>
              <MenuItem value="Lainnya">Lainnya</MenuItem>
            </TextField>
            {
              isKategoriPekerjaanSuamiIstri ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("kategoriInstansiLainnyaSuamiIstri")}
                  defaultValue={values.kategoriInstansiLainnyaSuamiIstri}
                />
                : null
            }
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Lama Bekerja</FormLabel>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <TextField
                  type='number'
                  placeholder="Tahun"
                  onChange={handleChange('tahunLamaBekerjaSuamiIstri')}
                  style={{ width: "108px" }}
                  defaultValue={values.tahunLamaBekerjaSuamiIstri}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type='number'
                  placeholder="Bulan"
                  onChange={handleChange('bulanLamaBekerjaSuamiIstri')}
                  style={{width: "108px", justifyContent:'center'}}
                  defaultValue={values.bulanLamaBekerjaSuamiIstri}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jumlah Karyawan</FormLabel>
            <TextField
              type='number'
              className={classes.text}
              placeholder="Masukkan Jumlah Karyawan "
              onChange={handleChange('jumlahKaryawanSuamiIstri')}
              defaultValue={values.jumlahKaryawanSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pendapatan Per Bulan</FormLabel>
            <CurrencyTextField
              className={classes.text}
              name='pendapatanBulananSuamiIstri'
              placeholder="0"
              defaultValue={values.pendapatanBulananSuamiIstri}
              currencySymbol="Rp | "
              decimalCharacter=","
              digitGroupSeparator="."
              modifyValueOnWheel={false}
              onChange={handleChange('pendapatanBulananSuamiIstri')}
              inputProps={{style: { textAlign: 'left'}}}
              margin='normal'
            />
          </FormControl>
          <br/>
          <br/>

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Status Pekerjaan</FormLabel>
            <TextField
              label={values.statusPekerjaanSuamiIstri === "" ? "Masukan Status Pekerjaan" : ""}
              className={classes.text}
              name='statusPekerjaanSuamiIstri'
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusPekerjaanSuamiIstri')}
              defaultValue={values.statusPekerjaanSuamiIstri}
              select
              fullWidth
              margin='normal'>
              <MenuItem value="Karyawan Tetap">Karyawan Tetap</MenuItem>
              <MenuItem value="Karyawan Kontrak">Karyawan Kontrak</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />

          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pembayaran Gaji</FormLabel>
            <TextField
              label={values.pembayaranGajiSuamiIstri === "" ? "Masukan Pembayaran Gaji" : ""}
              className={classes.text}
              name='pembayaranGajiSuamiIstri'
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('pembayaranGajiSuamiIstri')}
              defaultValue={values.pembayaranGajiSuamiIstri}
              select
              fullWidth
              margin='normal'>
              <MenuItem value="Transfer Bank Muamalat">Transfer Bank Muamalat</MenuItem>
              <MenuItem value="Transfer Bank Lain">Transfer Bank Lain</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Kantor Perusahaan</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Alamat Kantor / Tempat Usaha "
              onChange={handleChange('alamatKantorSuamiIstri')}
              defaultValue={values.alamatKantorSuamiIstri}
              margin="normal"
            />
            <div>
              <InputMask
                  mask="+62 | 999-9999-99999"
                  value={values.teleponKantorSuamiIstri}
                  onChange={handleChange('teleponKantorSuamiIstri')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon Kantor"
                    name='teleponKantorSuamiIstri'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            <div>
              <InputMask
                  mask="+62 | 999-9999-99999"
                  value={values.teleponHrdSuamiIstri}
                  onChange={handleChange('teleponHrdSuamiIstri')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon HRD"
                    name='teleponHrdSuamiIstri'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            <TextField
              className={classes.text}
              placeholder="Masukkan Alamat Email HRD"
              onChange={handleChange('emailHrdSuamiIstri')}
              defaultValue={values.emailHrdSuamiIstri}
              margin="normal"
            />
            <div>
              <InputMask
                  mask="+62 | 999-9999-99999"
                  value={values.teleponAtasanSuamiIstri}
                  onChange={handleChange('teleponAtasanSuamiIstri')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon Atasan"
                    name='teleponAtasanSuamiIstri'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            <TextField
              className={classes.text}
              placeholder="Masukkan Alamat Email Atasan"
              onChange={handleChange('emailAtasanSuamiIstri')}
              defaultValue={values.emailAtasanSuamiIstri}
              margin="normal"
            />
            <TextField
              className={classes.text}
              placeholder="Masukkan Bidang Usaha "
              onChange={handleChange('bidangUsahaSuamiIstri')}
              defaultValue={values.bidangUsahaSuamiIstri}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />

          {/* <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Atasan</FormLabel>
            <InputMask
              mask="+ 99 | 999-9999-99999"
              value={values.teleponAtasanSuamiIstri}
              onChange={handleChange('teleponAtasanSuamiIstri')}
              maskChar=" "
            >
              {() => <TextField 
              placeholder="+62 | xxx-xxxx-xxxx"
              name='teleponAtasanSuamiIstri'
              fullWidth
              margin='normal'/>}
            </InputMask>
          </FormControl>
          <br/>
          <br/> */}

          <div className="footer">
            <Button
              className="button1"
              variant="contained"
              onClick={this.back}
            >Kembali</Button>

            <Button
              className="button2"
              variant="contained"
              onClick={this.continue}
            >Lanjut</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FormDataPemohon);
