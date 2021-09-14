import React, { Component } from 'react';
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

  render() {
    const {
      values: {lamaBekerja,   
        jenisPekerjaan,
        statusPekerjaan,                           
        namaPerusahaan,
        alamatKantor,  
        kategoriInstansi,                          
        bidangUsaha,   
        jumlahKaryawan,
        teleponKantor, 
        teleponHRD,    
        jabatan,       
        pendapatanPerBulan,                        
        pembayaranGaji,
        emailHRD,      
        emailAtasan,   
        teleponAtasan}
    } = this.props;
    axios({
      url : "http://localhost:9000/user/api/create",
      method : 'post',
      headers : {

      },
      data : {
        lamaBekerja:lamaBekerja,   
        jenisPekerjaan:jenisPekerjaan,
        statusPekerjaan:statusPekerjaan,                           
        namaPerusahaan:namaPerusahaan,
        alamatKantor:alamatKantor,  
        kategoriInstansi:kategoriInstansi,                          
        bidangUsaha:bidangUsaha,   
        jumlahKaryawan:jumlahKaryawan,
        teleponKantor:teleponKantor, 
        teleponHRD:teleponHRD,    
        jabatan:jabatan,       
        pendapatanPerBulan:pendapatanPerBulan,                        
        pembayaranGaji:pembayaranGaji,
        emailHRD:emailHRD,      
        emailAtasan:emailAtasan,   
        teleponAtasan:teleponAtasan
      }
    })
    .then((response) => console.log(response))
    .catch((err)=>console.log(err))
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
                <ListItemText primary="Lama Bekerja" secondary={lamaBekerja} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jenis Pekerjaan" secondary={jenisPekerjaan} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Status Pekerjaan" secondary={statusPekerjaan} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nama Perusahaan" secondary={namaPerusahaan} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Alamat Perusahaan" secondary={alamatKantor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kategori Instansi" secondary={kategoriInstansi} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bidang Usaha" secondary={bidangUsaha} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jumlah Karyawan" secondary={jumlahKaryawan} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telepon Kantor" secondary={teleponKantor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telepon HRD" secondary={teleponHRD} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jabatan" secondary={jabatan} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pendapatan Perbulan" secondary={pendapatanPerBulan} />
              </ListItem>
            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Keluar</Button>
          </Dialog>
        </>
    );
  }
}

export default Confirm;
