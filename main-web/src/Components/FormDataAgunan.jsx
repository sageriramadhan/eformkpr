import React, { Component } from 'react';
import { AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import { LocationService } from '../Service/LocationService';
import Stepper from '../Components/stepper';

const styles = theme => createStyles({
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

export class FormDataAgunan extends Component {

  state = {
    daftarProvinsi: [],
    daftarKotaKabupaten: [],
    daftarKecamatan: [],
    daftarKelurahan: [],
    provinsiTerpilih: null,
    kotaKabupatenTerpilih: null,
    kecamatanTerpilih: null,
    kelurahanTerpilih: null,
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  async componentDidMount() {

    let namaProvinsi = this.props.values.provinsiAgunan
    let namaKotaKabupaten = this.props.values.kotaKabupatenAgunan
    let namaKecamatan = this.props.values.kecamatanAgunan
    let namaKelurahan = this.props.values.kelurahanAgunan

    let daftarProvinsi = await LocationService.getDaftarProvinsi()
    this.setState({ daftarProvinsi: daftarProvinsi })

    if (namaProvinsi !== "") {
      let provinsi = this.state.daftarProvinsi.find(element => {
        return element.nama === namaProvinsi
      })
      // console.log(`onProvinsiDidSelect ${provinsi}`)
      await this.onProvinsiDidSelect(provinsi)
    }

    if (namaKotaKabupaten !== "") {
      let kotaKabupaten = this.state.daftarKotaKabupaten.find(element => {
        return element.nama === namaKotaKabupaten
      })
      // console.log(`onKotaKabupatenDidSelect ${kotaKabupaten}`)
      await this.onKotaKabupatenDidSelect(kotaKabupaten)
    }

    if (namaKecamatan !== "") {
      let kecamatan = this.state.daftarKecamatan.find(element => {
        return element.nama === namaKecamatan
      })
      // console.log(`onKecamatanDidSelect ${kecamatan}`)
      await this.onKecamatanDidSelect(kecamatan)
    }

    if (namaKelurahan !== "") {
      let kelurahan = this.state.daftarKelurahan.find(element => {
        return element.nama === namaKelurahan
      })
      // console.log(`onKelurahanDidSelect ${kelurahan}`)
      await this.onKelurahanDidSelect(kelurahan)
    }
  }

  async onProvinsiDidSelect(provinsi) {
    this.props.handleProvinsi(provinsi, 'provinsiAgunan')

    this.setState({ provinsiTerpilih: provinsi })

    let daftarKotaKabupaten = await LocationService.getDaftarKotaKabupaten(provinsi.id)
    this.setState({ daftarKotaKabupaten: daftarKotaKabupaten })
  }

  async onKotaKabupatenDidSelect(kotaKabupaten) {
    this.props.handleKotaKabupaten(kotaKabupaten, 'kotaKabupatenAgunan')

    this.setState({ kotaKabupatenTerpilih: kotaKabupaten })

    let daftarKecamatan = await LocationService.getDaftarKecamatan(kotaKabupaten.id)
    this.setState({ daftarKecamatan: daftarKecamatan })
  }

  async onKecamatanDidSelect(kecamatan) {
    this.props.handleKecamatan(kecamatan, 'kecamatanAgunan')

    this.setState({ kecamatanTerpilih: kecamatan })

    let daftarKelurahan = await LocationService.getDaftarKelurahan(kecamatan.id)
    this.setState({ daftarKelurahan: daftarKelurahan })
  }

  async onKelurahanDidSelect(kelurahan) {
    this.props.handleKelurahan(kelurahan, 'kelurahanAgunan')

    this.setState({ kelurahanTerpilih: kelurahan })
  }

  // View Event Handler
  onProvinsiMenuItemClick = provinsi => e => {
    this.onProvinsiDidSelect(provinsi)
  }

  onKotaKabupatenMenuItemClick = kotaKabupaten => e => {
    this.onKotaKabupatenDidSelect(kotaKabupaten)
  }

  onKecamatanMenuItemClick = kecamatan => e => {
    this.onKecamatanDidSelect(kecamatan)
  }

  onKelurahanMenuItemClick = kelurahan => e => {
    this.onKelurahanDidSelect(kelurahan)
  }

  render() {
    const { values, handleChange, classes, step } = this.props;

    const {
      daftarProvinsi,
      daftarKotaKabupaten,
      daftarKecamatan,
      daftarKelurahan,
      provinsiTerpilih,
      kotaKabupatenTerpilih,
      kecamatanTerpilih,
      kelurahanTerpilih,
    } = this.state

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Agunan</p>
          <Stepper currentStep={step} />
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Agunan</FormLabel>
            <TextField
              className={classes.text}
              label={values.jenisAgunan === "" ? "Pilih Jenis Agunan" : ""}
              onChange={handleChange('jenisAgunan')}
              defaultValue={values.jenisAgunan}
              margin="normal"
              InputLabelProps={{ shrink: false }}
              select>
              <MenuItem value="Rumah">Rumah</MenuItem>
              <MenuItem value="Ruko / Rukan">Ruko / Rukan</MenuItem>
              <MenuItem value="Apartemen / Rusun">Apartemen / Rusun</MenuItem>
              <MenuItem value="Kavling">Kavling</MenuItem>
            </TextField>
            <TextField
              type='number'
              placeholder="Masukkan Luas Tanah (dalam meter persegi)"
              className={classes.text}
              onChange={handleChange('luasTanah')}
              defaultValue={values.luasTanah}
              margin="normal"
              fullWidth
            />
            <TextField
              type='number'
              placeholder="Masukkan Luas Bangunan (dalam meter persegi)"
              onChange={handleChange('luasBangunan')}
              className={classes.text}
              defaultValue={values.luasBangunan}
              margin="normal"
              fullWidth
            />
            <TextField
              label={values.statusKepemilikan === "" ? "Pilih Status Kepemilikan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusKepemilikan')}
              className={classes.text}
              defaultValue={values.statusKepemilikan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="SHM">SHM</MenuItem>
              <MenuItem value="SHGB">SHGB</MenuItem>
              <MenuItem value="Strata Title / SHMRS">Strata Title / SHMRS</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Kondisi Bangunan</FormLabel>
            <TextField
              label={values.kondisiBangunan === "" ? "Pilih Kondisi Bangunan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kondisiBangunan')}
              className={classes.text}
              defaultValue={values.kondisiBangunan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Siap Huni">Siap Huni</MenuItem>
              <MenuItem value="Dalam Proses Pembuatan">Dalam Proses Pembuatan</MenuItem>
            </TextField>
            <TextField
              label={values.statusAgunan === "" ? "Pilih Status Agunan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('statusAgunan')}
              className={classes.text}
              defaultValue={values.statusAgunan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Ditinggali">Ditinggali</MenuItem>
              <MenuItem value="Disewakan">Disewakan</MenuItem>
              <MenuItem value="Kosong">Kosong</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Atas Nama Sertifikat (Eksisting / Balik Nama)</FormLabel>
            <TextField
              placeholder="Masukkan Atas Nama Sertifikat (Eksisting / Balik Nama)"
              className={classes.text}
              onChange={handleChange('atasNamaSertifikat')}
              defaultValue={values.atasNamaSertifikat}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Sertifikat</FormLabel>
            <TextField
              type='number'
              placeholder="Masukkan Nomor Sertifikat"
              className={classes.text}
              onChange={handleChange('nomorSertifikat')}
              defaultValue={values.nomorSertifikat}
              margin="normal"
              fullWidth
            />
            <div className={classes.text}>
              <p className="date">Berlaku Hingga</p>
              <TextField
                // className={classes.text}
                id="date"
                type="date"
                onChange={handleChange('berlakuHingga')}
                defaultValue={values.berlakuHingga}
                margin="normal"
                fullWidth
              />
            </div>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. SPR* Developer</FormLabel>
            <TextField
              //tambahan agunan
              placeholder="Masukkan No. SPR Developer"
              className={classes.text}
              onChange={handleChange('nomorSPRDeveloperAgunan')}
              defaultValue={values.nomorSPRDeveloperAgunan}
              margin="normal"
              fullWidth
              helperText="*) Surat Pemesanan Rumah"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Agunan</FormLabel>
            <TextField
              placeholder="Masukkan Alamat Properti"
              onChange={handleChange('alamatPropertiAgunan')}
              className={classes.text}
              defaultValue={values.alamatPropertiAgunan}
              margin="normal"
              fullWidth
            />
            <TextField
              label={values.provinsiAgunan === "" ? "Pilih Provinsi" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('provinsiAgunan')}
              className={classes.text}
              defaultValue={values.provinsiAgunan === '' ? '' : values.provinsiAgunan}
              margin="normal"
              fullWidth
              select >
              {
                daftarProvinsi.map((provinsi) =>
                  <MenuItem
                    key={provinsi.id}
                    value={provinsi.nama}
                    onClick={this.onProvinsiMenuItemClick(provinsi)}>
                    {provinsi.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={provinsiTerpilih==null}
              label={values.kotaKabupatenAgunan === "" ? "Pilih Kabupaten / Kota" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kotaKabupatenAgunan')}
              className={classes.text}
              defaultValue={values.kotaKabupatenAgunan === "" ? '' : values.kotaKabupatenAgunan}
              margin="normal"
              fullWidth
              select>
              {
                daftarKotaKabupaten.map((kota_kabupaten) =>
                  <MenuItem
                    key={kota_kabupaten.id}
                    value={kota_kabupaten.nama}
                    onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten)}>
                    {kota_kabupaten.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={kotaKabupatenTerpilih==null}
              label={values.kecamatanAgunan === "" ? "Pilih Kecamatan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kecamatanAgunan')}
              className={classes.text}
              defaultValue={values.kecamatanAgunan === "" ? '' : values.kecamatanAgunan}
              margin="normal"
              fullWidth
              select>
              {
                daftarKecamatan.map((kecamatan) =>
                  <MenuItem
                    key={kecamatan.id}
                    value={kecamatan.nama}
                    onClick={this.onKecamatanMenuItemClick(kecamatan)}>
                    {kecamatan.nama}
                  </MenuItem>)
              }
            </TextField>
            <TextField
              disabled={kecamatanTerpilih==null}
              label={values.kelurahanAgunan === "" ? "Pilih Kelurahan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('kelurahanAgunan')}
              className={classes.text}
              defaultValue={values.kelurahanAgunan === "" ? '' : values.kelurahanAgunan}
              margin="normal"
              fullWidth
              select>
              {
                daftarKelurahan.map((kelurahan) =>
                  <MenuItem
                    key={kelurahan.id}
                    value={kelurahan.nama}
                    onClick={this.onKelurahanMenuItemClick(kelurahan)}>
                    {kelurahan.nama}
                  </MenuItem>)
              }
            </TextField>
            <Grid container spacing={3}>
              <Grid item xs>
                <TextField
                  type='number'
                  disabled={kelurahanTerpilih==null}
                  placeholder="RT"
                  onChange={handleChange('rtAgunan')}
                  // style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.rtAgunan}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  type='number'
                  disabled={kelurahanTerpilih==null}
                  placeholder="RW"
                  onChange={handleChange('rwAgunan')}
                  // style={{  width: "170px" }}
                  defaultValue={values.rwAgunan}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  type='number'
                  disabled={kelurahanTerpilih==null}
                  placeholder="Kode Pos"
                  onChange={handleChange('kodePosAgunan')}
                  // style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.kodePosAgunan}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </FormControl>
          <br />
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

export default withStyles(styles)(FormDataAgunan);
