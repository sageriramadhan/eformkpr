import React, { Component,useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount(){
    this.createForm()
  }

  render() {
    const {
      values: { namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri,
         nomorNPWPSuamiIstri, pekerjaanSuamiIstri,lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri, 
         statusPekerjaanSuamiIstri,namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, 
         kategoriInstansiSuamiIstri,bidangUsahaSuamiIstri,jumlahKaryawanSuamiIstri,teleponKantorSuamiIstri,
         teleponHrdSuamiIstri,jabatanSuamiIstri,pendapatanBulananSuamiIstri,pembayaranGajiSuamiIstri,
         emailHrdSuamiIstri,emailAtasanSuamiIstri,teleponAtasanSuamiIstri}
    } = this.props;

    // useEffect(() => {createForm()},[])
    
    const createForm = () => {
      axios({
        url : "http://localhost:9000/user/api/create",
        method : 'post',
        headers : {
  
        },
        data : {
          namaSuamiIstri: namaSuamiIstri,
          tempatLahirSuamiIstri: tempatLahirSuamiIstri,
          tanggalLahirSuamiIstri: tanggalLahirSuamiIstri,
          nomorKTPSuamiIstri: nomorKTPSuamiIstri,
          nomorNPWPSuamiIstri: nomorNPWPSuamiIstri,
          pekerjaanSuamiIstri: pekerjaanSuamiIstri,
          // Page 6
          lamaBekerjaSuamiIstri: lamaBekerjaSuamiIstri,
          jenisPekerjaanSuamiIstri: jenisPekerjaanSuamiIstri,
          statusPekerjaanSuamiIstri: statusPekerjaanSuamiIstri,
          namaPerusahaanSuamiIstri: namaPerusahaanSuamiIstri,
          tempatUsahaSuamiIstri: tempatUsahaSuamiIstri,
          kategoriInstansiSuamiIstri: kategoriInstansiSuamiIstri,
          bidangUsahaSuamiIstri: bidangUsahaSuamiIstri,
          jumlahKaryawanSuamiIstri: jumlahKaryawanSuamiIstri,
          teleponKantorSuamiIstri: teleponKantorSuamiIstri,
          teleponHrdSuamiIstri: teleponHrdSuamiIstri,
          jabatanSuamiIstri: jabatanSuamiIstri,
          pendapatanBulananSuamiIstri: pendapatanBulananSuamiIstri,
          pembayaranGajiSuamiIstri: pembayaranGajiSuamiIstri,
          emailHrdSuamiIstri: emailHrdSuamiIstri,
          emailAtasanSuamiIstri: emailAtasanSuamiIstri,
          teleponAtasanSuamiIstri: teleponAtasanSuamiIstri
        }
      })
      .then((response) => console.log(response))
      .catch((err)=>console.log(err))
    }
    
    return (
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Data Berikut telah berhasil Disimpan" />
            <List>
              <ListItem>
                <ListItemText primary="Nama Suami / Istri" secondary={namaSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tempat Lahir Suami / Istri" secondary={tempatLahirSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tanggal Lahir Suami / Istri" secondary={tanggalLahirSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nomor KTP Suami / Istri" secondary={nomorKTPSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nomor NPWP Suami / Istri" secondary={nomorNPWPSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pekerjaan Suami / Istri" secondary={pekerjaanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Lama Bekerja Suami / Istri" secondary={lamaBekerjaSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jenis Pekerjaan Suami / Istri" secondary={jenisPekerjaanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Status Pekerjaan Suami / Istri" secondary={statusPekerjaanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nama Perusahaan Suami / Istri" secondary={namaPerusahaanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tempat Usaha Suami / Istri" secondary={tempatUsahaSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kategori Instansi Suami / Istri" secondary={kategoriInstansiSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bidang Usaha Suami / Istri" secondary={bidangUsahaSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jumlah Karyawan Suami / Istri" secondary={jumlahKaryawanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telepon Kantor Suami / Istri" secondary={teleponKantorSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telepon HRD Suami / Istri" secondary={teleponHrdSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jabatan Suami / Istri" secondary={jabatanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pendapatan Bulanan Suami / Istri" secondary={pendapatanBulananSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pembayaran Gaji Suami / Istri" secondary={pembayaranGajiSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email HRD Suami / Istri" secondary={emailHrdSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email Atasan Suami / Istri" secondary={emailAtasanSuamiIstri} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telepon Atasan Suami / Istri" secondary={teleponAtasanSuamiIstri} />
              </ListItem>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.createForm}
            >Keluar</Button>
          </Dialog>
        </>
    );
  }
}

export default Confirm;
