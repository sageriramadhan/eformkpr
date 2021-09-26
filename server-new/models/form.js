const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user")

const Form = sequelize.define("form", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
  userId: {
    type: Sequelize.INTEGER,
    allowNull : true,
    references: {
        model: User,
        key: "id",
    }
  },
//   ktpUpload:{
//     type: Sequelize.BLOB,
//     allowNull: true
//   },
//   kkUpload:{
//     type: Sequelize.BLOB,
//     allowNull: true    
//   },
//   npwpUpload:{
//     type: Sequelize.BLOB,
//     allowNull: true    
//   },
//   slipGajiUpload:{
//     type: Sequelize.BLOB,
//     allowNull: true    
//   },
    //Form Fasilitas Pembayaran
    skemaPengajuan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    objekDibiayai: {
        type: Sequelize.STRING,
        allowNull: true
    },
    peruntukanPembiayaan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihProgram: {
        type: Sequelize.STRING,
        allowNull: true
    },
    specialMmq: {
        type: Sequelize.STRING,
        allowNull: true
    },
    akadDiajukan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    plafondDiajukan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jangkaWaktuPembiayaan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusProgram: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lainAkad: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jenisPenjualan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lainBank: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lainnyaBank: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaPenjual: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorSPRDeveloper: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorPenjual: {
        type: Sequelize.STRING,
        allowNull: true
    },
    uangMuka: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaProyek: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kondisiBangunanifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatPropertiifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihProvinsiifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihKotaifPembiyaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihKecamatanifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihKelurahanifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pilihanRT: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    pilihanRW: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    pilihKodeposifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bankAsalifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaBankifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    peruntukanBankSebelumnyaifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    akadFasilitas: {
        type: Sequelize.STRING,
        allowNull: true
    },
    perkiraanLunasifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    topUpifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusLainnyaFasilitas:{
        type : Sequelize.STRING,
        allowNull:true
    },

    //Form Data agunan
    jenisAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    luasTanah: {
        type: Sequelize.STRING,
        allowNull: true
    },
    luasBangunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusKepemilikan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kondisiBangunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    atasNamaSertifikat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorSertifikat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    berlakuHingga: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorSPRDeveloperAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatPropertiAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    provinsiAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kotaKabupatenAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kecamatanAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kelurahanAgunan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kodePosAgunan: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rtAgunan: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rwAgunan: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    //Data Pemohon
    namaLengkapKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaLengkapTanpaGelar:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tempatLahir: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tanggalLahir: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noNPWP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaGadisIbuKandung: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPerkawinan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPerkawinan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pendidikanTerakhir: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusTempatTinggal: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    provinsiKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kotaKabupatenKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kelurahanKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kecamatanKTP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatSaatIni: {
        type: Sequelize.STRING,
        allowNull: true
    },
    provinsiSaatIni: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kotaKabupatenSaatIni: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kelurahanSaatIni: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kecamatanSaatIni: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatSuratMenyurat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noTeleponRumah: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noHPsatu: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noHPdua: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusLainnya: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jenisKelamin:{
        type: Sequelize.STRING,
        allowNull:true
    },
    jumlahAnak:{
        type: Sequelize.INTEGER,
        allowNull:true
    },

    //Form Data Suami Istri
    namaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tempatLahirSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tanggalLahirSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorKTPSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorNPWPSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pekerjaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nomorTelponSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //Form Data Pekerjaan Pemohon
    tahunLamaBekerjaPemohon: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    bulanLamaBekerjaPemohon: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    jumlahKaryawanPekerjaanPemohon: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    jenisPekerjaanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pekerjaanLainnyaPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaPerusahaanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jabatanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kategoriInstansiPekerjaanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lainKategoriPekerjaanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pendapatanPerbulanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPekerjaanPemohon:{
        type: Sequelize.STRING,
        allowNull: true
    },
    pembayaranGajiPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatKantorPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    teleponKantorPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emailHRDPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emailAtasanPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    teleponAtasanPemohon: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    teleponHRDPemohon: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    bidangUsahaPemohon: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //Form Data Pekerjaan Suami Istri
    tahunLamaBekerjaSuamiIstri: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    jenisPekerjaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    statusPekerjaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaPerusahaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kategoriInstansiSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bidangUsahaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jumlahKaryawanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    teleponKantorSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    teleponHrdSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jabatanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pendapatanBulananSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pembayaranGajiSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emailHrdSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    emailAtasanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    teleponAtasanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bulanLamaBekerjaSuamiIstri: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    pekerjaanLainnyaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kategoriInstansiLainnyaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatKantorSuamiIstri: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //Form Data Pembiayaan Saat Ini
    pembiayaanBankLain: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ifYaJumlahPembiayaan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ifYaJumlahAngsuran: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jenisPembiayaan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    namaKreditur: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jatuhTempo: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //Form Kerabat
    namaKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamatKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    provinsiKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kotaKabupatenKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kecamatanKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kelurahanKerabat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rtKerabat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    rwKerabat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    kodePosKerabat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    telpRumah: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    noHpKerabat: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    hubunganDenganNasabah: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kerabatLainnya: {
        type: Sequelize.STRING,
        allowNull: true
    },      
    status: {
      type: Sequelize.STRING,
      allowNull: true,
    //   defaultValue:"Draft"
  },








    },     {
        freezeTableName: true,
        tableName: "forms"
    })

module.exports = Form