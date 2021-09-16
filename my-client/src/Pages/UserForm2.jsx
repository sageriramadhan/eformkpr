import React, { Component } from 'react';
import FormDataAgunan2 from '../Components/FormDataAgunan2';
import Confirm from '../Components/Confirm';
import Success from '../Components/Success';
import FormDataPemohon2 from '../Components/FormDataPemohon2'
import axios from 'axios';
import { LocationService } from '../Service/LocationService';

export class UserForm2 extends Component {

  state = {
    step: 1,
    jenisAgunan: '',
    luasTanah: '',
    luasBangunan: '',
    statusKepemilikan: '',
    kondisiBangunan: '',
    statusAgunan: '',
    atasNamaSertifikat: '',
    nomorSertifikat: '',
    nomorSPRDeveloper: '',
    alamatPropertiAgunan: '',
    provinsiAgunan: '',
    kabupatenKotaAgunan: '',
    kecamatanAgunan: '',
    kelurahanAgunan: '',
    rtRwAgunan: '',
    kodePosAgunan: '',
    //page3
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    noKTP: '',
    noNPWP: '',
    namaGadisIbuKandung: '',
    statusPerkawinan: '',
    pendidikanTerakhir: '',
    statusTempatTinggal: '',
    alamatKTP: '',
    provinsiKTP: '',
    kotaKabupatenKTP: '',
    kelurahanKTP: '',
    kecamatanKTP: '',
    kodeposKTP: '',
    alamatSaatIni: '',
    provinsiSaatIni: '',
    kotaKabupatenSaatIni: '',
    kelurahanSaatIni: '',
    kecamatanSaatIni: '',
    kodeposSaatIni: '',
    alamatSuratMenyurat: '',
    noTeleponRumah: '',
    email: '',
    noHP: '',
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


  handleProvinsi = (provinsi, tag) => {
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ provinsiAgunan: provinsi.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ provinsiKTP: provinsi.nama })
    } else { // saat ini
      this.setState({ provinsiSaatIni: provinsi.nama })
    }
  }

  handleKotaKabupaten = (kota_kabupaten, tag) => {
    console.log(`hai juga: ${kota_kabupaten.nama}`)
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kabupatenKotaAgunan: kota_kabupaten.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kotaKabupatenKTP: kota_kabupaten.nama })
    } else { // saat ini
      this.setState({ kotaKabupatenSaatIni: kota_kabupaten.nama })
    }
  }

  handleKecamatan = (kecamatan, tag) => {
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kecamatanAgunan: kecamatan.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kecamatanKTP: kecamatan.nama })
    } else { // saat ini
      this.setState({ kecamatanSaatIni: kecamatan.nama })
    }
  }

  handleKelurahan = (kelurahan, tag) => {
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kelurahanAgunan: kelurahan.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kelurahanKTP: kelurahan.nama })
    } else { // saat ini
      this.setState({ kelurahanSaatIni: kelurahan.nama })
    }
  }

  
  render() {
    const { step } = this.state;
    const { jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal,
      alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni,
      kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP, } = this.state;

    const values = {
      jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal, alamatKTP,
      provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni,
      kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP
    };

    switch (step) {
      case 1:
        return (
          <FormDataAgunan2
            values={values}
            handleChange={this.handleChange}
            handleProvinsi={this.handleProvinsi}
            handleKabupatenKota={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <FormDataPemohon2
            handleProvinsi={this.handleProvinsi}
            handleKabupatenKota={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
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

export default UserForm2;