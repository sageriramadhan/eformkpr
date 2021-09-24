import React, { Component } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
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
      values: { 
        id,
        status,
        userId,
        ktpUpload,
        kkUpload,
        npwpUpload,
        slipGajiUpload,
        skemaPengajuan,
        objekDibiayai,
        peruntukanPembiayaan,
        pilihProgram,
        specialMmq,
        akadDiajukan,
        plafondDiajukan,
        jangkaWaktuPembiayaan,
        statusProgram,
        lainAkad,
        jenisPenjualan,
        lainBank,
        lainnyaBank,
        namaPenjual,
        nomorSPRDeveloper,
        nomorPenjual,
        uangMuka,
        namaProyek,
        kondisiBangunanifPembiayaanProperti,
        alamatPropertiifPembiayaanProperti,
        pilihProvinsiifPembiayaanProperti,
        pilihKotaifPembiyaanProperti,
        pilihKecamatanifPembiayaanProperti,
        pilihKelurahanifPembiayaanProperti,
        pilihanRT,
        pilihanRW,
        pilihKodeposifPembiayaanProperti,
        bankAsalifTakeOver,
        namaBankifTakeOver,
        peruntukanBankSebelumnyaifTakeOver,
        akadFasilitas,
        perkiraanLunasifTakeOver,
        topUpifTakeOver,
        statusLainnyaFasilitas,
        jenisAgunan,
        luasTanah,
        luasBangunan,
        statusKepemilikan,
        kondisiBangunan,
        statusAgunan,
        atasNamaSertifikat,
        nomorSertifikat,
        berlakuHingga,
        nomorSPRDeveloperAgunan,
        alamatPropertiAgunan,
        provinsiAgunan,
        kotaKabupatenAgunan,
        kecamatanAgunan,
        kelurahanAgunan,
        kodePosAgunan,
        rtAgunan,
        rwAgunan,
        namaLengkap,
        tempatLahir,
        tanggalLahir,
        noKTP,
        noNPWP,
        namaGadisIbuKandung,
        statusPerkawinan,
        pendidikanTerakhir,
        statusTempatTinggal,
        alamatKTP,
        provinsiKTP,
        kotaKabupatenKTP,
        kelurahanKTP,
        kecamatanKTP,
        alamatSaatIni,
        provinsiSaatIni,
        kotaKabupatenSaatIni,
        kelurahanSaatIni,
        kecamatanSaatIni,
        alamatSuratMenyurat,
        noTeleponRumah,
        email,
        noHP,
        statusLainnya,
        jenisKelamin,
        jumlahAnak,
        namaSuamiIstri,
        tempatLahirSuamiIstri,
        tanggalLahirSuamiIstri,
        nomorKTPSuamiIstri,
        nomorNPWPSuamiIstri,
        pekerjaanSuamiIstri,
        nomorTelponSuamiIstri,
        tahunLamaBekerjaPemohon,
        bulanLamaBekerjaPemohon,
        jumlahKaryawanPekerjaanPemohon,
        jenisPekerjaanPemohon,
        pekerjaanLainnyaPemohon,
        namaPerusahaanPemohon,
        jabatanPemohon,
        kategoriInstansiPekerjaanPemohon,
        lainKategoriPekerjaanPemohon,
        pendapatanPerbulanPemohon,
        pembayaranGajiPemohon,
        alamatKantorPemohon,
        teleponKantorPemohon,
        emailHRDPemohon,
        emailAtasanPemohon,
        teleponAtasanPemohon,
        teleponHRDPemohon,
        bidangUsahaPemohon,
        tahunLamaBekerjaSuamiIstri,
        jenisPekerjaanSuamiIstri,
        statusPekerjaanSuamiIstri,
        namaPerusahaanSuamiIstri,
        kategoriInstansiSuamiIstri,
        bidangUsahaSuamiIstri,
        jumlahKaryawanSuamiIstri,
        teleponKantorSuamiIstri,
        teleponHrdSuamiIstri,
        jabatanSuamiIstri,
        pendapatanBulananSuamiIstri,
        pembayaranGajiSuamiIstri,
        emailHrdSuamiIstri,
        emailAtasanSuamiIstri,
        teleponAtasanSuamiIstri,
        bulanLamaBekerjaSuamiIstri,
        pekerjaanLainnyaSuamiIstri,
        kategoriInstansiLainnyaSuamiIstri,
        alamatKantorSuamiIstri,
        pembiayaanBankLain,
        ifYaJumlahPembiayaan,
        ifYaJumlahAngsuran,
        jenisPembiayaan,
        namaKreditur,
        jatuhTempo,
        namaKerabat,
        alamatKerabat,
        provinsiKerabat,
        kotaKabupatenKerabat,
        kecamatanKerabat,
        kelurahanKerabat,
        rtKerabat,
        rwKerabat,
        kodePosKerabat,
        telpRumah,
        noHpKerabat,
        hubunganDenganNasabah,
        kerabatLainnya,
        

      }
    } = this.props;
    let CekuserId = localStorage.getItem('userId')
    axios({
      url : `http://localhost:5000/api/form/add/`,
      method : 'post',
      headers : {
        'Content-Type': 'application/json'
      },
      data : {
        id:id,
status:status,
userId:userId,
ktpUpload:ktpUpload,
kkUpload:kkUpload,
npwpUpload:npwpUpload,
slipGajiUpload:slipGajiUpload,
skemaPengajuan:skemaPengajuan,
objekDibiayai:objekDibiayai,
peruntukanPembiayaan:peruntukanPembiayaan,
pilihProgram:pilihProgram,
specialMmq:specialMmq,
akadDiajukan:akadDiajukan,
plafondDiajukan:plafondDiajukan,
jangkaWaktuPembiayaan:jangkaWaktuPembiayaan,
statusProgram:statusProgram,
lainAkad:lainAkad,
jenisPenjualan:jenisPenjualan,
lainBank:lainBank,
lainnyaBank:lainnyaBank,
namaPenjual:namaPenjual,
nomorSPRDeveloper:nomorSPRDeveloper,
nomorPenjual:nomorPenjual,
uangMuka:uangMuka,
namaProyek:namaProyek,
kondisiBangunanifPembiayaanProperti:kondisiBangunanifPembiayaanProperti,
alamatPropertiifPembiayaanProperti:alamatPropertiifPembiayaanProperti,
pilihProvinsiifPembiayaanProperti:pilihProvinsiifPembiayaanProperti,
pilihKotaifPembiyaanProperti:pilihKotaifPembiyaanProperti,
pilihKecamatanifPembiayaanProperti:pilihKecamatanifPembiayaanProperti,
pilihKelurahanifPembiayaanProperti:pilihKelurahanifPembiayaanProperti,
pilihanRT:pilihanRT,
pilihanRW:pilihanRW,
pilihKodeposifPembiayaanProperti:pilihKodeposifPembiayaanProperti,
bankAsalifTakeOver:bankAsalifTakeOver,
namaBankifTakeOver:namaBankifTakeOver,
peruntukanBankSebelumnyaifTakeOver:peruntukanBankSebelumnyaifTakeOver,
akadFasilitas:akadFasilitas,
perkiraanLunasifTakeOver:perkiraanLunasifTakeOver,
topUpifTakeOver:topUpifTakeOver,
statusLainnyaFasilitas:statusLainnyaFasilitas,
jenisAgunan:jenisAgunan,
luasTanah:luasTanah,
luasBangunan:luasBangunan,
statusKepemilikan:statusKepemilikan,
kondisiBangunan:kondisiBangunan,
statusAgunan:statusAgunan,
atasNamaSertifikat:atasNamaSertifikat,
nomorSertifikat:nomorSertifikat,
berlakuHingga:berlakuHingga,
nomorSPRDeveloperAgunan:nomorSPRDeveloperAgunan,
alamatPropertiAgunan:alamatPropertiAgunan,
provinsiAgunan:provinsiAgunan,
kotaKabupatenAgunan:kotaKabupatenAgunan,
kecamatanAgunan:kecamatanAgunan,
kelurahanAgunan:kelurahanAgunan,
kodePosAgunan:kodePosAgunan,
rtAgunan:rtAgunan,
rwAgunan:rwAgunan,
namaLengkap:namaLengkap,
tempatLahir:tempatLahir,
tanggalLahir:tanggalLahir,
noKTP:noKTP,
noNPWP:noNPWP,
namaGadisIbuKandung:namaGadisIbuKandung,
statusPerkawinan:statusPerkawinan,
pendidikanTerakhir:pendidikanTerakhir,
statusTempatTinggal:statusTempatTinggal,
alamatKTP:alamatKTP,
provinsiKTP:provinsiKTP,
kotaKabupatenKTP:kotaKabupatenKTP,
kelurahanKTP:kelurahanKTP,
kecamatanKTP:kecamatanKTP,
alamatSaatIni:alamatSaatIni,
provinsiSaatIni:provinsiSaatIni,
kotaKabupatenSaatIni:kotaKabupatenSaatIni,
kelurahanSaatIni:kelurahanSaatIni,
kecamatanSaatIni:kecamatanSaatIni,
alamatSuratMenyurat:alamatSuratMenyurat,
noTeleponRumah:noTeleponRumah,
email:email,
noHP:noHP,
statusLainnya:statusLainnya,
jenisKelamin:jenisKelamin,
jumlahAnak:jumlahAnak,
namaSuamiIstri:namaSuamiIstri,
tempatLahirSuamiIstri:tempatLahirSuamiIstri,
tanggalLahirSuamiIstri:tanggalLahirSuamiIstri,
nomorKTPSuamiIstri:nomorKTPSuamiIstri,
nomorNPWPSuamiIstri:nomorNPWPSuamiIstri,
pekerjaanSuamiIstri:pekerjaanSuamiIstri,
nomorTelponSuamiIstri:nomorTelponSuamiIstri,
tahunLamaBekerjaPemohon:tahunLamaBekerjaPemohon,
bulanLamaBekerjaPemohon:bulanLamaBekerjaPemohon,
jumlahKaryawanPekerjaanPemohon:jumlahKaryawanPekerjaanPemohon,
jenisPekerjaanPemohon:jenisPekerjaanPemohon,
pekerjaanLainnyaPemohon:pekerjaanLainnyaPemohon,
namaPerusahaanPemohon:namaPerusahaanPemohon,
jabatanPemohon:jabatanPemohon,
kategoriInstansiPekerjaanPemohon:kategoriInstansiPekerjaanPemohon,
lainKategoriPekerjaanPemohon:lainKategoriPekerjaanPemohon,
pendapatanPerbulanPemohon:pendapatanPerbulanPemohon,
pembayaranGajiPemohon:pembayaranGajiPemohon,
alamatKantorPemohon:alamatKantorPemohon,
teleponKantorPemohon:teleponKantorPemohon,
emailHRDPemohon:emailHRDPemohon,
emailAtasanPemohon:emailAtasanPemohon,
teleponAtasanPemohon:teleponAtasanPemohon,
teleponHRDPemohon:teleponHRDPemohon,
bidangUsahaPemohon:bidangUsahaPemohon,
tahunLamaBekerjaSuamiIstri:tahunLamaBekerjaSuamiIstri,
jenisPekerjaanSuamiIstri:jenisPekerjaanSuamiIstri,
statusPekerjaanSuamiIstri:statusPekerjaanSuamiIstri,
namaPerusahaanSuamiIstri:namaPerusahaanSuamiIstri,
kategoriInstansiSuamiIstri:kategoriInstansiSuamiIstri,
bidangUsahaSuamiIstri:bidangUsahaSuamiIstri,
jumlahKaryawanSuamiIstri:jumlahKaryawanSuamiIstri,
teleponKantorSuamiIstri:teleponKantorSuamiIstri,
teleponHrdSuamiIstri:teleponHrdSuamiIstri,
jabatanSuamiIstri:jabatanSuamiIstri,
pendapatanBulananSuamiIstri:pendapatanBulananSuamiIstri,
pembayaranGajiSuamiIstri:pembayaranGajiSuamiIstri,
emailHrdSuamiIstri:emailHrdSuamiIstri,
emailAtasanSuamiIstri:emailAtasanSuamiIstri,
teleponAtasanSuamiIstri:teleponAtasanSuamiIstri,
bulanLamaBekerjaSuamiIstri:bulanLamaBekerjaSuamiIstri,
pekerjaanLainnyaSuamiIstri:pekerjaanLainnyaSuamiIstri,
kategoriInstansiLainnyaSuamiIstri:kategoriInstansiLainnyaSuamiIstri,
alamatKantorSuamiIstri:alamatKantorSuamiIstri,
pembiayaanBankLain:pembiayaanBankLain,
ifYaJumlahPembiayaan:ifYaJumlahPembiayaan,
ifYaJumlahAngsuran:ifYaJumlahAngsuran,
jenisPembiayaan:jenisPembiayaan,
namaKreditur:namaKreditur,
jatuhTempo:jatuhTempo,
namaKerabat:namaKerabat,
alamatKerabat:alamatKerabat,
provinsiKerabat:provinsiKerabat,
kotaKabupatenKerabat:kotaKabupatenKerabat,
kecamatanKerabat:kecamatanKerabat,
kelurahanKerabat:kelurahanKerabat,
rtKerabat:rtKerabat,
rwKerabat:rwKerabat,
kodePosKerabat:kodePosKerabat,
telpRumah:telpRumah,
noHpKerabat:noHpKerabat,
hubunganDenganNasabah:hubunganDenganNasabah,
kerabatLainnya:kerabatLainnya,

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
            {/* <List>
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
            </List> */}
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
