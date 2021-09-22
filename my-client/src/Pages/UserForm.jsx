import React, { Component } from 'react';
import FormDataAgunan from '../Components/FormDataAgunan';
import Success from './Success';
import FormDataPemohon from '../Components/FormDataPemohon'
import FormDataKerabat from '../Components/FormDataKerabat';
import FormFasilitasPembayaran from '../Components/FormFasilitasPembayaran';
import DataPembiayaanDimiliki from '../Components/DataPembiayaanDimiliki';
import DataSuamiIstri from '../Components/DataSuamiIstri';
import DataPekerjaanSuamiIstri from '../Components/DataPekerjaanSuamiIstri';
import FormUpload from '../Components/FormUpload';
import FormDataPekerjaanPemohon from '../Components/FormDataPekerjaanPemohon';

export class UserForm extends Component {
  state = {
    step: 0,
    token: '',

    //register
    isNasabah: '',
    noRekening: '',

    //halamanFasilitasPembayaran
    statusProgram: '', objekDibiayai: '', skemaPengajuan: '', pilihProgram: '', akadDiajukan: '',
    plafondDiajukan: '', jangkaWaktuPembiayaan: '', tujuanPembiayaan: '', specialMmq: '', jenisPenjualan: '',
    namaPenjual: '', uangMuka: '', namaProyek: '', kondisiBangunanifPembiayaanProperti: '', kondisiBangunan: '',
    peruntukanBankSebelumnyaifTakeOver: '', akadFasilitas: '', perkiraanLunasifTakeOver: '', topUpifTakeOver: '',
    program: '', luasBangunan: '', statusKepemilikan: '', peruntukanPembiayaan: '', nomorPenjual: '',
    bankAsalifTakeOver: '', namaBankifTakeOver: '', lainBank: '', program: '', alamatPropertiifPembiayaanProperti: '',
    pilihProvinsiifPembiayaanProperti: '', pilihKotaifPembiyaanProperti: '', pilihKecamatanifPembiayaanProperti: '',
    pilihKelurahanifPembiayaanProperti: '', pilihanRT: '', pilihanRW: '', pilihKodeposifPembiayaanProperti: '',
    pembiayaanBankLain: '', ifYaJumlahPembiayaan: '', ifYaJumlahAngsuran: '', jenisPembiayaan: '',
    namaKreditur: '', jatuhTempo: '', statusLainnyaFasilitas :'', lainnyaBank:'', lainAkad:'',

    //halaman2
    jenisAgunan: '', luasTanah: '', luasBangunan: '', statusKepemilikan: '', kondisiBangunan: '',
    statusAgunan: '', atasNamaSertifikat: '', nomorSertifikat: '', berlakuHingga: '', nomorSPRDeveloper: '',
    alamatPropertiAgunan: '', provinsiAgunan: '', kotaKabupatenAgunan: '', kecamatanAgunan: '', kelurahanAgunan: '',
    rtAgunan: '', rwAgunan: '', kodePosAgunan: '',

    //page3
    namaLengkapAsli:'', namaLengkap: '', jenisKelamin:'', jumlahAnak:'', tempatLahir: '', tanggalLahir: '', noKTP: '', noNPWP: '', namaGadisIbuKandung: '',
    statusPerkawinan: '', pendidikanTerakhir: '', statusTempatTinggal: '', statusLainnya: '', alamatKTP: '', provinsiKTP: '',
    kotaKabupatenKTP: '', kelurahanKTP: '', kecamatanKTP: '', kodeposKTP: '', alamatSaatIni: '', provinsiSaatIni: '', kotaKabupatenSaatIni: '',
    kelurahanSaatIni: '', kecamatanSaatIni: '', kodeposSaatIni: '', alamatSuratMenyurat: '', noTeleponRumah: '', email: '', noHP: '',

    //form Kerabat
    namaKerabat: '', alamatKerabat: '', provinsiKerabat: '', kotaKabupatenKerabat: '', kecamatanKerabat: '', kelurahanKerabat: '',
    RtKerabat: '', RwKerabat: '', kodePosKerabat: '', telpRumah: '', noHpKerabat: '', hubunganDenganNasabah: '', kerabatLainnya: '',

    //Data Suami Istri
    namaSuamiIstri: '', tempatLahirSuamiIstri: '', tanggalLahirSuamiIstri: '', nomorKTPSuamiIstri: '', nomorNPWPSuamiIstri: '',
    pekerjaanSuamiIstri: '', nomorTelponSuamiIstri: '', isPekerjaanLainnya: false, isKategoriPekerjaan: false,

    //Data Pekerjaan Pemohon
    tahunLamaBekerjaPemohon: '', bulanLamaBekerjaPemohon: '', jumlahKaryawanPekerjaanPemohon: '', pekerjaanLainnyaPemohon: '', namaPerusahaanPemohon: '',
    jabatanPemohon: '', kategoriInstansiPekerjaanPemohon: '', lainKategoriPekerjaanPemohon: '', pendapatanPerbulanPemohon: '', jenisPekerjaanPemohon: '',
    alamatKantorPemohon: '', pembayaranGajiPemohon: '', kategoriInstansiPekerjaanPemohon: '',

    //Data Pekerjaan Suami IStri
    tahunLamaBekerjaSuamiIstri: '', bulanLamaBekerjaSuamiIstri: '', jumlahKaryawanSuamiIstri: '', jenisPekerjaanSuamiIstri: '', pekerjaanLainnyaSuamiIstri: '',
    namaPerusahaanSuamiIstri: '', jabatanSuamiIstri: '', kategoriInstansiSuamiIstri: '', kategoriInstansiLainnyaSuamiIstri: '', pendapatanBulananSuamiIstri: '',
    statusPekerjaanSuamiIstri: '', pembayaranGajiSuamiIstri: '', alamatKantorSuamiIstri: '', kodePosKantorSuamiIstri: '', teleponKantorSuamiIstri: '',
    teleponHrdSuamiIstri: '', bidangUsahaSuamiIstri: '', emailHrdSuamiIstri: '', emailAtasanSuamiIstri: '', teleponAtasanSuamiIstri: '',

    isLainnya: false,
    checkedA: false,
    isKerabat: false,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Ngelewatin Form Data Suami Istri dan Form Pekerjaan Suami Istri
  tripleNext = () => {
    const { step } = this.state;
    this.setState({
      step: step + 3
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Kalau statusnya belum menikah
  triplePrevious = () => {
    const { step } = this.state;
    this.setState({
      step: step - 3
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
      alamatSaatIni: this.state.alamatKTP,
    })
  }

  handleSwitch = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked })
    // this.setState({ checkedA: true});
    this.handleAlamatSama();
  }

  handleMmq = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "MMQ") {
      this.setState({ isMmq: true })
      this.setState({ isLainProgram: false })

    } else if (e.target.value === "Lainnyaa") {
      this.setState({ isLainProgram: true })
      this.setState({ isMmq: false })

    } else {
      this.setState({ isMmq: false })
      this.setState({ isLainProgram: false })
    }
  }

  handleAkad = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainAkad") {
      this.setState({ isAkad: true })
    } else {
      this.setState({ isAkad: false })
    }
  }

  handlePembiayaan = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "PropertiKendaraan") {
      this.setState({ isPropertiKendaraan: true })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })

    } else if (e.target.value === "Properti") {
      this.setState({ isProperti: true })
      this.setState({ isTakeOver: false })
      this.setState({ isPropertiKendaraan: false })

    } else if (e.target.value === "TakeOver") {
      this.setState({ isProperti: false })
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isTakeOver: true })

    } else {
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })


    }
  }

  handleFasilitas = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainFasilSebelum") {
      this.setState({ isFasilitas: true })
    } else {
      this.setState({ isFasilitas: false })
    }
  }

  handleAkadFasilitas = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainnyaAkad") {
      this.setState({ isBank: true })
    } else {
      this.setState({ isBank: false })
    }
  }

  handleKeuangan = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "jikaYa") {
      this.setState({ isYa: true })
    } else {
      this.setState({ isYa: false })
    }
  }

  handlePekerjaanLain = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "Lainnya") {
      this.setState({ isPekerjaanLainnya: true })
    } else {
      this.setState({ isPekerjaanLainnya: false })
    }
  }

  handleInstansiLainnyaSuamiIstri = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "Lainnya") {
      this.setState({ isKategoriPekerjaan: true })
    } else {
      this.setState({ isKategoriPekerjaan: false })
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (!token) {
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
    } else if (tag.toLowerCase().includes('saatIni')) { // saat ini
      this.setState({ provinsiSaatIni: provinsi.nama })
    } else if (tag.toLowerCase().includes('properti')) {
      this.setState({ pilihProvinsiifPembiayaanProperti: provinsi.nama })
    } else {
      this.setState({ provinsiKerabat: provinsi.nama })
    }
  }

  handleKotaKabupaten = (kota_kabupaten, tag) => {
    console.log(kota_kabupaten)
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kotaKabupatenAgunan: kota_kabupaten.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kotaKabupatenKTP: kota_kabupaten.nama })
    } else if (tag.toLowerCase().includes('saatIni')) { // saat ini
      this.setState({ kotaKabupatenSaatIni: kota_kabupaten.nama })
    } else if (tag.toLowerCase().includes('properti')) {
      this.setState({ pilihKotaifPembiyaanProperti: kota_kabupaten.nama })
    } else {
      this.setState({ kotaKabupatenKerabat: kota_kabupaten.nama })
    }
  }

  handleKecamatan = (kecamatan, tag) => {
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kecamatanAgunan: kecamatan.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kecamatanKTP: kecamatan.nama })
    } else if (tag.toLowerCase().includes('saatIni')) { // saat ini
      this.setState({ kecamatanSaatIni: kecamatan.nama })
    } else if (tag.toLowerCase().includes('properti')) {
      this.setState({ pilihKecamatanifPembiayaanProperti: kecamatan.nama })
    } else {
      this.setState({ kecamatanKerabat: kecamatan.nama })
    }
  }

  handleKelurahan = (kelurahan, tag) => {
    if (tag.toLowerCase().includes('agunan')) { // agunan
      this.setState({ kelurahanAgunan: kelurahan.nama })
    } else if (tag.toLowerCase().includes('ktp')) { // ktp
      this.setState({ kelurahanKTP: kelurahan.nama })
    } else if (tag.toLowerCase().includes('saatIni')) { // saat ini
      this.setState({ kelurahanSaatIni: kelurahan.nama })
    } else if (tag.toLowerCase().includes('properti')) {
      this.setState({ pilihKelurahanifPembiayaanProperti: kelurahan.nama })
    } else {
      this.setState({ kelurahanKerabat: kelurahan.nama })
    }
  }

  handlePekerjaanLain = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "lainnyaPekerjaan") {
      this.setState({ isPekerjaanLainnya: true })
    } else {
      this.setState({ isPekerjaanLainnya: false })
    }
  }

  handlekategoriInstansiPekerjaanSuami = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "lainnyaKategori") {
      this.setState({ isKategoriPekerjaan: true })
    } else {
      this.setState({ isKategoriPekerjaan: false })
    }
  }

  handlekategoriInstansiPekerjaan = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "lainnyaKategori") {
      this.setState({ isKategoriPekerjaan: true })
    } else {
      this.setState({ isKategoriPekerjaan: false })
    }
  }

  handleKerabat = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "hubunganLainnya") {
      this.setState({ isKerabat: true })
    } else {
      this.setState({ isKerabat: false })
    }
  }

  render() {
    const { step } = this.state;

    const { isNasabah, noRekening, jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, 
      nomorSertifikat, berlakuHingga, nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kotaKabupatenAgunan, kecamatanAgunan, 
      kelurahanAgunan, rtAgunan, rwAgunan, kodePosAgunan,namaLengkapAsli, namaLengkap, jumlahAnak, jenisKelamin, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, 
      statusPerkawinan, pendidikanTerakhir, statusTempatTinggal, statusLainnya, alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, 
      kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, 
      alamatSuratMenyurat, noTeleponRumah, email, noHP,

      //Form Kerabat
      namaKerabat, alamatKerabat, provinsiKerabat, kotaKabupatenKerabat, kecamatanKerabat, kelurahanKerabat, RtKerabat, 
      RwKerabat, kodePosKerabat, telpRumah, noHpKerabat, hubunganDenganNasabah, kerabatLainnya,

      //useState pada form Fasilitas Pembayaran dan data pembiayaan dimiliki
      isMmq, isLainProgram, isAkad, isProperti, isPropertiKendaraan, isTakeOver, isFasilitas, isBank, isYa, isKerabat,

      //Fasilitas Pembayaran
      statusProgram, specialMmq, skemaPengajuan, objekDibiayai, pilihProgram, plafondDiajukan, akadDiajukan, jangkaWaktuPembiayaan,
      tujuanPembiayaan, jenisPenjualan, namaPenjual, nomorPenjual, uangMuka, namaProyek, kondisiBangunanifPembiayaanProperti, 
      bankAsalifTakeOver, namaBankifTakeOver, peruntukanBankSebelumnyaifTakeOver, akadFasilitas, lainBank, perkiraanLunasifTakeOver, 
      topUpifTakeOver, pembiayaanBankLain, ifYaJumlahPembiayaan, ifYaJumlahAngsuran, jenisPembiayaan, namaKreditur,
      pilihProvinsiifPembiayaanProperti, pilihKotaifPembiyaanProperti, pilihKecamatanifPembiayaanProperti, 
      pilihKodeposifPembiayaanProperti, pilihKelurahanifPembiayaanProperti, pilihanRT, pilihanRW, peruntukanPembiayaan, statusLainnyaFasilitas,lainnyaBank, lainAkad,

      //suami istri
      namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri,
      nomorNPWPSuamiIstri, pekerjaanSuamiIstri, nomorTelponSuamiIstri,

      //Data Pekerjaan Pemohon
      alamatKantorPemohon, jenisPekerjaanPemohon,
      bidangUsahaPemohon, jumlahKaryawan, teleponKantorPemohon, teleponHRDPemohon, pendapatanPerBulan,
      pembayaranGajiPemohon, emailHRDPemohon, emailAtasanPemohon, teleponAtasanPemohon, tahunLamaBekerjaPemohon,
      bulanLamaBekerjaPemohon, jumlahKaryawanPekerjaanPemohon, pekerjaanLainnyaPemohon, namaPerusahaanPemohon,
      jabatanPemohon, kategoriInstansiPekerjaanPemohon, lainKategoriPekerjaanPemohon, pendapatanPerbulanPemohon,
      

      //pekerjaan suami istri
      isPekerjaanLainnya, isKategoriPekerjaan,
      tahunLamaBekerjaSuamiIstri, bulanLamaBekerjaSuamiIstri, jumlahKaryawanSuamiIstri, jenisPekerjaanSuamiIstri, 
      pekerjaanLainnyaSuamiIstri, namaPerusahaanSuamiIstri, jabatanSuamiIstri, kategoriInstansiSuamiIstri, 
      kategoriInstansiLainnyaSuamiIstri, pendapatanBulananSuamiIstri, statusPekerjaanSuamiIstri, pembayaranGajiSuamiIstri, 
      alamatKantorSuamiIstri, kodePosKantorSuamiIstri, teleponKantorSuamiIstri, teleponHrdSuamiIstri, 
      bidangUsahaSuamiIstri, emailHrdSuamiIstri, emailAtasanSuamiIstri, teleponAtasanSuamiIstri,

      isLainnya, checkedA } = this.state;

    const values = {
      isNasabah, noRekening,
      jenisAgunan, luasTanah, luasBangunan, statusKepemilikan, kondisiBangunan, statusAgunan, atasNamaSertifikat, 
      nomorSertifikat, berlakuHingga, nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kotaKabupatenAgunan, kecamatanAgunan, 
      kelurahanAgunan, rtAgunan, rwAgunan, kodePosAgunan, namaLengkapAsli, namaLengkap, jumlahAnak, jenisKelamin, tempatLahir, tanggalLahir, noKTP, noNPWP, namaGadisIbuKandung, 
      statusPerkawinan, pendidikanTerakhir, statusTempatTinggal, statusLainnya, alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, 
      kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, 
      alamatSuratMenyurat, noTeleponRumah, email, noHP,

      //Form Kerabat
      namaKerabat, alamatKerabat, provinsiKerabat, kotaKabupatenKerabat, kecamatanKerabat, kelurahanKerabat, RtKerabat, 
      RwKerabat, kodePosKerabat, telpRumah, noHpKerabat, hubunganDenganNasabah, kerabatLainnya,

      //Fasilitas Pembayaran
      statusProgram, specialMmq, skemaPengajuan, objekDibiayai, pilihProgram, plafondDiajukan, akadDiajukan, jangkaWaktuPembiayaan,
      tujuanPembiayaan, jenisPenjualan, namaPenjual, nomorPenjual, uangMuka, namaProyek, kondisiBangunanifPembiayaanProperti, 
      bankAsalifTakeOver, namaBankifTakeOver, peruntukanBankSebelumnyaifTakeOver, akadFasilitas, lainBank, perkiraanLunasifTakeOver, 
      topUpifTakeOver, pembiayaanBankLain, ifYaJumlahPembiayaan, ifYaJumlahAngsuran, jenisPembiayaan, namaKreditur,
      pilihProvinsiifPembiayaanProperti, pilihKotaifPembiyaanProperti, pilihKecamatanifPembiayaanProperti, 
      pilihKodeposifPembiayaanProperti, pilihKelurahanifPembiayaanProperti, pilihanRT, pilihanRW, peruntukanPembiayaan, statusLainnyaFasilitas, lainnyaBank, lainAkad,

      //suami istri
      namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri,
      nomorNPWPSuamiIstri, pekerjaanSuamiIstri, nomorTelponSuamiIstri,

      //pekerjaan suami istri
      isPekerjaanLainnya, isKategoriPekerjaan,
      tahunLamaBekerjaSuamiIstri, bulanLamaBekerjaSuamiIstri, jumlahKaryawanSuamiIstri, jenisPekerjaanSuamiIstri, 
      pekerjaanLainnyaSuamiIstri, namaPerusahaanSuamiIstri, jabatanSuamiIstri, kategoriInstansiSuamiIstri, 
      kategoriInstansiLainnyaSuamiIstri, pendapatanBulananSuamiIstri, statusPekerjaanSuamiIstri, pembayaranGajiSuamiIstri, 
      alamatKantorSuamiIstri, kodePosKantorSuamiIstri, teleponKantorSuamiIstri, teleponHrdSuamiIstri, 
      bidangUsahaSuamiIstri, emailHrdSuamiIstri, emailAtasanSuamiIstri, teleponAtasanSuamiIstri,

      //Data Pekerjaan Pemohon
      alamatKantorPemohon, jenisPekerjaanPemohon,
      bidangUsahaPemohon, jumlahKaryawan, teleponKantorPemohon, teleponHRDPemohon, pendapatanPerBulan,
      pembayaranGajiPemohon, emailHRDPemohon, emailAtasanPemohon, teleponAtasanPemohon, tahunLamaBekerjaPemohon,
      bulanLamaBekerjaPemohon, jumlahKaryawanPekerjaanPemohon, pekerjaanLainnyaPemohon, namaPerusahaanPemohon,
      jabatanPemohon, kategoriInstansiPekerjaanPemohon, lainKategoriPekerjaanPemohon, pendapatanPerbulanPemohon,

    };

    switch (step) {
      case 0:
        return (
          <FormUpload
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 1:
        return (
          <FormFasilitasPembayaran
            isLainnya={isLainnya}
            isMmq={isMmq}
            isAkad={isAkad}
            isLainProgram={isLainProgram}
            isPropertiKendaraan={isPropertiKendaraan}
            isProperti={isProperti}
            isTakeOver={isTakeOver}
            isFasilitas={isFasilitas}
            isBank={isBank}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleMmq={this.handleMmq}
            handleAkad={this.handleAkad}
            handlePembiayaan={this.handlePembiayaan}
            handleFasilitas={this.handleFasilitas}
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            handleAkadFasilitas={this.handleAkadFasilitas}
            values={values}
          />
        );
      case 2:
        return (
          <FormDataAgunan
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
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
          <FormDataPemohon
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            nextStep={this.nextStep}
            tripleNext={this.tripleNext}
            prevStep={this.prevStep}
            triplePrevious={this.triplePrevious}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleSwitch={this.handleSwitch}
            // handleAlamatSama={this.handleAlamatSama}
            values={values}
            isLainnya={isLainnya}
            checkedA={checkedA}
          />
        );
      case 4:
        return (
          <DataSuamiIstri
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <DataPekerjaanSuamiIstri
            isKategoriPekerjaan={isKategoriPekerjaan}
            isPekerjaanLainnya={isPekerjaanLainnya}
            handlePekerjaanLain={this.handlePekerjaanLain}
            handleInstansiLainnyaSuamiIstri={this.handleInstansiLainnyaSuamiIstri}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 6:
        return (
          <FormDataPekerjaanPemohon
          nextStep={this.nextStep}
          tripleNext={this.tripleNext}
          prevStep={this.prevStep}
          triplePrevious={this.triplePrevious}
            isKategoriPekerjaan={isKategoriPekerjaan}
            isPekerjaanLainnya={isPekerjaanLainnya}
            handlePekerjaanLain={this.handlePekerjaanLain}
            handlekategoriInstansiPekerjaan={this.handlekategoriInstansiPekerjaan}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return (
          <FormDataKerabat
            isKerabat={isKerabat}
            handleProvinsi={this.handleProvinsi}
            handleKotaKabupaten={this.handleKotaKabupaten}
            handleKecamatan={this.handleKecamatan}
            handleKelurahan={this.handleKelurahan}
            handleKerabat={this.handleKerabat}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <DataPembiayaanDimiliki
            isYa={isYa}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleKeuangan={this.handleKeuangan}
            values={values}
          />
        );
      case 9:
        return <Success />;
      default:
        (console.log('Terima Kasih'))
    }
  }
}

export default UserForm;
