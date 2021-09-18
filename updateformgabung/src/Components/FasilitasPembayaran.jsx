import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Dialog, AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, Select } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';

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
  }
});

export class FasilitasPembayaran extends Component {

  state = { checkAd: false, isSelect: false, isMmq: false, isLainnya: false, isLainProgram: false, isAkad: false, isPropertiKendaraan: false, isProperti: false, isTakeOver: false, isFasilitas: false, isBank: false }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })
    this.props.handleAlamatSama();
  }

  handleLainnya = (event) => {
    if (event.target.value === "Lainnya") {
      this.setState({ isLainnya: true })
      this.props.handleChange("objekDibiayai")
    } else {
      this.setState({ isLainnya: false })
      this.props.handleChange("objekDibiayai")
    }
  }

  handleMmq = (event) => {
    if (event.target.value === "MMQ") {
      this.setState({ isMmq: true })
      this.setState({ isLainProgram: false })
      this.props.handleChange("peruntukanPembiayaan")
    } else if (event.target.value === "Lainnyaa") {
      this.setState({ isMmq: false })
      this.setState({ isLainProgram: true })
      this.props.handleChange("peruntukanPembiayaan")

    } else {
      this.setState({ isMmq: false })
      this.setState({ isLainProgram: false })

      this.props.handleChange("peruntukanPembiayaan")
    }
  }

  handleAkad = (event) => {
    if (event.target.value === "LainAkad") {
      this.setState({ isAkad: true })
      this.props.handleChange("fasilitasDiajukan")
    } else {
      this.setState({ isAkad: false })
      this.props.handleChange("fasilitasDiajukan")
    }
  }

  handlePembiayaan = (event) => {
    if (event.target.value === "PropertiKendaraan") {
      this.setState({ isPropertiKendaraan: true })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })
      this.props.handleChange("tujuanPembiayaan")
    } else if (event.target.value === "Properti") {
      this.setState({ isProperti: true })
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isTakeOver: false })
      this.props.handleChange("tujuanPembiayaan")

    } else if (event.target.value === "TakeOver") {
      this.setState({ isTakeOver: true })
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isProperti: false })

    } else {
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })

      this.props.handleChange("tujuanPembiayaan")
    }
  }

  handleFasilitas = (event) => {
    if (event.target.value === "LainFasilSebelum") {
      this.setState({ isFasilitas: true })
      this.props.handleChange("bankSebelumnya")
    } else {
      this.setState({ isFasilitas: false })
      this.props.handleChange("bankSebelumnya")
    }
  }

  handleAkadFasilitas = (event) => {
    if (event.target.value === "LainnyaAkad") {
      this.setState({ isBank: true })
      this.props.handleChange("akadFasilitas")
    } else {
      this.setState({ isBank: false })
      this.props.handleChange("akadFasilitas")
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
    const { values, handleChange, classes, handleLainnya, handleMmq, handleAkad, handlePembiayaan, handleFasilitas, handleAkadFasilitas,
      daftarProvinsi, daftarKabupatenKota,
      daftarKecamatan, daftarKelurahan,
      handleProvinsi, handleKabupatenKota,
      handleKecamatan, handleKelurahan,
      provinsiTerpilih, kabupatenKotaTerpilih,
      kecamatanTerpilih, kelurahanTerpilih, isLainnya, isMmq, isLainProgram, isAkad, isPropertiKendaraan, isProperti, isTakeOver, isFasilitas, isBank } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Fasilitas Pembayaran</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Skema Pengajuan</FormLabel>
            <TextField
              className={classes.text}
              name='skemaPengajuan'
              label={values.skemaPengajuan === "" ? "Pilih Skema Pengajuan" : ""}
              onChange={handleChange('skemaPengajuan')}
              defaultValue={values.skemaPengajuan}
              margin="normal"
              InputLabelProps={{ shrink: false }}
              select>
              <MenuItem value={10}>Penghasilan Tabungan</MenuItem>
              <MenuItem value={20} onChange={this.changeLainnya}>Penghasilan Gabungan / Joint Income (Suami / Istri)</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Objek yang Dibiayai</FormLabel>
            <TextField
              label={values.objekDibiayai === "" ? "Pilih Objek yang Dibiayai" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleLainnya('objekDibiayai')}
              className={classes.text}
              name='objekDibiayai'
              defaultValue={values.objekDibiayai}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Properti</MenuItem>
              <MenuItem value={20}>Renovasi/Pembangunan</MenuItem>
              <MenuItem value={30}>Kendaraan</MenuItem>
              <MenuItem value={40}>Furniture</MenuItem>
              <MenuItem value={50}>Jasa Konsumtif</MenuItem>
              <MenuItem value="Lainnya" >Lainnya</MenuItem>
            </TextField>
            {
              isLainnya ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  name='statusLainnya'
                  onChange={handleChange}
                  //tambah state baru statusLainnya
                  defaultValue={values.statusLainnya}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Peruntukan Pembiayaan</FormLabel>
            <TextField
              label={values.peruntukanPembiayaan === "" ? "Pilih Peruntukan Pembiayaan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleLainnya('peruntukanPembiayaan')}
              className={classes.text}
              name='peruntukanPembiayaan'
              defaultValue={values.peruntukanPembiayaan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Pembelian Properti</MenuItem>
              <MenuItem value={20}>Top Up</MenuItem>
              <MenuItem value={30}>Take Over</MenuItem>
              <MenuItem value={40}>Take Over + Top Up</MenuItem>
              <MenuItem value={50}>Pembiayaan Konsumsi Beragun Properti</MenuItem>
            </TextField>
          </FormControl>
          <br />
          <br />

          {/* Program MMQ dan Lainnya */}
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Program</FormLabel>
            <TextField
              label={values.pilihProgram === "" ? "Pilih Program" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleMmq('pilihProgram')}
              className={classes.text}
              defaultValue={values.pilihProgram}
              name='pilihProgram'
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Fix & Fix</MenuItem>
              <MenuItem value={20}>Angsuran Super Ringan</MenuItem>
              <MenuItem value="MMQ">Special MMQ</MenuItem>
              <MenuItem value="Lainnyaa">Lainnya</MenuItem>
            </TextField>
            {
              isMmq ?
                <TextField
                  placeholder="Masukan Masa Fix"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("specialMmq")}
                  name='specialMmq'
                  //tambah state baru statusLainnya
                  defaultValue={values.specialMmq}
                />
                : null
            }
            {
              isLainProgram ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("statusProgram")}
                  name='statusProgram'
                  //tambah state baru statusLainnya
                  defaultValue={values.statusProgram}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          {/* Lainnya Belum */}
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Akad Fasilitas yang Diajukan</FormLabel>
            <TextField
              label={values.fasilitasDiajukan === "" ? "Pilih Akad Fasilitas yang Diajukan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleAkad('fasilitasDiajukan')}
              className={classes.text}
              name='fasilitasDiajukan'
              defaultValue={values.fasilitasDiajukan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Murabahah</MenuItem>
              <MenuItem value={20}>MMQ (Musyrakah Mutanaqishah</MenuItem>
              <MenuItem value={30}>Istishna</MenuItem>
              <MenuItem value="LainAkad">Lainnya</MenuItem>
            </TextField>
            {
              isAkad ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("lainAkad")}
                  name='lainAkad'
                  //tambah state baru statusLainnya
                  defaultValue={values.lainAkad}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Total Plafon yang Diajukan</FormLabel>
            <TextField
              placeholder="Pilih Total Plafon yang Diajukan"
              className={classes.text}
              onChange={handleChange('totalPlafon')}
              name='totalPlafon'
              defaultValue={values.totalPlafon}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jangka Waktu Pembiayaan</FormLabel>
            <TextField
              placeholder="Pilih Jangka Waktu Pembiayaan"
              className={classes.text}
              onChange={handleChange('waktuPembiayaan')}
              name='waktuPembiayaan'
              defaultValue={values.waktuPembiayaan}
              margin="normal"
              fullWidth
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Tujuan Pembiayaan</FormLabel>
            <TextField
              label={values.tujuanPembiayaan === "" ? "Pilih Tujuan Pembiayaan" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handlePembiayaan('tujuanPembiayaan')}
              name='tujuanPembiayaan'
              className={classes.text}
              defaultValue={values.tujuanPembiayaan}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="PropertiKendaraan">Pembelian Properti / Kendaraan</MenuItem>
              <MenuItem value="Properti">Pembelian Properti</MenuItem>
              <MenuItem value="TakeOver">Take Over Murni atau Take Over + Top UP</MenuItem>
            </TextField>

            {
              isPropertiKendaraan ?
                <>
                  <FormControl>
                    <FormLabel className={classes.label}>Jenis Penjual</FormLabel>
                    <TextField
                      className={classes.text}
                      label={values.jenisPenjualan === "" ? "Pilih Jenis Penjual" : ""}
                      onChange={handleChange('jenisPenjualan')}
                      defaultValue={values.jenisPenjualan}
                      name='jenisPenjualan'
                      margin="normal"
                      InputLabelProps={{ shrink: false }}
                      select>
                      <MenuItem value={10}>Developer Rekanan</MenuItem>
                      <MenuItem value={20}>Developer Non Rekanan</MenuItem>
                      <MenuItem value={30}>Non Developer</MenuItem>
                    </TextField>
                  </FormControl>

                  <FormControl>
                    <FormLabel className={classes.label}>Nama Penjual</FormLabel>
                    <TextField
                      placeholder="Pilih Nama Penjual"
                      className={classes.text}
                      onChange={handleChange('namaPenjual')}
                      name='namaPenjual'
                      defaultValue={values.namaPenjual}
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>

                  <FormControl >
                    <FormLabel className={classes.label}>Harga Penawaran Penjual / Nilai SPR*</FormLabel>
                    <TextField
                      placeholder="0"
                      className={classes.text}
                      onChange={handleChange('nomorSPRDeveloper')}
                      defaultValue={values.nomorSPRDeveloper}
                      name='nomorSPRDeveloper'
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                      }}
                      helperText="*) Surat Pemesanan Rumah"
                    />
                  </FormControl>
                  <FormControl >
                    <FormLabel className={classes.label}>No Telp Penjual</FormLabel>
                    <TextField
                      placeholder="xxx-xxxx-xxxx"
                      className={classes.text}
                      onChange={handleChange('nomorPenjual')}
                      defaultValue={values.nomorPenjual}
                      name='nomorPenjual'
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">+62 |</InputAdornment>,
                      }}
                    />
                  </FormControl>
                  <FormControl >
                    <FormLabel className={classes.label}>Harga Penawaran Penjual / Nilai SPR*</FormLabel>
                    <TextField
                      placeholder="0"
                      className={classes.text}
                      onChange={handleChange('nomorSPRDeveloper')}
                      defaultValue={values.nomorSPRDeveloper}
                      name='nomorSPRDeveloper'
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                      }}
                      helperText="*) Surat Pemesanan Rumah"
                    />
                  </FormControl>

                  <FormControl >
                    <FormLabel className={classes.label}>Uang Muka</FormLabel>
                    <TextField
                      placeholder="0"
                      className={classes.text}
                      onChange={handleChange('uangMuka')}
                      defaultValue={values.uangMuka}
                      name='uangMuka'
                      margin="normal"
                      fullWidth
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                      }}
                    />
                  </FormControl>
                </>
                : null
            }
            {
              isProperti ?
                <>
                  <FormControl id="pemisah">
                    <FormLabel className={classes.label}>Nama Proyek (jika penjual developer)</FormLabel>
                    <TextField
                      placeholder="Pilih Nama Proyek (jika penjual developer)"
                      className={classes.text}
                      onChange={handleChange('namaProyek')}
                      name='namaProyek'
                      defaultValue={values.namaProyek}
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel className={classes.label}>Kondisi Bangunan</FormLabel>
                    <TextField
                      className={classes.text}
                      label={values.kondisiBangunan === "" ? "Pilih Kondisi Bangunan" : ""}
                      onChange={handleChange('kondisiBangunan')}
                      defaultValue={values.kondisiBangunan}
                      name='kondisiBangunan'
                      margin="normal"
                      InputLabelProps={{ shrink: false }}
                      select>
                      <MenuItem value={10}>Siap Huni (ready stock)</MenuItem>
                      <MenuItem value={20}>Dalam Proses Pembuatan (indent)</MenuItem>
                    </TextField>
                  </FormControl>

                  <FormControl >
                    <FormLabel className={classes.label}>Alamat Agunan</FormLabel>
                    <TextField
                      placeholder="Masukkan Alamat Properti"
                      onChange={handleChange('alamatPropertiAgunan')}
                      className={classes.text}
                      defaultValue={values.alamatPropertiAgunan}
                      name='alamatPropertiAgunan'
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      label={values.provinsiAgunan === "" ? "Pilih Provinsi" : ""}
                      InputLabelProps={{ shrink: false }}
                      onChange={handleChange('provinsiAgunan')}
                      // onChange="handleChange('provinsiAgunan'); this.setState({provinsiTerpilih: values.provinsiAgunan});"
                      className={classes.text}
                      defaultValue={values.provinsiAgunan}
                      name='provinsiAgunan'
                      margin="normal"
                      fullWidth
                      select >
                      {
                        daftarProvinsi.map((provinsi) =>
                          <MenuItem
                            key={provinsi.id}
                            value={provinsi.id}
                            onClick={handleProvinsi(provinsi)}>
                            {provinsi.nama}
                          </MenuItem>)
                      }
                    </TextField>
                    <TextField
                      disabled={provinsiTerpilih == null}
                      label={values.kabupatenKotaAgunan === "" ? "Pilih Kabupaten / Kota" : ""}
                      InputLabelProps={{ shrink: false }}
                      onChange={handleChange('kabupatenKotaAgunan')}
                      name='kabupatenKotaAgunan'
                      className={classes.text}
                      defaultValue={values.kabupatenKotaAgunan}
                      margin="normal"
                      fullWidth
                      select>
                      {
                        daftarKabupatenKota.map((kota_kabupaten) =>
                          <MenuItem
                            key={kota_kabupaten.id}
                            value={kota_kabupaten.id}
                            onClick={handleKabupatenKota(kota_kabupaten)}>
                            {kota_kabupaten.nama}
                          </MenuItem>)
                      }
                    </TextField>
                    <TextField
                      disabled={kabupatenKotaTerpilih == null}
                      label={values.kecamatanAgunan === "" ? "Pilih Kecamatan" : ""}
                      InputLabelProps={{ shrink: false }}
                      onChange={handleChange('kecamatanAgunan')}
                      name='kecamatanAgunan'
                      className={classes.text}
                      defaultValue={values.kecamatanAgunan}
                      margin="normal"
                      fullWidth
                      select>
                      {
                        daftarKecamatan.map((kecamatan) =>
                          <MenuItem
                            key={kecamatan.id}
                            value={kecamatan.id}
                            onClick={handleKecamatan(kecamatan)}>
                            {kecamatan.nama}
                          </MenuItem>)
                      }
                    </TextField>
                    <TextField
                      disabled={kecamatanTerpilih == null}
                      label={values.kelurahanAgunan === "" ? "Pilih Kelurahan" : ""}
                      InputLabelProps={{ shrink: false }}
                      onChange={handleChange('kelurahanAgunan')}
                      name='kelurahanAgunan'
                      className={classes.text}
                      defaultValue={values.kelurahanAgunan}
                      margin="normal"
                      fullWidth
                      select>
                      {
                        daftarKelurahan.map((kelurahan) =>
                          <MenuItem
                            key={kelurahan.id}
                            value={kelurahan.id}
                            onClick={handleKelurahan(kelurahan)}
                          >
                            {kelurahan.nama}
                          </MenuItem>)
                      }
                    </TextField>
                    <Grid container spacing={24}>
                      <Grid item xs={4}>
                        <TextField
                          disabled={kelurahanTerpilih == null}
                          placeholder="RT/RW"
                          onChange={handleChange('rtRwAgunan')}
                          name='rtRwAgunan'
                          style={{ paddingRight: "20px", width: "170px" }}
                          defaultValue={values.rtRwAgunan}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          disabled={kelurahanTerpilih == null}
                          placeholder="Kode Pos"
                          onChange={handleChange('kodePosAgunan')}
                          name='kodePosAgunan'
                          style={{ paddingRight: "20px", width: "170px" }}
                          defaultValue={values.kodePosAgunan}
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </>
                : null
            }
            {
              isTakeOver ?
                <>
                  <FormControl>
                    <FormLabel className={classes.label}>Jenis Bank Asal</FormLabel>
                    <TextField
                      className={classes.text}
                      label={values.jenisBank === "" ? "Pilih Jenis Bank Asal" : ""}
                      onChange={handleChange('jenisBank')}
                      defaultValue={values.jenisBank}
                      name='jenisBank'
                      margin="normal"
                      InputLabelProps={{ shrink: false }}
                      select>
                      <MenuItem value={10}>Bank Konvensional</MenuItem>
                      <MenuItem value={20}>Bank Syariah</MenuItem>
                    </TextField>
                  </FormControl>

                  <FormControl >
                    <FormLabel className={classes.label}>Nama Bank</FormLabel>
                    <TextField
                      placeholder="Masukan Nama Bank "
                      className={classes.text}
                      onChange={handleChange('namaBankSebelum')}
                      defaultValue={values.namaBankSebelum}
                      name='namaBankSebelum'
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel className={classes.label}>Peruntukan Fasilitas di Bank Sebelumnya</FormLabel>
                    <TextField
                      className={classes.text}
                      label={values.bankSebelumnya === "" ? "Pilih Peruntukan Fasilitas di Bank Sebelumnya" : ""}
                      onChange={handleFasilitas('bankSebelumnya')}
                      defaultValue={values.bankSebelumnya}
                      name='bankSebelumnya'
                      margin="normal"
                      InputLabelProps={{ shrink: false }}
                      select>
                      <MenuItem value={10}>Pembelian Properti</MenuItem>
                      <MenuItem value={20}>Renovasi Pembangunan</MenuItem>
                      <MenuItem value={30}>Refinancing/Konsumsi Beragunan Properti</MenuItem>
                      <MenuItem value="LainFasilSebelum">Lainnya</MenuItem>
                    </TextField>
                    {
                      isFasilitas ?
                        <FormControl>
                          <TextField
                            placeholder="Lainnya"
                            margin="normal"
                            className={classes.text}
                            onChange={handleChange("lainnyaBank")}
                            //tambah state baru statusLainnya
                            defaultValue={values.lainnyaBank}
                            name='lainnyaBank'
                          />
                        </FormControl>
                        : null
                    }

                    <FormControl>
                      <FormLabel className={classes.label}>Akad Fasilitas di Bank Sebelumnya</FormLabel>
                      <TextField
                        className={classes.text}
                        label={values.akadFasilitas === "" ? "Pilih Akad Fasilitas di Bank Sebelumnya" : ""}
                        onChange={handleAkadFasilitas('akadFasilitas')}
                        defaultValue={values.akadFasilitas}
                        name='akadFasilitas'
                        margin="normal"
                        InputLabelProps={{ shrink: false }}
                        select>
                        <MenuItem value={10}>Murabahah</MenuItem>
                        <MenuItem value={20}>MMQ</MenuItem>
                        <MenuItem value={30}>IMBT</MenuItem>
                        <MenuItem value="LainnyaAkad">Lainnya</MenuItem>
                      </TextField>
                      {
                        isBank ?
                          <TextField
                            placeholder="Lainnya"
                            margin="normal"
                            className={classes.text}
                            onChange={handleChange("lainBank")}
                            //tambah state baru statusLainnya
                            defaultValue={values.lainBank}
                            name='lainBank'
                          />
                          : null
                      }
                      <br />
                      <br />
                    </FormControl>
                    <FormControl >
                      <FormLabel className={classes.label}>Perkiraan Nilai Pelunasan Take Over</FormLabel>
                      <TextField
                        placeholder="0"
                        className={classes.text}
                        onChange={handleChange('pelunasanTakeover')}
                        defaultValue={values.pelunasanTakeover}
                        name='pelunasanTakeover'
                        margin="normal"
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                        }}
                      />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl >
                      <FormLabel className={classes.label}>Plafond Top Up</FormLabel>
                      <TextField
                        placeholder="0"
                        className={classes.text}
                        onChange={handleChange('plafondTop')}
                        defaultValue={values.plafondTop}
                        name='plafondTop'
                        margin="normal"
                        fullWidth
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Rp. |</InputAdornment>,
                        }}
                      />
                    </FormControl>

                  </FormControl>
                </>
                : null
            }
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

export default withStyles(styles)(FasilitasPembayaran);
