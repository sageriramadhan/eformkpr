import React, { Component } from 'react';
import FormDataAgunan from '../Components/FormDataAgunan';
import Confirm from '../Components/Confirm';
import Success from './Success';
import FormDataPemohon from '../Components/FormDataPemohon'

export class UserForm extends Component {
  state = {
    step: 1,
    // token: '',

    //register
    isNasabah: '',
    noRekening: '',

    //halaman2
    jenisAgunan: '',
    luasTanah: '',
    luasBangunan: '',
    statusKepemilikan: '',
    kondisiBangunan: '',
    statusAgunan: '',
    atasNamaSertifikat: '',
    nomorSertifikat: '',
    berlakuHingga: '',
    nomorSPRDeveloper: '',
    alamatPropertiAgunan: '',
    provinsiAgunan: '',
    kotaKabupatenAgunan: '',
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
    statusLainnya: '',
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

    isLainnya: false
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

  handleLainnya = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "Lainnya") {
      this.setState({ isLainnya: true })
    } else {
      this.setState({ isLainnya: false })
    }
  }

  handleAlamatSama = () => {
    this.setState({
      provinsiSaatIni: this.state.provinsiKTP,
      kotaKabupatenSaatIni: this.state.kotaKabupatenKTP,
      kecamatanSaatIni: this.state.kecamatanKTP,
      kelurahanSaatIni: this.state.kelurahanKTP,
      alamatSaatIni: this.state.alamatKTP
    })
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if(!token) {
      this.props.history.push('/')
    } else {
      this.setState({ token: token }, () => {
        this.render()
      })
    }
    // this.getDaftarProvinsi()
  }

  handleProvinsi = (provinsi, tag) => {
    console.log(provinsi)
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ provinsiAgunan: provinsi.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ provinsiKTP: provinsi.nama })
    } else { // saat ini
      this.setState({ provinsiSaatIni: provinsi.nama })
    }
  }

  handleKotaKabupaten = (kota_kabupaten, tag) => {
    console.log(kota_kabupaten)
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kotaKabupatenAgunan: kota_kabupaten.nama })
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
    // const { isNasabah, noRekening } = this.state;
    const { isNasabah, noRekening, jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat, berlakuHingga,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kotaKabupatenAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal,
      statusLainnya, alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni,
      kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP,

      isLainnya } = this.state;

    const values = {
      isNasabah, noRekening,
      jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat, berlakuHingga,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kotaKabupatenAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal, statusLainnya,
      alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni,
      kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP
    };

    switch (step) {
      case 1:
        return (
          <FormDataAgunan
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormDataPemohon
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleAlamatSama={this.handleAlamatSama}
            values={values}
            isLainnya={isLainnya}
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

export default UserForm;
