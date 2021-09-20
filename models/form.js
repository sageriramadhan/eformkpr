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
      status:{
        type: Sequelize.STRING,
        allowNull : true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : true,
        references: {
            model: User,
            key: "id",
        },
      },
        //Fasilitas Pembayaran
      skemaPengajuan: {
        type: Sequelize.STRING,
        allowNull : true
      },
      objekDibiayai: {
        type: Sequelize.STRING,
        allowNull : true
      },
      peruntukanPembiayaan:{
        type: Sequelize.STRING,
        allowNull : true
      },
      programPembiayaan: {
        type: Sequelize.STRING,
        allowNull : true 
      },
      programPembiayaanIfSpecialMMQ: {
        type: Sequelize.STRING,
        allowNull : true
      },
      akadDiajukan: {
        type: Sequelize.STRING,
        allowNull : true
      },
      plafondDiajuka:{
        type: Sequelize.BIGINT,
        allowNull : true
      },
      jangkaWaktuPembiayaan:{
        type: Sequelize.BIGINT,
        allowNull: true
      },
      tujuanPembiayaan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      namaPenjualifPembiayaanPropertiKendaraan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nilaiSPRifPembiayaanPropertiKendaraan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nomorTeleponifPembiayaanPropertiKendaraan: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      uangMukaifPembiayaanPropertiKendaraan: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      namaProyekifPembiayaanProperti:{
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
      pilihKotaifPembiyaanProperti :{
        type: Sequelize.STRING,
        allowNull: true
      },
      pilihKecamatanifPembiayaanProperti : {
        type: Sequelize.STRING,
        allowNull: true
      },
      pilihKelurahanifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pilihRTRWifPembiayaanProperti: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pilihKodeposifPembiayaanProperti: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      bankAsalifTakeOver:{
        type: Sequelize.STRING,
        allowNull: true
      },
      namaBankifTakeOver:{
        type: Sequelize.STRING,
        allowNull: true
      },
      peruntukanBankSebelumnyaifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
      },
      akadSebelumnyaifTakeOver: {
        type: Sequelize.STRING,
        allowNull: true
      },
      perkiraanLunasifTakeOver: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      topUpifTakeOver : {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      //Data Agunan
      jenisAgunan: {
            type: Sequelize.STRING,
            allowNull: true
        },
        luasTanah: {
            type: Sequelize.BIGINT,
            allowNull: true,
        },
        luasBangunan: {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        statusKepemilikan: {
            type: Sequelize.BOOLEAN,
        allowNull: true
        },
        kondisiBangunan: {
            type: Sequelize.STRING,
        allowNull: true
        },
        statusBangunan: {
            type: Sequelize.BOOLEAN,
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
            type: Sequelize.DATE,
            allowNull: true
        },
        nomorSPRDeveloper: {
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
        kabupatenKotaAgunan: {
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
        rtRwAgunan: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        kodePosAgunan: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
    //Data Pemohon
      namaLengkap: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      tempatLahir: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      tanggalLahir: {
        type: Sequelize.DATEONLY,
        allowNull : true,
      },
      noKTP: {
        type: Sequelize.BIGINT,
        allowNull: true,
        unique: true
      },
      noNPWP: {
        type: Sequelize.BIGINT,
        allowNull : true,
        unique : true,
      },
      namaGadisIbuKandung: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      statusPerkawinan: {
        type: Sequelize.STRING,
        allowNull : true,
        // values: ['Single', 'Menikah']
      },
      pendidikanTerakhir: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      statusTempatTinggal: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      alamatKTP: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      provinsiKTP : {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kotaKabupatenKTP: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kelurahanKTP: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kecamatanKTP: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kodeposKTP: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      alamatSaatIni: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      provinsiSaatIni : {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kotaKabupatenSaatIni: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kelurahanSaatIni: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kecamatanSaatIni: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kodeposSaatIni: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      alamatSuratMenyurat: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      noTeleponRumah: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull : true,
        unique : true,
      },
      noHP: {
        type: Sequelize.BIGINT,
        allowNull : true,
        // unique : true
      },
    //Data Suami Istri
     namaSuamiIstri : {
        type: Sequelize.STRING,
        allowNull : true
      },
     tempatLahirSuamiIstri : {
        type: Sequelize.STRING,
        allowNull : true
      },
     tanggalLahirSuamiIstri : {
        type: Sequelize.DATEONLY,
        allowNull : true
      },
     nomorKTPSuamiIstri : {
        type: Sequelize.BIGINT(16),
        allowNull : true
      },
      nomorNPWPSuamiIstri : {
        type: Sequelize.BIGINT,
        allowNull : true
      },
      pekerjaanSuamiIstri : {
        type: Sequelize.STRING,
        allowNull : true
      },
      nomorTelponSuamiIstri : {
        type: Sequelize.BIGINT,
        allowNull : true
      },
    // Data Pekerjaan Pemohon
      lamaBekerja: {
        type: Sequelize.INTEGER,
        allowNull : true,
      },
      jenisPekerjaan: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      statusPekerjaan: {
        type: Sequelize.STRING,
        allowNull : true, 
      },
      namaPerusahaan: {
        type: Sequelize.STRING,
        allowNull : true 
      },
      alamatKantor: {
        type: Sequelize.STRING,
        allowNull:true
      },
      kategoriInstansi: {
        type: Sequelize.STRING,
        allowNull:true
      },
      bidangUsaha: {
          type: Sequelize.STRING,
          allowNull:true
      },
      jumlahKaryawan: {
        type: Sequelize.INTEGER,
        allowNull : true,
      },
      teleponKantor: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      teleponHRD: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      jabatan: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      pendapatanPerBulan: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      pembayaranGaji: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      emailHRD: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      emailAtasan: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      teleponAtasan: {
        type: Sequelize.STRING,
        allowNull : true,
      },
    // Data Pekerjaan Suami Istri
      lamaBekerjaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      jenisPekerjaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      statusPekerjaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      namaPerusahaanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      tempatUsahaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      kategoriInstansiSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      bidangUsahaSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      jumlahKaryawanSuamiIstri: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      teleponKantorSuamiIstri: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      teleponHrdSuamiIstri: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      jabatanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      pendapatanBulananSuamiIstri: {
        type: Sequelize.BIGINT,
        allowNull : true,
      },
      pembayaranGajiSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      emailHrdSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      emailAtasanSuamiIstri: {
        type: Sequelize.STRING,
        allowNull : true,
      },
      teleponAtasanSuamiIstri: {
        type: Sequelize.BIGINT,
        allowNull : true,
      }, 
    // Data Pembiayaan Suami Istri saat ini
        pembiayaanBankLain : {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        ifYaJumlahPembiayaan : {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        ifYaJumlahAngsuran : {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        jenisPembiayaan : {
            type: Sequelize.STRING,
            allowNull: true
        },
        namaKreditur : {
            type: Sequelize.STRING,
            allowNull: true
        },
        jatuhTempo : {
            type: Sequelize.DATE,
            allowNull: true
        },
        //FormUpload
        ktpUpload : {
            type: Sequelize.BLOB,
            allowNull: true
        },
        npwpUpload : {
            type: Sequelize.BLOB,
            allowNull: true
        },
        kkUpload : {
            type: Sequelize.BLOB,
            allowNull: true
        },
        slipGajiUpload : {
            type: Sequelize.BLOB,
            allowNull: true
        },
    })
  
module.exports = Form