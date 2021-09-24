import React, { Component } from 'react';
import {
  Switch, AppBar, TextField, MenuItem, Button, FormControl,
  FormLabel, Grid, Typography, InputAdornment
} from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import { LocationService } from '../Service/LocationService';
import InputMask from "react-input-mask";
import Stepper from '../Components/stepper';

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

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#6A0070",
    '&$checked': {
      color: "#6A0070",
    },
    '&$checked + $track': {
      backgroundColor: "#6A0070",
    },
  },
  checked: {},
  track: {},
})(Switch);

export class FormDataPemohon extends Component {
  state = {
    // checkedA: false,
    lokasiKTP: {
      daftarProvinsi: [],
      daftarKotaKabupaten: [],
      daftarKecamatan: [],
      daftarKelurahan: [],
      provinsiTerpilih: null,
      kotaKabupatenTerpilih: null,
      kecamatanTerpilih: null,
      kelurahanTerpilih: null,
    },
    lokasiSaatIni: {
      daftarProvinsi: [],
      daftarKotaKabupaten: [],
      daftarKecamatan: [],
      daftarKelurahan: [],
      provinsiTerpilih: null,
      kotaKabupatenTerpilih: null,
      kecamatanTerpilih: null,
      kelurahanTerpilih: null,
    }
  }

  async componentDidMount() {

    let daftarProvinsi = await LocationService.getDaftarProvinsi()
    this.state.lokasiKTP.daftarProvinsi = daftarProvinsi
    this.state.lokasiSaatIni.daftarProvinsi = daftarProvinsi
    this.setState({
      lokasiKTP: this.state.lokasiKTP,
      lokasiSaatIni: this.state.lokasiSaatIni
    })

    let namaProvinsiKTP = this.props.values.provinsiKTP
    let namaKotaKabupatenKTP = this.props.values.kotaKabupatenKTP
    let namaKecamatanKTP = this.props.values.kecamatanKTP
    let namaKelurahanKTP = this.props.values.kelurahanKTP

    let namaProvinsiSaatIni = this.props.values.provinsiSaatIni
    let namaKotaKabupatenSaatIni = this.props.values.kotaKabupatenSaatIni
    let namaKecamatanSaatIni = this.props.values.kecamatanSaatIni
    let namaKelurahanSaatIni = this.props.values.kelurahanSaatIni

    if (namaProvinsiKTP !== "") {
      let provinsiKTP = this.state.lokasiKTP.daftarProvinsi.find(element => {
        return element.nama === namaProvinsiKTP
      })
      await this.onProvinsiDidSelect(provinsiKTP, 'ktp')
    }

    if (namaProvinsiSaatIni !== "") {
      let provinsiSaatIni = this.state.lokasiSaatIni.daftarProvinsi.find(element => {
        return element.nama === namaProvinsiSaatIni
      })
      await this.onProvinsiDidSelect(provinsiSaatIni, 'saatini')
    }

    if (namaKotaKabupatenKTP !== "") {
      let kotaKabupaten = this.state.lokasiKTP.daftarKotaKabupaten.find(element => {
        return element.nama === namaKotaKabupatenKTP
      })
      await this.onKotaKabupatenDidSelect(kotaKabupaten, 'ktp')
    }

    if (namaKotaKabupatenSaatIni !== "") {
      let kotaKabupaten = this.state.lokasiSaatIni.daftarKotaKabupaten.find(element => {
        return element.nama === namaKotaKabupatenSaatIni
      })
      await this.onKotaKabupatenDidSelect(kotaKabupaten, 'saatini')
    }

    if (namaKecamatanKTP !== "") {
      let kecamatan = this.state.lokasiKTP.daftarKecamatan.find(element => {
        return element.nama === namaKecamatanKTP
      })
      await this.onKecamatanDidSelect(kecamatan, 'ktp')
    }

    if (namaKecamatanSaatIni !== "") {
      let kecamatan = this.state.lokasiSaatIni.daftarKecamatan.find(element => {
        return element.nama === namaKecamatanSaatIni
      })
      await this.onKecamatanDidSelect(kecamatan, 'saatini')
    }

    if (namaKelurahanKTP !== "") {
      let kelurahan = this.state.lokasiKTP.daftarKelurahan.find(element => {
        return element.nama === namaKelurahanKTP
      })
      await this.onKelurahanDidSelect(kelurahan, 'ktp')
    }

    if (namaKelurahanSaatIni !== "") {
      let kelurahan = this.state.lokasiSaatIni.daftarKelurahan.find(element => {
        return element.nama === namaKelurahanSaatIni
      })
      await this.onKelurahanDidSelect(kelurahan, 'saatini')
    }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log('status perkawinan: ',this.props.values.statusPerkawinan)
  };

  jump = e => {
    e.preventDefault();
    this.props.tripleNext();
    console.log('status perkawinan: ',this.props.values.statusPerkawinan)
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  tripleBack = e => {
    e.preventDefault();
    this.props.triplePrevious();
  };

  async onProvinsiDidSelect(provinsi, tag) {
    this.props.handleProvinsi(provinsi, tag)

    let daftarKotaKabupaten = await LocationService.getDaftarKotaKabupaten(provinsi.id)

    if (tag.toLowerCase().includes('ktp')) {
      this.state.lokasiKTP.provinsiTerpilih = provinsi
      this.state.lokasiKTP.daftarKotaKabupaten = daftarKotaKabupaten
      this.setState({ lokasiKTP: this.state.lokasiKTP })
    } else {
      this.state.lokasiSaatIni.provinsiTerpilih = provinsi
      this.state.lokasiSaatIni.daftarKotaKabupaten = daftarKotaKabupaten
      this.setState({ lokasiSaatIni: this.state.lokasiSaatIni })
    }
  }

  async onKotaKabupatenDidSelect(kotaKabupaten, tag) {
    this.props.handleKotaKabupaten(kotaKabupaten, tag)

    let daftarKecamatan = await LocationService.getDaftarKecamatan(kotaKabupaten.id)

    if (tag.toLowerCase().includes('ktp')) {
      this.state.lokasiKTP.kotaKabupatenTerpilih = kotaKabupaten
      this.state.lokasiKTP.daftarKecamatan = daftarKecamatan
      this.setState({ lokasiKTP: this.state.lokasiKTP })
    } else {
      this.state.lokasiSaatIni.kotaKabupatenTerpilih = kotaKabupaten
      this.state.lokasiSaatIni.daftarKecamatan = daftarKecamatan
      this.setState({ lokasiSaatIni: this.state.lokasiSaatIni })
    }
  }

  async onKecamatanDidSelect(kecamatan, tag) {
    this.props.handleKecamatan(kecamatan, tag)

    let daftarKelurahan = await LocationService.getDaftarKelurahan(kecamatan.id)

    if (tag.toLowerCase().includes('ktp')) {
      this.state.lokasiKTP.kecamatanTerpilih = kecamatan
      this.state.lokasiKTP.daftarKelurahan = daftarKelurahan
      this.setState({ lokasiKTP: this.state.lokasiKTP })
    } else {
      this.state.lokasiSaatIni.kecamatanTerpilih = kecamatan
      this.state.lokasiSaatIni.daftarKelurahan = daftarKelurahan
      this.setState({ lokasiSaatIni: this.state.lokasiSaatIni })
    }
  }

  async onKelurahanDidSelect(kelurahan, tag) {
    this.props.handleKelurahan(kelurahan, tag)

    if (tag.toLowerCase().includes('ktp')) {
      this.state.lokasiKTP.kelurahanTerpilih = kelurahan
      this.setState({ lokasiKTP: this.state.lokasiKTP })
    } else {
      this.state.lokasiSaatIni.kelurahanTerpilih = kelurahan
      this.setState({ lokasiSaatIni: this.state.lokasiSaatIni })
    }
  }

  // View Event Handler
  onProvinsiMenuItemClick = (provinsi, tag) => e => {
    this.onProvinsiDidSelect(provinsi, tag)
  }

  onKotaKabupatenMenuItemClick = (kotaKabupaten, tag) => e => {
    this.onKotaKabupatenDidSelect(kotaKabupaten, tag)
  }

  onKecamatanMenuItemClick = (kecamatan, tag) => e => {
    this.onKecamatanDidSelect(kecamatan, tag)
  }

  onKelurahanMenuItemClick = (kelurahan, tag) => e => {
    this.onKelurahanDidSelect(kelurahan, tag)
  }


  render() {
    const { values, handleChange, handleSwitch, handleLainnya, classes, isLainnya, checkedA, step } = this.props;

    const {
      lokasiKTP,
      lokasiSaatIni
    } = this.state

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pemohon</p>
          <Stepper currentStep={step} />
          <br />
          
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Lengkap Sesuai KTP</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Lengkap Sesuai KTP"
              onChange={handleChange('namaLengkapAsli')}
              defaultValue={values.namaLengkapAsli}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Kelamin</FormLabel>
            <TextField
              className={classes.text}
              label={values.jenisKelamin === "" ? "Pilih Jenis Kelamin" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('jenisKelamin')}
              defaultValue={values.jenisKelamin}
              margin="normal"
              select
            >
              <MenuItem value="Pria">Pria</MenuItem>
              <MenuItem value="Wanita">Wanita</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Lengkap Tanpa Singkatan dan Tanpa Gelar</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
              onChange={handleChange('namaLengkap')}
              defaultValue={values.namaLengkap}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Tempat / Tanggal Lahir </FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Tempat"
              onChange={handleChange('tempatLahir')}
              defaultValue={values.tempatLahir}
              margin="normal"
            />
            <div className={classes.text}>
              <p className="date">Tanggal Lahir</p>
              <TextField
                id="date"
                type="date"
                onChange={handleChange('tanggalLahir')}
                defaultValue={values.tanggalLahir}
                margin="normal"
                fullWidth
              />
            </div>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor KTP</FormLabel>
            <InputMask
                mask="9999999999999999"
                value={values.noKTP}
                onChange={handleChange("noKTP")}
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
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor NPWP</FormLabel>
            <InputMask
                mask="999999999999999"
                value={values.noNPWP}
                onChange={handleChange('noNPWP')}
                maskChar=" "
            >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Nomor NPWP"
                    name="noNPWP"
                    fullWidth
                    margin='normal'
                />}
            </InputMask>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nama Gadis Ibu Kandung</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nama Gadis Ibu Kandung"
              onChange={handleChange('namaGadisIbuKandung')}
              defaultValue={values.namaGadisIbuKandung}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Status Perkawinan</FormLabel>
            <TextField
              label={values.statusPerkawinan === "" ? "Pilih Status Perkawinan" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusPerkawinan')}
              defaultValue={values.statusPerkawinan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Single">Belum Menikah</MenuItem>
              <MenuItem value="Menikah">Menikah</MenuItem>
              <MenuItem value="Cerai">Cerai</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jumlah Tanggungan Anak</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Jumlah Tanggungan Anak"
              onChange={handleChange('jumlahTanggunganAnak')}
              defaultValue={values.jumlahTanggunganAnak}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pendidikan Terakhir</FormLabel>
            <TextField
              label={values.pendidikanTerakhir === "" ? "Pilih Pendidikan Terakhir" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('pendidikanTerakhir')}
              defaultValue={values.pendidikanTerakhir}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="SD">SD</MenuItem>
              <MenuItem value="SMP">SMP</MenuItem>
              <MenuItem value="SMA">SMA</MenuItem>
              <MenuItem value="S1">S1</MenuItem>
              <MenuItem value="S2">S2</MenuItem>
              <MenuItem value="S3">S3</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Status Tempat Tinggal</FormLabel>
            <TextField
              label={values.statusTempatTinggal === "" ? "Pilih Status Tempat Tinggal" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handleLainnya("statusTempatTinggal")}
              // value={values.statusTempatTinggal}
              // onChange={event => {handleChange("statusTempatTinggal"); this.handleLainnya(event)}}
              defaultValue={values.statusTempatTinggal}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Milik Sendiri">Milik Sendiri</MenuItem>
              <MenuItem value="Keluarga">Keluarga</MenuItem>
              <MenuItem value="Kontrak/Kosan">Kontrak/Kosan</MenuItem>
              <MenuItem value="Lainnya">Lainnya</MenuItem>
            </TextField>
            {
              isLainnya ?
                
                <TextField
                  placeholder="Masukkan Status Tempat Tinggal"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("statusLainnya")}
                  //tambah state baru statusLainnya
                  defaultValue={values.statusLainnya}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat sesuai KTP</FormLabel>
            <TextField
              label={values.provinsiKTP === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('provinsiKTP')}
              value={values.provinsiKTP === "" ? '' : values.provinsiKTP}
              fullWidth
              select>
              {
                lokasiKTP.daftarProvinsi.map((provinsi) =>
                  <MenuItem
                    key={provinsi.id}
                    value={provinsi.nama}
                    onClick={this.onProvinsiMenuItemClick(provinsi, 'provinsiKTP')}>
                    {provinsi.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={lokasiKTP.provinsiTerpilih == null}
              label={values.kotaKabupatenKTP === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenKTP')}
              value={values.kotaKabupatenKTP === "" ? '' : values.kotaKabupatenKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKotaKabupaten.map((kota_kabupaten) =>
                  <MenuItem
                    key={kota_kabupaten.id}
                    value={kota_kabupaten.nama}
                    onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten, 'kotaKabupatenKTP')}>
                    {kota_kabupaten.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={lokasiKTP.kotaKabupatenTerpilih == null}
              label={values.kecamatanKTP === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanKTP')}
              value={values.kecamatanKTP === "" ? '' : values.kecamatanKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKecamatan.map((kecamatan) =>
                  <MenuItem
                    key={kecamatan.id}
                    value={kecamatan.nama}
                    onClick={this.onKecamatanMenuItemClick(kecamatan, 'kecamatanKTP')}>
                    {kecamatan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={lokasiKTP.kecamatanTerpilih == null}
              label={values.kelurahanKTP === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanKTP')}
              value={values.kelurahanKTP === "" ? '' : values.kelurahanKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKelurahan.map((kelurahan) =>
                  <MenuItem
                    key={kelurahan.id}
                    value={kelurahan.nama}
                    onClick={this.onKelurahanMenuItemClick(kelurahan, 'kelurahanKTP')}>
                    {kelurahan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              className={classes.text}
              placeholder="Masukkan Detail Alamat (Nama Jalan, No. Rumah, Blok, RT/RW"
              onChange={handleChange('alamatKTP')}
              defaultValue={values.alamatKTP}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Tempat Tinggal Saat Ini</FormLabel>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item className="switchLabel">Sama dengan KTP</Grid>
                <Grid item>
                  <PurpleSwitch 
                    checked={checkedA} 
                    onChange={handleSwitch} 
                    name="checkedA" 
                    defaultValue={checkedA}/>
                </Grid>
              </Grid>
            </Typography>
            <TextField
              disabled={checkedA}
              label={values.provinsiSaatIni === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('provinsiSaatIni')}
              value={checkedA ? values.provinsiKTP : values.provinsiSaatIni}
              // defaultValue={this.state.checkedA ? values.provinsiKTP : values.provinsiSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarProvinsi.map((provinsi) =>
                  <MenuItem
                    key={provinsi.id}
                    value={provinsi.nama}
                    onClick={this.onProvinsiMenuItemClick(provinsi, 'provinsiSaatIni')}>
                    {provinsi.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.provinsiSaatIni === "" || checkedA}
              label={values.kotaKabupatenSaatIni === "" ? "Pilih Kabupaten / Kota" : values.kotaKabupatenSaatIni}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenSaatIni')}
              value={checkedA ? values.kotaKabupatenKTP : values.kotaKabupatenSaatIni}
              // defaultValue={this.state.checkedA ? values.kotaKabupatenKTP : values.kotaKabupatenSaatIni}
              margin="normal"
              fullWidth
              select>
              
              {
                lokasiSaatIni.daftarKotaKabupaten.map((kota_kabupaten) =>
                  <MenuItem
                    key={kota_kabupaten.id}
                    value={kota_kabupaten.nama}
                    onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten, 'kotaKabupatenSaatIni')}>
                    {kota_kabupaten.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={lokasiSaatIni.kotaKabupatenTerpilih == null || checkedA}
              label={values.kecamatanSaatIni === "" ? "Pilih Kecamatan" : values.kecamatanSaatIni}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanSaatIni')}
              value={checkedA ? values.kecamatanKTP : values.kecamatanSaatIni}
              // defaultValue={this.state.checkedA ? values.kecamatanKTP : values.kecamatanSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarKecamatan.map((kecamatan) =>
                  <MenuItem
                    key={kecamatan.id}
                    value={kecamatan.nama}
                    onClick={this.onKecamatanMenuItemClick(kecamatan, 'kecamatanSaatIni')}>
                    {kecamatan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={lokasiSaatIni.kecamatanTerpilih == null || checkedA}
              label={values.kelurahanSaatIni === "" ? "Pilih Kelurahan" : values.kelurahanSaatIni}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanSaatIni')}
              value={checkedA ? values.kelurahanKTP : values.kelurahanSaatIni}
              // defaultValue={this.state.checkedA ? values.kelurahanKTP : values.kelurahanSaatIni}
              // defaultValue={values.kelurahanSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarKelurahan.map((kelurahan) =>
                  <MenuItem
                    key={kelurahan.id}
                    value={kelurahan.nama}
                    onClick={this.onKelurahanMenuItemClick(kelurahan, 'kelurahanSaatIni')}>
                    {kelurahan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={checkedA}
              className={classes.text}
              placeholder="Masukkan Detail Alamat (Nama Jalan, No. Rumah, Blok, RT/RW"
              onChange={handleChange('alamatSaatIni')}
              value={checkedA ? values.alamatKTP : values.alamatSaatIni}
              // defaultValue={this.state.checkedA ? values.alamatKTP : values.alamatSaatIni}
              // defaultValue={values.alamatSaatIni}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Surat Menyurat</FormLabel>
            <TextField
              label={values.alamatSuratMenyurat === "" ? "Pilih Alamat Surat Menyurat" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('alamatSuratMenyurat')}
              defaultValue={values.alamatSuratMenyurat}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Alamat KTP">Alamat KTP</MenuItem>
              <MenuItem value="Alamat Tinggal">Alamat Tinggal</MenuItem>
              <MenuItem value="Alamat Kantor">Alamat Kantor</MenuItem>
              <MenuItem value="Alamat Email">Alamat Email</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Rumah</FormLabel>
            <TextField
              className={classes.text}
              InputProps={{
                startAdornment: <InputAdornment position="start">+62 |</InputAdornment>,
              }}
              placeholder="xxx-xxxx-xxxx"
              onChange={handleChange('noTeleponRumah')}
              defaultValue={values.noTeleponRumah}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Email</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Alamat Email Aktif"
              type="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Handphone</FormLabel>
            <InputMask
              mask="+62 | 999-9999-99999"
              value={values.noHP}
              onChange={handleChange('noHP')}
              maskChar=" ">
                {() => <TextField
                  className={classes.text}
                  placeholder="+62 | xxx-xxxx-xxxx"
                  name="noHP"
                  fullWidth
                  margin="normal"/>}
            </InputMask>
            <InputMask
              mask="+62 | 999-9999-99999"
              value={values.noHPDua}
              onChange={handleChange('noHPDua')}
              maskChar=" ">
                {() => <TextField
                  className={classes.text}
                  placeholder="+62 | xxx-xxxx-xxxx"
                  name="noHP"
                  fullWidth
                  margin="normal"/>}
            </InputMask>
            
          </FormControl>
          <br />
          <br />
          <div className="footer">
            <Button
              className="button1"
              variant="contained"
              onClick={this.back}
            >Kembali</Button>

            {
              values.statusPerkawinan === 'Menikah'
              ?               
              <Button
                className="button2"
                variant="contained"
                onClick={this.continue}
              >Lanjut</Button>
              :
              <Button
                className="button2"
                variant="contained"
                onClick={this.jump}
              >Lanjut</Button>
            }
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FormDataPemohon);
