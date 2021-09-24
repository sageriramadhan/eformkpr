const Form = require("../models/form");
const { success, fail, validation } = require("../middlewares/validasi");
const multer = require("multer");
const path = require("path");


exports.getAllProduct = async (req, res) => {
  try {
    const products = await Form.findAll();
    res.status(200).json(success("OK", { data: products }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Form.findByPk(req.params.userId);
    res.status(200).json(success("OK", { data: product }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.addProduct = async (req, res, next) => {
  console.log(req.body, "INI BODY")

    req.body.userId = req.params.userId
    const id=req.body.id
    const status=req.body.status
    const userId=req.body.userId
    const ktpUpload=req.body.ktpUpload
    const kkUpload=req.body.kkUpload
    const npwpUpload=req.body.npwpUpload
    const slipGajiUpload=req.body.slipGajiUpload
    const skemaPengajuan=req.body.skemaPengajuan
    const objekDibiayai=req.body.objekDibiayai
    const peruntukanPembiayaan=req.body.peruntukanPembiayaan
    const pilihProgram=req.body.pilihProgram
    const specialMmq=req.body.specialMmq
    const akadDiajukan=req.body.akadDiajukan
    const plafondDiajukan=req.body.plafondDiajukan
    const jangkaWaktuPembiayaan=req.body.jangkaWaktuPembiayaan
    const statusProgram=req.body.statusProgram
    const lainAkad=req.body.lainAkad
    const jenisPenjualan=req.body.jenisPenjualan
    const lainBank=req.body.lainBank
    const lainnyaBank=req.body.lainnyaBank
    const namaPenjual=req.body.namaPenjual
    const nomorSPRDeveloper=req.body.nomorSPRDeveloper
    const nomorPenjual=req.body.nomorPenjual
    const uangMuka=req.body.uangMuka
    const namaProyek=req.body.namaProyek
    const kondisiBangunanifPembiayaanProperti=req.body.kondisiBangunanifPembiayaanProperti
    const alamatPropertiifPembiayaanProperti=req.body.alamatPropertiifPembiayaanProperti
    const pilihProvinsiifPembiayaanProperti=req.body.pilihProvinsiifPembiayaanProperti
    const pilihKotaifPembiyaanProperti=req.body.pilihKotaifPembiyaanProperti
    const pilihKecamatanifPembiayaanProperti=req.body.pilihKecamatanifPembiayaanProperti
    const pilihKelurahanifPembiayaanProperti=req.body.pilihKelurahanifPembiayaanProperti
    const pilihanRT=req.body.pilihanRT
    const pilihanRW=req.body.pilihanRW
    const pilihKodeposifPembiayaanProperti=req.body.pilihKodeposifPembiayaanProperti
    const bankAsalifTakeOver=req.body.bankAsalifTakeOver
    const namaBankifTakeOver=req.body.namaBankifTakeOver
    const peruntukanBankSebelumnyaifTakeOver=req.body.peruntukanBankSebelumnyaifTakeOver
    const akadFasilitas=req.body.akadFasilitas
    const perkiraanLunasifTakeOver=req.body.perkiraanLunasifTakeOver
    const topUpifTakeOver=req.body.topUpifTakeOver
    const statusLainnyaFasilitas=req.body.statusLainnyaFasilitas
    const jenisAgunan=req.body.jenisAgunan
    const luasTanah=req.body.luasTanah
    const luasBangunan=req.body.luasBangunan
    const statusKepemilikan=req.body.statusKepemilikan
    const kondisiBangunan=req.body.kondisiBangunan
    const statusAgunan=req.body.statusAgunan
    const atasNamaSertifikat=req.body.atasNamaSertifikat
    const nomorSertifikat=req.body.nomorSertifikat
    const berlakuHingga=req.body.berlakuHingga
    const nomorSPRDeveloperAgunan=req.body.nomorSPRDeveloperAgunan
    const alamatPropertiAgunan=req.body.alamatPropertiAgunan
    const provinsiAgunan=req.body.provinsiAgunan
    const kotaKabupatenAgunan=req.body.kotaKabupatenAgunan
    const kecamatanAgunan=req.body.kecamatanAgunan
    const kelurahanAgunan=req.body.kelurahanAgunan
    const kodePosAgunan=req.body.kodePosAgunan
    const rtAgunan=req.body.rtAgunan
    const rwAgunan=req.body.rwAgunan
    const namaLengkap=req.body.namaLengkap
    const tempatLahir=req.body.tempatLahir
    const tanggalLahir=req.body.tanggalLahir
    const noKTP=req.body.noKTP
    const noNPWP=req.body.noNPWP
    const namaGadisIbuKandung=req.body.namaGadisIbuKandung
    const statusPerkawinan=req.body.statusPerkawinan
    const pendidikanTerakhir=req.body.pendidikanTerakhir
    const statusTempatTinggal=req.body.statusTempatTinggal
    const alamatKTP=req.body.alamatKTP
    const provinsiKTP=req.body.provinsiKTP
    const kotaKabupatenKTP=req.body.kotaKabupatenKTP
    const kelurahanKTP=req.body.kelurahanKTP
    const kecamatanKTP=req.body.kecamatanKTP
    const alamatSaatIni=req.body.alamatSaatIni
    const provinsiSaatIni=req.body.provinsiSaatIni
    const kotaKabupatenSaatIni=req.body.kotaKabupatenSaatIni
    const kelurahanSaatIni=req.body.kelurahanSaatIni
    const kecamatanSaatIni=req.body.kecamatanSaatIni
    const alamatSuratMenyurat=req.body.alamatSuratMenyurat
    const noTeleponRumah=req.body.noTeleponRumah
    const email=req.body.email
    const noHP=req.body.noHP
    const statusLainnya=req.body.statusLainnya
    const jenisKelamin=req.body.jenisKelamin
    const jumlahAnak=req.body.jumlahAnak
    const namaSuamiIstri=req.body.namaSuamiIstri
    const tempatLahirSuamiIstri=req.body.tempatLahirSuamiIstri
    const tanggalLahirSuamiIstri=req.body.tanggalLahirSuamiIstri
    const nomorKTPSuamiIstri=req.body.nomorKTPSuamiIstri
    const nomorNPWPSuamiIstri=req.body.nomorNPWPSuamiIstri
    const pekerjaanSuamiIstri=req.body.pekerjaanSuamiIstri
    const nomorTelponSuamiIstri=req.body.nomorTelponSuamiIstri
    const tahunLamaBekerjaPemohon=req.body.tahunLamaBekerjaPemohon
    const bulanLamaBekerjaPemohon=req.body.bulanLamaBekerjaPemohon
    const jumlahKaryawanPekerjaanPemohon=req.body.jumlahKaryawanPekerjaanPemohon
    const jenisPekerjaanPemohon=req.body.jenisPekerjaanPemohon
    const pekerjaanLainnyaPemohon=req.body.pekerjaanLainnyaPemohon
    const namaPerusahaanPemohon=req.body.namaPerusahaanPemohon
    const jabatanPemohon=req.body.jabatanPemohon
    const kategoriInstansiPekerjaanPemohon=req.body.kategoriInstansiPekerjaanPemohon
    const lainKategoriPekerjaanPemohon=req.body.lainKategoriPekerjaanPemohon
    const pendapatanPerbulanPemohon=req.body.pendapatanPerbulanPemohon
    const pembayaranGajiPemohon=req.body.pembayaranGajiPemohon
    const alamatKantorPemohon=req.body.alamatKantorPemohon
    const teleponKantorPemohon=req.body.teleponKantorPemohon
    const emailHRDPemohon=req.body.emailHRDPemohon
    const emailAtasanPemohon=req.body.emailAtasanPemohon
    const teleponAtasanPemohon=req.body.teleponAtasanPemohon
    const teleponHRDPemohon=req.body.teleponHRDPemohon
    const bidangUsahaPemohon=req.body.bidangUsahaPemohon
    const tahunLamaBekerjaSuamiIstri=req.body.tahunLamaBekerjaSuamiIstri
    const jenisPekerjaanSuamiIstri=req.body.jenisPekerjaanSuamiIstri
    const statusPekerjaanSuamiIstri=req.body.statusPekerjaanSuamiIstri
    const namaPerusahaanSuamiIstri=req.body.namaPerusahaanSuamiIstri
    const kategoriInstansiSuamiIstri=req.body.kategoriInstansiSuamiIstri
    const bidangUsahaSuamiIstri=req.body.bidangUsahaSuamiIstri
    const jumlahKaryawanSuamiIstri=req.body.jumlahKaryawanSuamiIstri
    const teleponKantorSuamiIstri=req.body.teleponKantorSuamiIstri
    const teleponHrdSuamiIstri=req.body.teleponHrdSuamiIstri
    const jabatanSuamiIstri=req.body.jabatanSuamiIstri
    const pendapatanBulananSuamiIstri=req.body.pendapatanBulananSuamiIstri
    const pembayaranGajiSuamiIstri=req.body.pembayaranGajiSuamiIstri
    const emailHrdSuamiIstri=req.body.emailHrdSuamiIstri
    const emailAtasanSuamiIstri=req.body.emailAtasanSuamiIstri
    const teleponAtasanSuamiIstri=req.body.teleponAtasanSuamiIstri
    const bulanLamaBekerjaSuamiIstri=req.body.bulanLamaBekerjaSuamiIstri
    const pekerjaanLainnyaSuamiIstri=req.body.pekerjaanLainnyaSuamiIstri
    const kategoriInstansiLainnyaSuamiIstri=req.body.kategoriInstansiLainnyaSuamiIstri
    const alamatKantorSuamiIstri=req.body.alamatKantorSuamiIstri
    const pembiayaanBankLain=req.body.pembiayaanBankLain
    const ifYaJumlahPembiayaan=req.body.ifYaJumlahPembiayaan
    const ifYaJumlahAngsuran=req.body.ifYaJumlahAngsuran
    const jenisPembiayaan=req.body.jenisPembiayaan
    const namaKreditur=req.body.namaKreditur
    const jatuhTempo=req.body.jatuhTempo
    const namaKerabat=req.body.namaKerabat
    const alamatKerabat=req.body.alamatKerabat
    const provinsiKerabat=req.body.provinsiKerabat
    const kotaKabupatenKerabat=req.body.kotaKabupatenKerabat
    const kecamatanKerabat=req.body.kecamatanKerabat
    const kelurahanKerabat=req.body.kelurahanKerabat
    const rtKerabat=req.body.rtKerabat
    const rwKerabat=req.body.rwKerabat
    const kodePosKerabat=req.body.kodePosKerabat
    const telpRumah=req.body.telpRumah
    const noHpKerabat=req.body.noHpKerabat
    const hubunganDenganNasabah=req.body.hubunganDenganNasabah
    const kerabatLainnya=req.body.kerabatLainnya
    
    // let params = {
    //   id:id,
    //   status:status,
    //   userId:userId,
    //   ktpUpload:ktpUpload,
    //   kkUpload:kkUpload,
    //   npwpUpload:npwpUpload,
    //   slipGajiUpload:slipGajiUpload,
    //   skemaPengajuan:skemaPengajuan,
    //   objekDibiayai:objekDibiayai,
    //   peruntukanPembiayaan:peruntukanPembiayaan,
    //   pilihProgram:pilihProgram,
    //   specialMmq:specialMmq,
    //   akadDiajukan:akadDiajukan,
    //   plafondDiajukan:plafondDiajukan,
    //   jangkaWaktuPembiayaan:jangkaWaktuPembiayaan,
    //   statusProgram:statusProgram,
    //   lainAkad:lainAkad,
    //   jenisPenjualan:jenisPenjualan,
    //   lainBank:lainBank,
    //   lainnyaBank:lainnyaBank,
    //   namaPenjual:namaPenjual,
    //   nomorSPRDeveloper:nomorSPRDeveloper,
    //   nomorPenjual:nomorPenjual,
    //   uangMuka:uangMuka,
    //   namaProyek:namaProyek,
    //   kondisiBangunanifPembiayaanProperti:kondisiBangunanifPembiayaanProperti,
    //   alamatPropertiifPembiayaanProperti:alamatPropertiifPembiayaanProperti,
    //   pilihProvinsiifPembiayaanProperti:pilihProvinsiifPembiayaanProperti,
    //   pilihKotaifPembiyaanProperti:pilihKotaifPembiyaanProperti,
    //   pilihKecamatanifPembiayaanProperti:pilihKecamatanifPembiayaanProperti,
    //   pilihKelurahanifPembiayaanProperti:pilihKelurahanifPembiayaanProperti,
    //   pilihanRT:pilihanRT,
    //   pilihanRW:pilihanRW,
    //   pilihKodeposifPembiayaanProperti:pilihKodeposifPembiayaanProperti,
    //   bankAsalifTakeOver:bankAsalifTakeOver,
    //   namaBankifTakeOver:namaBankifTakeOver,
    //   peruntukanBankSebelumnyaifTakeOver:peruntukanBankSebelumnyaifTakeOver,
    //   akadFasilitas:akadFasilitas,
    //   perkiraanLunasifTakeOver:perkiraanLunasifTakeOver,
    //   topUpifTakeOver:topUpifTakeOver,
    //   statusLainnyaFasilitas:statusLainnyaFasilitas,
    //   jenisAgunan:jenisAgunan,
    //   luasTanah:luasTanah,
    //   luasBangunan:luasBangunan,
    //   statusKepemilikan:statusKepemilikan,
    //   kondisiBangunan:kondisiBangunan,
    //   statusAgunan:statusAgunan,
    //   atasNamaSertifikat:atasNamaSertifikat,
    //   nomorSertifikat:nomorSertifikat,
    //   berlakuHingga:berlakuHingga,
    //   nomorSPRDeveloperAgunan:nomorSPRDeveloperAgunan,
    //   alamatPropertiAgunan:alamatPropertiAgunan,
    //   provinsiAgunan:provinsiAgunan,
    //   kotaKabupatenAgunan:kotaKabupatenAgunan,
    //   kecamatanAgunan:kecamatanAgunan,
    //   kelurahanAgunan:kelurahanAgunan,
    //   kodePosAgunan:kodePosAgunan,
    //   rtAgunan:rtAgunan,
    //   rwAgunan:rwAgunan,
    //   namaLengkap:namaLengkap,
    //   tempatLahir:tempatLahir,
    //   tanggalLahir:tanggalLahir,
    //   noKTP:noKTP,
    //   noNPWP:noNPWP,
    //   namaGadisIbuKandung:namaGadisIbuKandung,
    //   statusPerkawinan:statusPerkawinan,
    //   pendidikanTerakhir:pendidikanTerakhir,
    //   statusTempatTinggal:statusTempatTinggal,
    //   alamatKTP:alamatKTP,
    //   provinsiKTP:provinsiKTP,
    //   kotaKabupatenKTP:kotaKabupatenKTP,
    //   kelurahanKTP:kelurahanKTP,
    //   kecamatanKTP:kecamatanKTP,
    //   alamatSaatIni:alamatSaatIni,
    //   provinsiSaatIni:provinsiSaatIni,
    //   kotaKabupatenSaatIni:kotaKabupatenSaatIni,
    //   kelurahanSaatIni:kelurahanSaatIni,
    //   kecamatanSaatIni:kecamatanSaatIni,
    //   alamatSuratMenyurat:alamatSuratMenyurat,
    //   noTeleponRumah:noTeleponRumah,
    //   email:email,
    //   noHP:noHP,
    //   statusLainnya:statusLainnya,
    //   jenisKelamin:jenisKelamin,
    //   jumlahAnak:jumlahAnak,
    //   namaSuamiIstri:namaSuamiIstri,
    //   tempatLahirSuamiIstri:tempatLahirSuamiIstri,
    //   tanggalLahirSuamiIstri:tanggalLahirSuamiIstri,
    //   nomorKTPSuamiIstri:nomorKTPSuamiIstri,
    //   nomorNPWPSuamiIstri:nomorNPWPSuamiIstri,
    //   pekerjaanSuamiIstri:pekerjaanSuamiIstri,
    //   nomorTelponSuamiIstri:nomorTelponSuamiIstri,
    //   tahunLamaBekerjaPemohon:tahunLamaBekerjaPemohon,
    //   bulanLamaBekerjaPemohon:bulanLamaBekerjaPemohon,
    //   jumlahKaryawanPekerjaanPemohon:jumlahKaryawanPekerjaanPemohon,
    //   jenisPekerjaanPemohon:jenisPekerjaanPemohon,
    //   pekerjaanLainnyaPemohon:pekerjaanLainnyaPemohon,
    //   namaPerusahaanPemohon:namaPerusahaanPemohon,
    //   jabatanPemohon:jabatanPemohon,
    //   kategoriInstansiPekerjaanPemohon:kategoriInstansiPekerjaanPemohon,
    //   lainKategoriPekerjaanPemohon:lainKategoriPekerjaanPemohon,
    //   pendapatanPerbulanPemohon:pendapatanPerbulanPemohon,
    //   pembayaranGajiPemohon:pembayaranGajiPemohon,
    //   alamatKantorPemohon:alamatKantorPemohon,
    //   teleponKantorPemohon:teleponKantorPemohon,
    //   emailHRDPemohon:emailHRDPemohon,
    //   emailAtasanPemohon:emailAtasanPemohon,
    //   teleponAtasanPemohon:teleponAtasanPemohon,
    //   teleponHRDPemohon:teleponHRDPemohon,
    //   bidangUsahaPemohon:bidangUsahaPemohon,
    //   tahunLamaBekerjaSuamiIstri:tahunLamaBekerjaSuamiIstri,
    //   jenisPekerjaanSuamiIstri:jenisPekerjaanSuamiIstri,
    //   statusPekerjaanSuamiIstri:statusPekerjaanSuamiIstri,
    //   namaPerusahaanSuamiIstri:namaPerusahaanSuamiIstri,
    //   kategoriInstansiSuamiIstri:kategoriInstansiSuamiIstri,
    //   bidangUsahaSuamiIstri:bidangUsahaSuamiIstri,
    //   jumlahKaryawanSuamiIstri:jumlahKaryawanSuamiIstri,
    //   teleponKantorSuamiIstri:teleponKantorSuamiIstri,
    //   teleponHrdSuamiIstri:teleponHrdSuamiIstri,
    //   jabatanSuamiIstri:jabatanSuamiIstri,
    //   pendapatanBulananSuamiIstri:pendapatanBulananSuamiIstri,
    //   pembayaranGajiSuamiIstri:pembayaranGajiSuamiIstri,
    //   emailHrdSuamiIstri:emailHrdSuamiIstri,
    //   emailAtasanSuamiIstri:emailAtasanSuamiIstri,
    //   teleponAtasanSuamiIstri:teleponAtasanSuamiIstri,
    //   bulanLamaBekerjaSuamiIstri:bulanLamaBekerjaSuamiIstri,
    //   pekerjaanLainnyaSuamiIstri:pekerjaanLainnyaSuamiIstri,
    //   kategoriInstansiLainnyaSuamiIstri:kategoriInstansiLainnyaSuamiIstri,
    //   alamatKantorSuamiIstri:alamatKantorSuamiIstri,
    //   pembiayaanBankLain:pembiayaanBankLain,
    //   ifYaJumlahPembiayaan:ifYaJumlahPembiayaan,
    //   ifYaJumlahAngsuran:ifYaJumlahAngsuran,
    //   jenisPembiayaan:jenisPembiayaan,
    //   namaKreditur:namaKreditur,
    //   jatuhTempo:jatuhTempo,
    //   namaKerabat:namaKerabat,
    //   alamatKerabat:alamatKerabat,
    //   provinsiKerabat:provinsiKerabat,
    //   kotaKabupatenKerabat:kotaKabupatenKerabat,
    //   kecamatanKerabat:kecamatanKerabat,
    //   kelurahanKerabat:kelurahanKerabat,
    //   rtKerabat:rtKerabat,
    //   rwKerabat:rwKerabat,
    //   kodePosKerabat:kodePosKerabat,
    //   telpRumah:telpRumah,
    //   noHpKerabat:noHpKerabat,
    //   hubunganDenganNasabah:hubunganDenganNasabah,
    //   kerabatLainnya:kerabatLainnya
      
    // }
    // if (!title || !image || !brand || !categoryId || !subcategoryId ||  !description || !numReviews || !rating || !price || !inStock) {
    //   return res.status(501).json(validation("Please input all field"));
    // }
    


    Form.create(req.body).then((product)=>{
      res.status(200).json(success("OK", { data: product }, res.statusCode));
    }).catch((error)=>{
      console.log(error);
      res.status(500).json(fail(error, res.statusCode));
    });

};

exports.editProduct = async (req, res, next) => {
  try {
    const id=req.body.id
    const status=req.body.status
    const userId=req.params.userId
    const ktpUpload=req.body.ktpUpload
    const kkUpload=req.body.kkUpload
    const npwpUpload=req.body.npwpUpload
    const slipGajiUpload=req.body.slipGajiUpload
    const skemaPengajuan=req.body.skemaPengajuan
    const objekDibiayai=req.body.objekDibiayai
    const peruntukanPembiayaan=req.body.peruntukanPembiayaan
    const pilihProgram=req.body.pilihProgram
    const specialMmq=req.body.specialMmq
    const akadDiajukan=req.body.akadDiajukan
    const plafondDiajukan=req.body.plafondDiajukan
    const jangkaWaktuPembiayaan=req.body.jangkaWaktuPembiayaan
    const statusProgram=req.body.statusProgram
    const lainAkad=req.body.lainAkad
    const jenisPenjualan=req.body.jenisPenjualan
    const lainBank=req.body.lainBank
    const lainnyaBank=req.body.lainnyaBank
    const namaPenjual=req.body.namaPenjual
    const nomorSPRDeveloper=req.body.nomorSPRDeveloper
    const nomorPenjual=req.body.nomorPenjual
    const uangMuka=req.body.uangMuka
    const namaProyek=req.body.namaProyek
    const kondisiBangunanifPembiayaanProperti=req.body.kondisiBangunanifPembiayaanProperti
    const alamatPropertiifPembiayaanProperti=req.body.alamatPropertiifPembiayaanProperti
    const pilihProvinsiifPembiayaanProperti=req.body.pilihProvinsiifPembiayaanProperti
    const pilihKotaifPembiyaanProperti=req.body.pilihKotaifPembiyaanProperti
    const pilihKecamatanifPembiayaanProperti=req.body.pilihKecamatanifPembiayaanProperti
    const pilihKelurahanifPembiayaanProperti=req.body.pilihKelurahanifPembiayaanProperti
    const pilihanRT=req.body.pilihanRT
    const pilihanRW=req.body.pilihanRW
    const pilihKodeposifPembiayaanProperti=req.body.pilihKodeposifPembiayaanProperti
    const bankAsalifTakeOver=req.body.bankAsalifTakeOver
    const namaBankifTakeOver=req.body.namaBankifTakeOver
    const peruntukanBankSebelumnyaifTakeOver=req.body.peruntukanBankSebelumnyaifTakeOver
    const akadFasilitas=req.body.akadFasilitas
    const perkiraanLunasifTakeOver=req.body.perkiraanLunasifTakeOver
    const topUpifTakeOver=req.body.topUpifTakeOver
    const statusLainnyaFasilitas=req.body.statusLainnyaFasilitas
    const jenisAgunan=req.body.jenisAgunan
    const luasTanah=req.body.luasTanah
    const luasBangunan=req.body.luasBangunan
    const statusKepemilikan=req.body.statusKepemilikan
    const kondisiBangunan=req.body.kondisiBangunan
    const statusAgunan=req.body.statusAgunan
    const atasNamaSertifikat=req.body.atasNamaSertifikat
    const nomorSertifikat=req.body.nomorSertifikat
    const berlakuHingga=req.body.berlakuHingga
    const nomorSPRDeveloperAgunan=req.body.nomorSPRDeveloperAgunan
    const alamatPropertiAgunan=req.body.alamatPropertiAgunan
    const provinsiAgunan=req.body.provinsiAgunan
    const kotaKabupatenAgunan=req.body.kotaKabupatenAgunan
    const kecamatanAgunan=req.body.kecamatanAgunan
    const kelurahanAgunan=req.body.kelurahanAgunan
    const kodePosAgunan=req.body.kodePosAgunan
    const rtAgunan=req.body.rtAgunan
    const rwAgunan=req.body.rwAgunan
    const namaLengkap=req.body.namaLengkap
    const tempatLahir=req.body.tempatLahir
    const tanggalLahir=req.body.tanggalLahir
    const noKTP=req.body.noKTP
    const noNPWP=req.body.noNPWP
    const namaGadisIbuKandung=req.body.namaGadisIbuKandung
    const statusPerkawinan=req.body.statusPerkawinan
    const pendidikanTerakhir=req.body.pendidikanTerakhir
    const statusTempatTinggal=req.body.statusTempatTinggal
    const alamatKTP=req.body.alamatKTP
    const provinsiKTP=req.body.provinsiKTP
    const kotaKabupatenKTP=req.body.kotaKabupatenKTP
    const kelurahanKTP=req.body.kelurahanKTP
    const kecamatanKTP=req.body.kecamatanKTP
    const alamatSaatIni=req.body.alamatSaatIni
    const provinsiSaatIni=req.body.provinsiSaatIni
    const kotaKabupatenSaatIni=req.body.kotaKabupatenSaatIni
    const kelurahanSaatIni=req.body.kelurahanSaatIni
    const kecamatanSaatIni=req.body.kecamatanSaatIni
    const alamatSuratMenyurat=req.body.alamatSuratMenyurat
    const noTeleponRumah=req.body.noTeleponRumah
    const email=req.body.email
    const noHP=req.body.noHP
    const statusLainnya=req.body.statusLainnya
    const jenisKelamin=req.body.jenisKelamin
    const jumlahAnak=req.body.jumlahAnak
    const namaSuamiIstri=req.body.namaSuamiIstri
    const tempatLahirSuamiIstri=req.body.tempatLahirSuamiIstri
    const tanggalLahirSuamiIstri=req.body.tanggalLahirSuamiIstri
    const nomorKTPSuamiIstri=req.body.nomorKTPSuamiIstri
    const nomorNPWPSuamiIstri=req.body.nomorNPWPSuamiIstri
    const pekerjaanSuamiIstri=req.body.pekerjaanSuamiIstri
    const nomorTelponSuamiIstri=req.body.nomorTelponSuamiIstri
    const tahunLamaBekerjaPemohon=req.body.tahunLamaBekerjaPemohon
    const bulanLamaBekerjaPemohon=req.body.bulanLamaBekerjaPemohon
    const jumlahKaryawanPekerjaanPemohon=req.body.jumlahKaryawanPekerjaanPemohon
    const jenisPekerjaanPemohon=req.body.jenisPekerjaanPemohon
    const pekerjaanLainnyaPemohon=req.body.pekerjaanLainnyaPemohon
    const namaPerusahaanPemohon=req.body.namaPerusahaanPemohon
    const jabatanPemohon=req.body.jabatanPemohon
    const kategoriInstansiPekerjaanPemohon=req.body.kategoriInstansiPekerjaanPemohon
    const lainKategoriPekerjaanPemohon=req.body.lainKategoriPekerjaanPemohon
    const pendapatanPerbulanPemohon=req.body.pendapatanPerbulanPemohon
    const pembayaranGajiPemohon=req.body.pembayaranGajiPemohon
    const alamatKantorPemohon=req.body.alamatKantorPemohon
    const teleponKantorPemohon=req.body.teleponKantorPemohon
    const emailHRDPemohon=req.body.emailHRDPemohon
    const emailAtasanPemohon=req.body.emailAtasanPemohon
    const teleponAtasanPemohon=req.body.teleponAtasanPemohon
    const teleponHRDPemohon=req.body.teleponHRDPemohon
    const bidangUsahaPemohon=req.body.bidangUsahaPemohon
    const tahunLamaBekerjaSuamiIstri=req.body.tahunLamaBekerjaSuamiIstri
    const jenisPekerjaanSuamiIstri=req.body.jenisPekerjaanSuamiIstri
    const statusPekerjaanSuamiIstri=req.body.statusPekerjaanSuamiIstri
    const namaPerusahaanSuamiIstri=req.body.namaPerusahaanSuamiIstri
    const kategoriInstansiSuamiIstri=req.body.kategoriInstansiSuamiIstri
    const bidangUsahaSuamiIstri=req.body.bidangUsahaSuamiIstri
    const jumlahKaryawanSuamiIstri=req.body.jumlahKaryawanSuamiIstri
    const teleponKantorSuamiIstri=req.body.teleponKantorSuamiIstri
    const teleponHrdSuamiIstri=req.body.teleponHrdSuamiIstri
    const jabatanSuamiIstri=req.body.jabatanSuamiIstri
    const pendapatanBulananSuamiIstri=req.body.pendapatanBulananSuamiIstri
    const pembayaranGajiSuamiIstri=req.body.pembayaranGajiSuamiIstri
    const emailHrdSuamiIstri=req.body.emailHrdSuamiIstri
    const emailAtasanSuamiIstri=req.body.emailAtasanSuamiIstri
    const teleponAtasanSuamiIstri=req.body.teleponAtasanSuamiIstri
    const bulanLamaBekerjaSuamiIstri=req.body.bulanLamaBekerjaSuamiIstri
    const pekerjaanLainnyaSuamiIstri=req.body.pekerjaanLainnyaSuamiIstri
    const kategoriInstansiLainnyaSuamiIstri=req.body.kategoriInstansiLainnyaSuamiIstri
    const alamatKantorSuamiIstri=req.body.alamatKantorSuamiIstri
    const pembiayaanBankLain=req.body.pembiayaanBankLain
    const ifYaJumlahPembiayaan=req.body.ifYaJumlahPembiayaan
    const ifYaJumlahAngsuran=req.body.ifYaJumlahAngsuran
    const jenisPembiayaan=req.body.jenisPembiayaan
    const namaKreditur=req.body.namaKreditur
    const jatuhTempo=req.body.jatuhTempo
    const namaKerabat=req.body.namaKerabat
    const alamatKerabat=req.body.alamatKerabat
    const provinsiKerabat=req.body.provinsiKerabat
    const kotaKabupatenKerabat=req.body.kotaKabupatenKerabat
    const kecamatanKerabat=req.body.kecamatanKerabat
    const kelurahanKerabat=req.body.kelurahanKerabat
    const rtKerabat=req.body.rtKerabat
    const rwKerabat=req.body.rwKerabat
    const kodePosKerabat=req.body.kodePosKerabat
    const telpRumah=req.body.telpRumah
    const noHpKerabat=req.body.noHpKerabat
    const hubunganDenganNasabah=req.body.hubunganDenganNasabah
    const kerabatLainnya=req.body.kerabatLainnya
    
    let params = {
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
      kerabatLainnya:kerabatLainnya
      
    }
// if (!title || !image || !brand || !categoryId || !subcategoryId ||  !description || !numReviews || !rating || !price || !inStock) {
//   return res.status(501).json(validation("Please input all field"));
// }


    const editProduct = await Form.update(params,
      {
        where: { userId: req.params.userId },
      }
    );
    res
      .status(200)

      .json(success("Edit Successfully", { data: "success" }, res.statusCode));
  } catch (error) {
    console.log(error);
    res.status(501).json(fail(error, res.statusCode));
    return;
  }
  next()
};


exports.deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Form.destroy({
      where: {
        userId: req.params.userId,
      },
    });
    res
      .status(200)
      .json(success("Remove Product", { data: "Success" }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(501).json(fail(error, res.statusCode));
    return;
  }
};

