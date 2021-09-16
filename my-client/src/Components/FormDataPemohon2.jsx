import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, FormControlLabel, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { DatePicker } from "@material-ui/pickers";
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import { LocationService } from '../Service/LocationService';

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

export class FormDataPemohon2 extends Component {

  state = {
    checkedA: false,
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

  componentDidMount() {
  

    LocationService.getDaftarProvinsi(objects => {
      var _lokasiKTP = this.state.lokasiKTP
      _lokasiKTP.daftarProvinsi = objects
      var _lokasiSaatIni = this.state.lokasiSaatIni
      _lokasiSaatIni.daftarProvinsi = objects
      this.setState({
        lokasiKTP: _lokasiKTP,
        lokasiSaatIni: _lokasiSaatIni
      })
    })
  }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })

  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  onProvinsiMenuItemClick = (provinsi, tag) => e => {
    this.props.handleProvinsi(provinsi, tag)

    if (tag.toLowerCase().includes('ktp')) {
      var _lokasi = this.state.lokasiKTP
      _lokasi.provinsiTerpilih = provinsi

      this.setState({ lokasiKTP: _lokasi })

      LocationService.getDaftarKabupatenKota(provinsi.id, objects => {
        _lokasi.daftarKotaKabupaten = objects

        this.setState({ lokasiKTP: _lokasi })
      })
    } else {
      var _lokasi = this.state.lokasiSaatIni
      _lokasi.provinsiTerpilih = provinsi

      this.setState({ lokasiSaatIni: _lokasi })

      LocationService.getDaftarKabupatenKota(provinsi.id, objects => {
        _lokasi.daftarKotaKabupaten = objects

        this.setState({ lokasiSaatIni: _lokasi })
      })
    }
  }

  onKotaKabupatenMenuItemClick = (kotaKabupaten, tag) => e => {
    this.props.handleKabupatenKota(kotaKabupaten, tag)

    if (tag.toLowerCase().includes('ktp')) {
      var _lokasi = this.state.lokasiKTP
      _lokasi.kotaKabupatenTerpilih = kotaKabupaten

      this.setState({ lokasiKTP: _lokasi })

      LocationService.getDaftarKecamatan(kotaKabupaten.id, objects => {
        _lokasi.daftarKecamatan = objects

        this.setState({ lokasiKTP: _lokasi })
      })
    } else {
      var _lokasi = this.state.lokasiSaatIni
      _lokasi.kotaKabupatenTerpilih = kotaKabupaten

      this.setState({ lokasiSaatIni: _lokasi })

      LocationService.getDaftarKecamatan(kotaKabupaten.id, objects => {
        _lokasi.daftarKecamatan = objects

        this.setState({ lokasiSaatIni: _lokasi })
      })
    }
  }

  onKecamatanMenuItemClick = (kecamatan, tag) => e => {
    this.props.handleKecamatan(kecamatan, tag)

    if (tag.toLowerCase().includes('ktp')) {
      var _lokasi = this.state.lokasiKTP
      _lokasi.kecamatanTerpilih = kecamatan

      this.setState({ lokasiKTP: _lokasi })

      LocationService.getDaftarKelurahan(kecamatan.id, objects => {
        _lokasi.daftarKelurahan = objects

        this.setState({ lokasiKTP: _lokasi })
      })
    } else {
      var _lokasi = this.state.lokasiSaatIni
      _lokasi.kecamatanTerpilih = kecamatan

      this.setState({ lokasiSaatIni: _lokasi })

      LocationService.getDaftarKelurahan(kecamatan.id, objects => {
        _lokasi.daftarKelurahan = objects

        this.setState({ lokasiSaatIni: _lokasi })
      })
    }
  }

  onKelurahanMenuItemClick = (kelurahan, tag) => e => {
    this.props.handleKelurahan(kelurahan, tag)

    if (tag.toLowerCase().includes('ktp')) {
      var _lokasi = this.state.lokasiKTP
      _lokasi.kelurahanTerpilih = kelurahan

      this.setState({ lokasiKTP: _lokasi })
    } else {
      var _lokasi = this.state.lokasiSaatIni
      _lokasi.kelurahanTerpilih = kelurahan

      this.setState({ lokasiSaatIni: _lokasi })
    }
  }

  render() {
    const {
      values,
      handleChange,
      classes,
    } = this.props;

    const {
      lokasiKTP,
      lokasiSaatIni
    } = this.state

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pemohon</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
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
            <TextField
              className={classes.text}
              placeholder="Tanggal"
              onChange={handleChange('tanggalLahir')}
              defaultValue={values.tanggalLahir}
              margin="normal"
              fullWidth
            />
            {/* <DatePicker
              variant="inline"
              openTo="year"
              views={["year", "month"]}
              label="Year and Month"
              helperText="Start from year selection"
              value={selectedDate}
              onChange={handleDateChange}
            /> */}
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor KTP</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan 16 Digit Nomor KTP"
              onChange={handleChange('noKTP')}
              defaultValue={values.noKTP}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Nomor NPWP</FormLabel>
            <TextField
              className={classes.text}
              placeholder="Masukkan Nomor NPWP"
              onChange={handleChange('noNPWP')}
              defaultValue={values.noNPWP}
              margin="normal"
              fullWidth
            />
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
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Menikah">Menikah</MenuItem>
            </TextField>
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
              onChange={handleChange('statusTempatTinggal')}
              defaultValue={values.statusTempatTinggal}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Milik Orangtua">Milik Orangtua</MenuItem>
              <MenuItem value="Milik Sendiri">Milik Sendiri</MenuItem>
              <MenuItem value="Kosan">Kosan</MenuItem>
              <MenuItem value="Sewa/Kontrak">Sewa/Kontrak</MenuItem>
            </TextField>
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
              defaultValue={values.provinsiKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarProvinsi.map((provinsi) =>
                  <MenuItem
                    key={provinsi.id}
                    value={provinsi.id}
                    onClick={this.onProvinsiMenuItemClick(provinsi, 'provinsiKTP')}>
                    {provinsi.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.provinsiKTP === ""}
              label={values.kotaKabupatenKTP === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenKTP')}
              defaultValue={values.kotaKabupatenKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKotaKabupaten.map((kota_kabupaten) =>
                  <MenuItem
                    key={kota_kabupaten.id}
                    value={kota_kabupaten.id}
                    onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten, 'kotaKabupatenKTP')}>
                    {kota_kabupaten.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.kotaKabupatenKTP === ""}
              label={values.kecamatanKTP === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanKTP')}
              defaultValue={values.kecamatanKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKecamatan.map((kecamatan) =>
                  <MenuItem
                    key={kecamatan.id}
                    value={kecamatan.id}
                    onClick={this.onKecamatanMenuItemClick(kecamatan, 'kecamatanKTP')}>
                    {kecamatan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.kecamatanKTP === ""}
              label={values.kelurahanKTP === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanKTP')}
              defaultValue={values.kelurahanKTP}
              margin="normal"
              fullWidth
              select>
              {
                lokasiKTP.daftarKelurahan.map((kelurahan) =>
                  <MenuItem
                    key={kelurahan.id}
                    value={kelurahan.id}
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
                  <PurpleSwitch checked={this.state.checkedA} onChange={"this.handleSwitch;"} name="checkedA" />
                </Grid>
              </Grid>
            </Typography>
            <TextField
              label={values.provinsiSaatIni === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('provinsiSaatIni')}
              defaultValue={values.provinsiSaatIni}
              // defaultValue={PurpleSwitch ? "50" : values.provinsiSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarProvinsi.map((provinsi) =>
                  <MenuItem
                    key={provinsi.id}
                    value={provinsi.id}
                    onClick={this.onProvinsiMenuItemClick(provinsi, 'provinsiSaatIni')}>
                    {provinsi.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.provinsiSaatIni === ""}
              label={values.kotaKabupatenSaatIni === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kotaKabupatenSaatIni')}
              defaultValue={values.kotaKabupatenSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarKotaKabupaten.map((kota_kabupaten) =>
                  <MenuItem
                    key={kota_kabupaten.id}
                    value={kota_kabupaten.id}
                    onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten, 'kotaKabupatenSaatIni')}>
                    {kota_kabupaten.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.kotaKabupatenSaatIni === ""}
              label={values.kecamatanSaatIni === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kecamatanSaatIni')}
              defaultValue={values.kecamatanSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarKecamatan.map((kecamatan) =>
                  <MenuItem
                    key={kecamatan.id}
                    value={kecamatan.id}
                    onClick={this.onKecamatanMenuItemClick(kecamatan, 'kecamatanSaatIni')}>
                    {kecamatan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={values.kecamatanSaatIni === ""}
              label={values.kelurahanSaatIni === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              className={classes.text}
              onChange={handleChange('kelurahanSaatIni')}
              defaultValue={values.kelurahanSaatIni}
              margin="normal"
              fullWidth
              select>
              {
                lokasiSaatIni.daftarKelurahan.map((kelurahan) =>
                  <MenuItem
                    key={kelurahan.id}
                    value={kelurahan.id}
                    onClick={this.onKelurahanMenuItemClick(kelurahan, 'kelurahanSaatIni')}
                  >
                    {kelurahan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              className={classes.text}
              placeholder="Masukkan Detail Alamat (Nama Jalan, No. Rumah, Blok, RT/RW"
              onChange={handleChange('alamatSaatIni')}
              defaultValue={values.alamatSaatIni}
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
              <MenuItem value="Alamat Saat Ini">Alamat Saat Ini</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Rumah</FormLabel>
            <TextField
              className={classes.text}
              placeholder="+62 | xxx-xxxx-xxxx"
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
            <TextField
              className={classes.text}
              placeholder="+62 | xxx-xxxx-xxxx"
              onChange={handleChange('noHP')}
              defaultValue={values.noHP}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
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
      </div>
    );
  }
}

export default withStyles(styles)(FormDataPemohon2);
