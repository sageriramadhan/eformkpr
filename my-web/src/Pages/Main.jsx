import React, { Component } from 'react';
import DataSuamiIstri from '../Components/DataSuamiIstri';
import DataPekerjaanSuamiIstri from '../Components/DataPekerjaanSuamiIstri';
import Confirm from '../Components/Confirm'
import Success from '../Components/Success';
// import FormDataPemohon from '../Components/FormDataPemohon'

export class Main extends Component {
  constructor(props){  
        super(props);  
        this.state = {  
            step: 1,
            namaSuamiIstri: '',
            tempatLahirSuamiIstri: '',
            tanggalLahirSuamiIstri: '',
            nomorKTPSuamiIstri: '',
            nomorNPWPSuamiIstri: '',
            pekerjaanSuamiIstri: '',
            // Page 6
            lamaBekerjaSuamiIstri: '',
            jenisPekerjaanSuamiIstri: '',
            statusPekerjaanSuamiIstri: '',
            namaPerusahaanSuamiIstri: '',
            tempatUsahaSuamiIstri: '',
            kategoriInstansiSuamiIstri: '',
            bidangUsahaSuamiIstri: '',
            jumlahKaryawanSuamiIstri: '',
            teleponKantorSuamiIstri: '',
            teleponHrdSuamiIstri: '',
            jabatanSuamiIstri: '',
            pendapatanBulananSuamiIstri: '',
            pembayaranGajiSuamiIstri: '',
            emailHrdSuamiIstri: '',
            emailAtasanSuamiIstri: '',
            teleponAtasanSuamiIstri: ''
        }
        // this.tlp = {teleponAtasanSuamiIstri: ''}
  }  
//   state = {
//     step: 1,
//     namaSuamiIstri: '',
//     tempatLahirSuamiIstri: '',
//     tanggalLahirSuamiIstri: '',
//     nomorKTPSuamiIstri: '',
//     nomorNPWPSuamiIstri: '',
//     pekerjaanSuamiIstri: '',
//     // Page 6
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
//     teleponAtasanSuamiIstri: ''
//   };

  // Proceed to next step
  nextStep = () => {
    // const { step } = this.state;
    this.setState({
      step: this.state.step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    // const { step } = this.state;
    this.setState({
      step: this.state.step - 1
    });
  };

  // Handle fields change
  handleChange = e => {
    const name = e.target.name
    this.setState({ [name]: e.target.value });
  };

  // handleChangeTlp = e => {
  //   this.setTlp({teleponAtasanSuamiIstri: e.target.value})
  // }

  render() {
    const { step } = this.state;
    const {namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri,
         nomorNPWPSuamiIstri, pekerjaanSuamiIstri,lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri, 
         statusPekerjaanSuamiIstri,namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, 
         kategoriInstansiSuamiIstri,bidangUsahaSuamiIstri,jumlahKaryawanSuamiIstri,teleponKantorSuamiIstri,
         teleponHrdSuamiIstri,jabatanSuamiIstri,pendapatanBulananSuamiIstri,pembayaranGajiSuamiIstri,
         emailHrdSuamiIstri,emailAtasanSuamiIstri} = this.state;

    const values = {
        namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri,
        nomorNPWPSuamiIstri, pekerjaanSuamiIstri,lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri, 
        statusPekerjaanSuamiIstri,namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, 
        kategoriInstansiSuamiIstri,bidangUsahaSuamiIstri,jumlahKaryawanSuamiIstri,teleponKantorSuamiIstri,
        teleponHrdSuamiIstri,jabatanSuamiIstri,pendapatanBulananSuamiIstri,pembayaranGajiSuamiIstri,
        emailHrdSuamiIstri,emailAtasanSuamiIstri
    };

    switch (step) {
      case 1:
        return (
          <DataSuamiIstri
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DataPekerjaanSuamiIstri
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('Terimakasih'))
    }
  }
}

export default Main;
