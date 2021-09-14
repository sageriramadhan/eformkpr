import React, { Component } from 'react';
import FormDataPekerjaanPemohon from '../Components/FormDataPekerjaanPemohon';
import Confirm from '../Components/Confirm';
import Success from '../Components/Success';
import Stepper from "../Components/stepper";

export class UserForm extends Component {
  state = {
    step: 1,
    lamaBekerja:'',   
    jenisPekerjaan:'',
    statusPekerjaan:'',                           
    namaPerusahaan:'',
    alamatKantor:'',  
    kategoriInstansi:'',                          
    bidangUsaha:'',   
    jumlahKaryawan:'',
    teleponKantor:'', 
    teleponHRD:'',    
    jabatan:'',       
    pendapatanPerBulan:'',                        
    pembayaranGaji:'',
    emailHRD:'',      
    emailAtasan:'',   
    teleponAtasan:''
  };


  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { lamaBekerja,   
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
      teleponAtasan, 
     } = this.state;

    const values = {lamaBekerja,   
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
      teleponAtasan
     };

    switch (step) {
      case 1:
        return (
          <>
          <Stepper currentStep={this.state.step} />
          <FormDataPekerjaanPemohon
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </>
        );
      case 2:
        return (
          <>
          <Stepper currentStep={this.state.step} />
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
          </>
        );
      case 3:
        return (
          <>
          <Stepper currentStep={this.state.step} />
        <Success />
        </>
          );
      default:
        (console.log('Terimakasih'))
    }
  }
}

export default UserForm;
