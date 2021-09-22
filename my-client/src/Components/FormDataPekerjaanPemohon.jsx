import React, { Component } from 'react';
import { AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid, InputAdornment } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import InputMask from "react-input-mask";

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
    width: "641px"
  }
});

export class FormDataPekerjaanPemohon extends Component {
  state = { checkedA: false, isPekerjaanLainnya: false, isKategoriPekerjaan:false }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  jump = e => {
    e.preventDefault();
    this.props.tripleNext();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  tripleBack = e => {
    e.preventDefault();
    this.props.triplePrevious();
  };

  render() {
    const { state, values, handleChange, handlePekerjaanLain,handlekategoriInstansiPekerjaan, classes, isPekerjaanLainnya, isKategoriPekerjaan } = this.props;

    return (
      <div className="mainPage">
        <div className="mainForm">
          <p className="judul">Data Pekerjaan Pemohon</p>
          <br />
          <br />
          <AppBar title="Masukkan Data Pengguna" />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Jenis Pekerjaan</FormLabel>
            <TextField
              label={values.jenisPekerjaanPemohon === "" ? "Pilih Jenis Pekerjaan" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handlePekerjaanLain('jenisPekerjaanPemohon')}
              defaultValue={values.jenisPekerjaanPemohon}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Karyawan</MenuItem>
              <MenuItem value={20}>Profesional</MenuItem>
              <MenuItem value={30}>Wiraswasta</MenuItem>
              <MenuItem value={40}>Pegawai Negeri(PNS)</MenuItem>
              <MenuItem value={50}>Pegawai Swasta</MenuItem>
              <MenuItem value="lainnyaPekerjaan">Lainnya</MenuItem>
            </TextField>
            {
              isPekerjaanLainnya ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("pekerjaanLainnya")}
                  //tambah state baru statusLainnya
                  defaultValue={values.pekerjaanLainnyaPemohon}
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
              onChange={handleChange('namaPerusahaanPemohon')}
              defaultValue={values.namaPerusahaanPemohon}
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
              onChange={handleChange('jabatanPemohon')}
              defaultValue={values.jabatanPemohon}
              margin="normal"
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Kategori Instansi</FormLabel>
            <TextField
              label={values.kategoriInstansiPekerjaanPemohon === "" ? "Pilih Kategori Instansi" : ""}
              className={classes.text}
              InputLabelProps={{ shrink: false }}
              onChange={handlekategoriInstansiPekerjaan('kategoriInstansiPekerjaanPemohon')}
              defaultValue={values.kategoriInstansiPekerjaanPemohon}
              margin="normal"
              fullWidth
              select>
              <MenuItem value={10}>Pemerintah</MenuItem>
              <MenuItem value={20}>BUMN</MenuItem>
              <MenuItem value={30}>TNI/Polri</MenuItem>
              <MenuItem value={40}>Wiraswasta/Profesional</MenuItem>
              <MenuItem value={50}>Swasta Asing</MenuItem>
              <MenuItem value={60}>Swasta Nasional</MenuItem>
              <MenuItem value="lainnyaKategori">Lainnya</MenuItem>
            </TextField>
            {
              isKategoriPekerjaan ?
                <TextField
                  placeholder="Lainnya"
                  margin="normal"
                  className={classes.text}
                  onChange={handleChange("lainKategoriPekerjaanPemohon")}
                  defaultValue={values.lainKategoriPekerjaanPemohon}
                />
                : null
            }
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Lama Bekerja</FormLabel>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <TextField
                  placeholder="Tahun"
                  onChange={handleChange('tahunLamaBekerjaPemohon')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.tahunLamaBekerjaPemohon}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  placeholder="Bulan"
                  onChange={handleChange('bulanLamaBekerjaPemohon')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.bulanLamaBekerjaPemohon}
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
                  placeholder="Jumlah Karyawan"
                  onChange={handleChange('jumlahKaryawanPekerjaanPemohon')}
                  style={{ paddingRight: "20px", width: "170px" }}
                  defaultValue={values.jumlahKaryawanPekerjaanPemohon}
                  margin="normal"
                />
          </FormControl>
          <br/>
          <br/>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Pendapatan Per Bulan</FormLabel>
            <CurrencyTextField
              className={classes.text}
              name='pendapatanPerbulanPemohon'
              defaultValue={values.pendapatanPerbulanPemohon}
              currencySymbol="Rp | "
              decimalCharacter=","
              digitGroupSeparator="."
              modifyValueOnWheel={false}
              onChange={handleChange('pendapatanPerbulanPemohon')}
              inputProps={{style: { textAlign: 'left'}}}
              margin='normal'
            />
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.formControl}>
          <FormLabel className={classes.label}>Pembayaran Gaji</FormLabel>
            <TextField
              label={values.pembayaranGajiPemohon === "" ? "Masukan Cara Pembayaran Gaji" : ""}
              InputLabelProps={{ shrink: false }}
              onChange={handleChange('pembayaranGajiPemohon')}
              className={classes.text}
              defaultValue={values.pembayaranGajiPemohon}
              margin="normal"
              fullWidth
              select>
              <MenuItem value="Transfer Bank Muamalat">Transfer Bank Muamalat</MenuItem>
              <MenuItem value="Transfer Bank Lain">Transfer Bank Lain</MenuItem>
            </TextField>
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Kantor</FormLabel>
            <TextField
              placeholder="Masukan Alamat Kantor"
              onChange={handleChange('alamatKantorPemohon')}
              className={classes.text}
              defaultValue={values.alamatKantorPemohon}
              margin="normal"
              fullWidth
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Kantor</FormLabel>
            <div>
              <InputMask
                  mask="+62 | 999-9999-9999"
                  value={values.teleponKantorPemohon}
                  onChange={handleChange('teleponKantorPemohon')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon Kantor"
                    name='teleponKantorPemohon'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon HRD</FormLabel>
            <div>
              <InputMask
                  mask="+62 | 999-9999-99999"
                  value={values.teleponHRDPemohon}
                  onChange={handleChange('teleponHRDPemohon')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon HRD"
                    name='teleponHRDPemohon'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Email HRD</FormLabel>
            <TextField
              placeholder="Masukan Alamat Email HRD"
              onChange={handleChange('emailHRDPemohon')}
              className={classes.text}
              defaultValue={values.emailHRDPemohon}
              margin="normal"
              fullWidth
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Atasan</FormLabel>
            <div>
              <InputMask
                  mask="+62 | 999-9999-99999"
                  value={values.teleponAtasanPemohon}
                  onChange={handleChange('teleponAtasanPemohon')}
                  maskChar=" "
              >
                {() => <TextField
                    className={classes.text}
                    placeholder="Masukkan Telepon Atasan"
                    name='teleponAtasanPemohon'
                    fullWidth
                    margin='normal' />}
              </InputMask>
            </div>
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Alamat Email Atasan</FormLabel>
            <TextField
              placeholder="Masukan Alamat Email Atasan"
              onChange={handleChange('emailAtasanPemohon')}
              className={classes.text}
              defaultValue={values.emailAtasanPemohon}
              margin="normal"
              fullWidth
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>No. Telepon Atasan</FormLabel>
            <TextField
              placeholder="xxx-xxxx-xxxx"
              id="standard-start-adornment"
              onChange={handleChange('teleponAtasanPemohon')}
              className={classes.text}
              InputProps={{
                startAdornment: <InputAdornment position="start">+62 | </InputAdornment> 
              }}
              defaultValue={values.teleponAtasanPemohon}
              margin="normal"
              fullWidth
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Masukan Bidang Usaha</FormLabel>
            <TextField
              placeholder="Masukan Bidang Usaha"
              onChange={handleChange('bidangUsahaPemohon')}
              className={classes.text}
              defaultValue={values.bidangUsahaPemohon}
              margin="normal"
              fullWidth
            />
            </FormControl>
          <div className="footer">
          {
              values.statusPerkawinan == 'Menikah'
              ? 
              <Button
              className="button1"
              variant="contained"
              onClick={this.back}
              >Kembali</Button>
              :
              <Button
              className="button1"
              variant="contained"
              onClick={this.tripleBack}
              >Kembali</Button>
            }

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

export default withStyles(styles)(FormDataPekerjaanPemohon);
