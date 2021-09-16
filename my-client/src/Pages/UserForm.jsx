import React, { Component } from 'react';
import FormDataAgunan from '../Components/FormDataAgunan';
import Confirm from '../Components/Confirm';
import Success from '../Components/Success';
import FormDataPemohon from '../Components/FormDataPemohon'
import axios from 'axios';

export class UserForm extends Component {
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
    berlakuHingga: '',
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

    //daftarAlamat
    daftarProvinsi: [], daftarKabupatenKota: [],
    daftarKecamatan: [], daftarKelurahan: [],
    provinsiTerpilih: null, kabupatenKotaTerpilih: null,
    kecamatanTerpilih: null, kelurahanTerpilih: null,

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

  getDaftarProvinsi() {
    axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((response) => {this.setState({ daftarProvinsi: response.data.provinsi })})
      .catch((err) => console.log(err))
  }

  getDaftarKabupatenKota(provinsiId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
      .then((response) => {this.setState({ daftarKabupatenKota: response.data.kota_kabupaten })})
      .catch((err) => console.log(err))
  }

  getDaftarKecamatan(kota_kabupatenId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
      .then((response) => {this.setState({ daftarKecamatan: response.data.kecamatan })})
      .catch((err) => console.log(err))
  }

  getDaftarKelurahan(kecamatanId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
      .then((response) => {this.setState({ daftarKelurahan: response.data.kelurahan })})
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getDaftarProvinsi()
  }

  onProvinsiMenuItemClick = provinsi => e => {
    if (this.state.daftarKabupatenKota.length === 0) {
      this.getDaftarKabupatenKota(provinsi.id)
    }
    this.setState({ provinsiTerpilih: e.target.value })
  }

  onKabupatenKotaMenuItemClick = kota_kabupaten => e => {
    if (this.state.daftarKecamatan.length === 0) {
      this.getDaftarKecamatan(kota_kabupaten.id)
    }
    this.setState({ kabupatenKotaTerpilih: e.target.value })
  }

  onKecamatanMenuItemClick = kecamatan => e => {
    if (this.state.daftarKelurahan.length === 0) {
      this.getDaftarKelurahan(kecamatan.id)
    }
    this.setState({ kecamatanTerpilih: e.target.value })
  }

  onKelurahanMenuItemClick = kelurahan => e => {
    this.setState({ kelurahanTerpilih: kelurahan })
  }

  render() {
    const { step } = this.state;
    const { jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat, berlakuHingga,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal,
      statusLainnya, alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni,
      kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP,

      daftarProvinsi, daftarKabupatenKota, daftarKecamatan, daftarKelurahan, isLainnya } = this.state;

    const values = {
      jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, nomorSertifikat, berlakuHingga,
      nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan,
      namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, statusPerkawinan, pendidikanTerakhir, statusTempatTinggal, statusLainnya,
      alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni,
      kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP
    };

    switch (step) {
      case 1:
        return (
          <FormDataAgunan

            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormDataPemohon
            isLainnya={isLainnya}
            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleAlamatSama={this.handleAlamatSama}
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

export default UserForm;
