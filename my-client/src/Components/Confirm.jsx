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
      values: { namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, statusPerkawinan,
        pendidikanTerakhir, statusTempatTinggal, alamatKTP, provinsiKTP, kotaKabupatenKTP, alamatSaatIni,
        email}
    } = this.props;

    // axios({
    //   url : "http://localhost:9000/user/api/create",
    //   method : 'post',
    //   headers : {

    //   },
    //   data : {
    //     NIK : NIK,
    //     fullName : fullName,
    //     email : email,
    //     province : province,
    //     city :city,
    //     district : district
    //   }
    // })
    // .then((response) => console.log(response))
    // .catch((err)=>console.log(err))
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
                <ListItemText primary="No. KTP" secondary={noKTP} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nama Lengkap" secondary={namaLengkap} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Provinsi" secondary={provinsiKTP} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kota/Kabupaten" secondary={kotaKabupatenKTP} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tempat Tanggal Lahir" secondary={tanggalLahir}/>
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
