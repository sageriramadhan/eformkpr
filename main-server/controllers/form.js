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
    const product = await Form.findByPk(req.params.id);
    res.status(200).json(success("OK", { data: product }, res.statusCode));

    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
};

exports.addProduct = async (req, res, next) => {
  try {

    const {
        skemaPengajuan,
        objekDibiayai, 
        peruntukanPembiayaan,            
        programPembiayaan,
        programPembiayaanIfSpecialMMQ,
        akadDiajukan,
        plafondDiajuka,
        jangkaWaktuPembiayaan,
        tujuanPembiayaan,
        namaPenjualifPembiayaanPropertiKendaraan,
        nilaiSPRifPembiayaanPropertiKendaraan,
        nomorTeleponifPembiayaanPropertiKendaraan,
        uangMukaifPembiayaanPropertiKendaraan,
        namaProyekifPembiayaanProperti,
        kondisiBangunanifPembiayaanProperti,      
        alamatPropertiifPembiayaanProperti,       
        pilihProvinsiifPembiayaanProperti,         
        pilihKotaifPembiyaanProperti,             
        pilihKecamatanifPembiayaanProperti,        
        pilihKelurahanifPembiayaanProperti,        
        pilihRTRWifPembiayaanProperti,             
        pilihKodeposifPembiayaanProperti,          
        bankAsalifTakeOver,                        
        namaBankifTakeOver,                        
        peruntukanBankSebelumnyaifTakeOver,        
        akadSebelumnyaifTakeOver,                  
        perkiraanLunasifTakeOver,                  
        topUpifTakeOver,                           
        jenisAngunan,  
        luasTanah,     
        luasBangunan,  
        statusKepemilikan,                         
        kondisiBangunan,                           
        statusBangunan,
        atasNamaSertifikat,                        
        nomorSertifikat,                           
        berlakuHingga, 
        nomorSPRDeveloper,                         
        alamatPropertiAngunan,                     
        provinsiAngunan,                           
        kabupatenKotaAngunan,                      
        kecamatanAngunan,                          
        kelurahanAngunan,                          
        rtRwAngunan,   
        kodePosAngunan,
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
        kodeposKTP,    
        alamatSaatIni, 
        provinsiSaatIni,                           
        kotaKabupatenSaatIni,                      
        kelurahanSaatIni,                          
        kecamatanSaatIni,                          
        kodeposSaatIni,
        alamatSuratMenyurat,                       
        noTeleponRumah,
        email,         
        noHP,          
        namaSuamiIstri,
        tempatLahirSuamiIstri,                     
        tanggalLahirSuamiIstri,                    
        nomorKTPSuamiIstri,                        
        nomorNPWPSuamiIstri,                       
        pekerjaanSuamiIstri,                       
        nomorTelponSuamiIstri,                     
        lamaBekerja,   
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
        lamaBekerjaSuamiIstri,                     
        jenisPekerjaanSuamiIstri,                  
        statusPekerjaanSuamiIstri,                 
        namaPerusahaanSuamiIstri,                  
        tempatUsahaSuamiIstri,                     
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
        pembiayaanBankLain,                        
        ifYaJumlahPembiayaan,                     
        ifYaJumlahAngsuran,                        
        jenisPembiayaan,                           
        namaKreditur,  
        jatuhTempo,    
        ktpUpload,     
        npwpUpload,    
        kkUpload,      
        slipGajiUpload,
       
    } = req.body;
    // if (!title || !image || !brand || !categoryId || !subcategoryId ||  !description || !numReviews || !rating || !price || !inStock) {
    //   return res.status(501).json(validation("Please input all field"));
    // }
    let param = {skemaPengajuan:skemaPengajuan,
        objekDibiayai: objekDibiayai, 
        peruntukanPembiayaan:    peruntukanPembiayaan,    
        programPembiayaan:programPembiayaan,
        programPembiayaanIfSpecialMMQ:programPembiayaanIfSpecialMMQ,
        akadDiajukan:akadDiajukan,
        plafondDiajuka:plafondDiajuka,
        jangkaWaktuPembiayaan:jangkaWaktuPembiayaan,
        tujuanPembiayaan:tujuanPembiayaan,
        namaPenjualifPembiayaanPropertiKendaraan:namaPenjualifPembiayaanPropertiKendaraan,
        nilaiSPRifPembiayaanPropertiKendaraan:nilaiSPRifPembiayaanPropertiKendaraan,
        nomorTeleponifPembiayaanPropertiKendaraan:nomorTeleponifPembiayaanPropertiKendaraan,
        uangMukaifPembiayaanPropertiKendaraan:uangMukaifPembiayaanPropertiKendaraan,
        namaProyekifPembiayaanProperti:namaProyekifPembiayaanProperti,
        kondisiBangunanifPembiayaanProperti:      kondisiBangunanifPembiayaanProperti,      
        alamatPropertiifPembiayaanProperti:       alamatPropertiifPembiayaanProperti,       
        pilihProvinsiifPembiayaanProperti: pilihProvinsiifPembiayaanProperti, 
        pilihKotaifPembiyaanProperti:     pilihKotaifPembiyaanProperti,     
        pilihKecamatanifPembiayaanProperti:pilihKecamatanifPembiayaanProperti,
        pilihKelurahanifPembiayaanProperti:pilihKelurahanifPembiayaanProperti,
        pilihRTRWifPembiayaanProperti:     pilihRTRWifPembiayaanProperti,     
        pilihKodeposifPembiayaanProperti:  pilihKodeposifPembiayaanProperti,  
        bankAsalifTakeOver:bankAsalifTakeOver,
        namaBankifTakeOver:namaBankifTakeOver,
        peruntukanBankSebelumnyaifTakeOver:peruntukanBankSebelumnyaifTakeOver,
        akadSebelumnyaifTakeOver:  akadSebelumnyaifTakeOver,  
        perkiraanLunasifTakeOver:  perkiraanLunasifTakeOver,  
        topUpifTakeOver:   topUpifTakeOver,   
        jenisAngunan:  jenisAngunan,  
        luasTanah:     luasTanah,     
        luasBangunan:  luasBangunan,  
        statusKepemilikan: statusKepemilikan, 
        kondisiBangunan:   kondisiBangunan,   
        statusBangunan:statusBangunan,
        atasNamaSertifikat:atasNamaSertifikat,
        nomorSertifikat:   nomorSertifikat,   
        berlakuHingga: berlakuHingga, 
        nomorSPRDeveloper: nomorSPRDeveloper, 
        alamatPropertiAngunan:     alamatPropertiAngunan,     
        provinsiAngunan:   provinsiAngunan,   
        kabupatenKotaAngunan:      kabupatenKotaAngunan,      
        kecamatanAngunan:  kecamatanAngunan,  
        kelurahanAngunan:  kelurahanAngunan,  
        rtRwAngunan:   rtRwAngunan,   
        kodePosAngunan:kodePosAngunan,
        namaLengkap:   namaLengkap,   
        tempatLahir:   tempatLahir,   
        tanggalLahir:  tanggalLahir,  
        noKTP: noKTP, 
        noNPWP:noNPWP,
        namaGadisIbuKandung:       namaGadisIbuKandung,       
        statusPerkawinan:  statusPerkawinan,  
        pendidikanTerakhir:pendidikanTerakhir,
        statusTempatTinggal:       statusTempatTinggal,       
        alamatKTP:     alamatKTP,     
        provinsiKTP:   provinsiKTP,   
        kotaKabupatenKTP:  kotaKabupatenKTP,  
        kelurahanKTP:  kelurahanKTP,  
        kecamatanKTP:  kecamatanKTP,  
        kodeposKTP:    kodeposKTP,    
        alamatSaatIni: alamatSaatIni, 
        provinsiSaatIni:   provinsiSaatIni,   
        kotaKabupatenSaatIni:      kotaKabupatenSaatIni,      
        kelurahanSaatIni:  kelurahanSaatIni,  
        kecamatanSaatIni:  kecamatanSaatIni,  
        kodeposSaatIni:kodeposSaatIni,
        alamatSuratMenyurat:       alamatSuratMenyurat,       
        noTeleponRumah:noTeleponRumah,
        email: email, 
        noHP:  noHP,  
        namaSuamiIstri:namaSuamiIstri,
        tempatLahirSuamiIstri:     tempatLahirSuamiIstri,     
        tanggalLahirSuamiIstri:    tanggalLahirSuamiIstri,    
        nomorKTPSuamiIstri:nomorKTPSuamiIstri,
        nomorNPWPSuamiIstri:       nomorNPWPSuamiIstri,       
        pekerjaanSuamiIstri:       pekerjaanSuamiIstri,       
        nomorTelponSuamiIstri:     nomorTelponSuamiIstri,     
        lamaBekerja:   lamaBekerja,   
        jenisPekerjaan:jenisPekerjaan,
        statusPekerjaan:   statusPekerjaan,   
        namaPerusahaan:namaPerusahaan,
        alamatKantor:  alamatKantor,  
        kategoriInstansi:  kategoriInstansi,  
        bidangUsaha:   bidangUsaha,   
        jumlahKaryawan:jumlahKaryawan,
        teleponKantor: teleponKantor, 
        teleponHRD:    teleponHRD,    
        jabatan:       jabatan,       
        pendapatanPerBulan:pendapatanPerBulan,
        pembayaranGaji:pembayaranGaji,
        emailHRD:      emailHRD,      
        emailAtasan:   emailAtasan,   
        teleponAtasan: teleponAtasan, 
        lamaBekerjaSuamiIstri:     lamaBekerjaSuamiIstri,     
        jenisPekerjaanSuamiIstri:  jenisPekerjaanSuamiIstri,  
        statusPekerjaanSuamiIstri: statusPekerjaanSuamiIstri, 
        namaPerusahaanSuamiIstri:  namaPerusahaanSuamiIstri,  
        tempatUsahaSuamiIstri:     tempatUsahaSuamiIstri,     
        kategoriInstansiSuamiIstri:kategoriInstansiSuamiIstri,
        bidangUsahaSuamiIstri:     bidangUsahaSuamiIstri,     
        jumlahKaryawanSuamiIstri:  jumlahKaryawanSuamiIstri,  
        teleponKantorSuamiIstri:   teleponKantorSuamiIstri,   
        teleponHrdSuamiIstri:      teleponHrdSuamiIstri,      
        jabatanSuamiIstri: jabatanSuamiIstri, 
        pendapatanBulananSuamiIstri:       pendapatanBulananSuamiIstri,       
        pembayaranGajiSuamiIstri:  pembayaranGajiSuamiIstri,  
        emailHrdSuamiIstri:emailHrdSuamiIstri,
        emailAtasanSuamiIstri:     emailAtasanSuamiIstri,     
        teleponAtasanSuamiIstri:   teleponAtasanSuamiIstri,   
        pembiayaanBankLain:pembiayaanBankLain,
        ifYaJumlahPembiayaan:     ifYaJumlahPembiayaan,     
        ifYaJumlahAngsuran:ifYaJumlahAngsuran,
        jenisPembiayaan:   jenisPembiayaan,   
        namaKreditur:  namaKreditur,  
        jatuhTempo:    jatuhTempo,    
        ktpUpload:     ktpUpload,     
        npwpUpload:    npwpUpload,    
        kkUpload:      kkUpload,      
        slipGajiUpload:slipGajiUpload
        }
    const product = await Form.create(param);
    res.status(200).json(success("OK", { data: product }, res.statusCode));
  } catch (error) {
    console.log(error);
    res.status(500).json(fail(error, res.statusCode));
    return;
  }
   next();
};

exports.editProduct = async (req, res, next) => {
  try {

// if (!title || !image || !brand || !categoryId || !subcategoryId ||  !description || !numReviews || !rating || !price || !inStock) {
//   return res.status(501).json(validation("Please input all field"));
// }
let param = {skemaPengajuan:skemaPengajuan,
    objekDibiayai: objekDibiayai, 
    peruntukanPembiayaan:    peruntukanPembiayaan,    
    programPembiayaan:programPembiayaan,
    programPembiayaanIfSpecialMMQ:programPembiayaanIfSpecialMMQ,
    akadDiajukan:akadDiajukan,
    plafondDiajuka:plafondDiajuka,
    jangkaWaktuPembiayaan:jangkaWaktuPembiayaan,
    tujuanPembiayaan:tujuanPembiayaan,
    namaPenjualifPembiayaanPropertiKendaraan:namaPenjualifPembiayaanPropertiKendaraan,
    nilaiSPRifPembiayaanPropertiKendaraan:nilaiSPRifPembiayaanPropertiKendaraan,
    nomorTeleponifPembiayaanPropertiKendaraan:nomorTeleponifPembiayaanPropertiKendaraan,
    uangMukaifPembiayaanPropertiKendaraan:uangMukaifPembiayaanPropertiKendaraan,
    namaProyekifPembiayaanProperti:namaProyekifPembiayaanProperti,
    kondisiBangunanifPembiayaanProperti:      kondisiBangunanifPembiayaanProperti,      
    alamatPropertiifPembiayaanProperti:       alamatPropertiifPembiayaanProperti,       
    pilihProvinsiifPembiayaanProperti: pilihProvinsiifPembiayaanProperti, 
    pilihKotaifPembiyaanProperti:     pilihKotaifPembiyaanProperti,     
    pilihKecamatanifPembiayaanProperti:pilihKecamatanifPembiayaanProperti,
    pilihKelurahanifPembiayaanProperti:pilihKelurahanifPembiayaanProperti,
    pilihRTRWifPembiayaanProperti:     pilihRTRWifPembiayaanProperti,     
    pilihKodeposifPembiayaanProperti:  pilihKodeposifPembiayaanProperti,  
    bankAsalifTakeOver:bankAsalifTakeOver,
    namaBankifTakeOver:namaBankifTakeOver,
    peruntukanBankSebelumnyaifTakeOver:peruntukanBankSebelumnyaifTakeOver,
    akadSebelumnyaifTakeOver:  akadSebelumnyaifTakeOver,  
    perkiraanLunasifTakeOver:  perkiraanLunasifTakeOver,  
    topUpifTakeOver:   topUpifTakeOver,   
    jenisAngunan:  jenisAngunan,  
    luasTanah:     luasTanah,     
    luasBangunan:  luasBangunan,  
    statusKepemilikan: statusKepemilikan, 
    kondisiBangunan:   kondisiBangunan,   
    statusBangunan:statusBangunan,
    atasNamaSertifikat:atasNamaSertifikat,
    nomorSertifikat:   nomorSertifikat,   
    berlakuHingga: berlakuHingga, 
    nomorSPRDeveloper: nomorSPRDeveloper, 
    alamatPropertiAngunan:     alamatPropertiAngunan,     
    provinsiAngunan:   provinsiAngunan,   
    kabupatenKotaAngunan:      kabupatenKotaAngunan,      
    kecamatanAngunan:  kecamatanAngunan,  
    kelurahanAngunan:  kelurahanAngunan,  
    rtRwAngunan:   rtRwAngunan,   
    kodePosAngunan:kodePosAngunan,
    namaLengkap:   namaLengkap,   
    tempatLahir:   tempatLahir,   
    tanggalLahir:  tanggalLahir,  
    noKTP: noKTP, 
    noNPWP:noNPWP,
    namaGadisIbuKandung:       namaGadisIbuKandung,       
    statusPerkawinan:  statusPerkawinan,  
    pendidikanTerakhir:pendidikanTerakhir,
    statusTempatTinggal:       statusTempatTinggal,       
    alamatKTP:     alamatKTP,     
    provinsiKTP:   provinsiKTP,   
    kotaKabupatenKTP:  kotaKabupatenKTP,  
    kelurahanKTP:  kelurahanKTP,  
    kecamatanKTP:  kecamatanKTP,  
    kodeposKTP:    kodeposKTP,    
    alamatSaatIni: alamatSaatIni, 
    provinsiSaatIni:   provinsiSaatIni,   
    kotaKabupatenSaatIni:      kotaKabupatenSaatIni,      
    kelurahanSaatIni:  kelurahanSaatIni,  
    kecamatanSaatIni:  kecamatanSaatIni,  
    kodeposSaatIni:kodeposSaatIni,
    alamatSuratMenyurat:       alamatSuratMenyurat,       
    noTeleponRumah:noTeleponRumah,
    email: email, 
    noHP:  noHP,  
    namaSuamiIstri:namaSuamiIstri,
    tempatLahirSuamiIstri:     tempatLahirSuamiIstri,     
    tanggalLahirSuamiIstri:    tanggalLahirSuamiIstri,    
    nomorKTPSuamiIstri:nomorKTPSuamiIstri,
    nomorNPWPSuamiIstri:       nomorNPWPSuamiIstri,       
    pekerjaanSuamiIstri:       pekerjaanSuamiIstri,       
    nomorTelponSuamiIstri:     nomorTelponSuamiIstri,     
    lamaBekerja:   lamaBekerja,   
    jenisPekerjaan:jenisPekerjaan,
    statusPekerjaan:   statusPekerjaan,   
    namaPerusahaan:namaPerusahaan,
    alamatKantor:  alamatKantor,  
    kategoriInstansi:  kategoriInstansi,  
    bidangUsaha:   bidangUsaha,   
    jumlahKaryawan:jumlahKaryawan,
    teleponKantor: teleponKantor, 
    teleponHRD:    teleponHRD,    
    jabatan:       jabatan,       
    pendapatanPerBulan:pendapatanPerBulan,
    pembayaranGaji:pembayaranGaji,
    emailHRD:      emailHRD,      
    emailAtasan:   emailAtasan,   
    teleponAtasan: teleponAtasan, 
    lamaBekerjaSuamiIstri:     lamaBekerjaSuamiIstri,     
    jenisPekerjaanSuamiIstri:  jenisPekerjaanSuamiIstri,  
    statusPekerjaanSuamiIstri: statusPekerjaanSuamiIstri, 
    namaPerusahaanSuamiIstri:  namaPerusahaanSuamiIstri,  
    tempatUsahaSuamiIstri:     tempatUsahaSuamiIstri,     
    kategoriInstansiSuamiIstri:kategoriInstansiSuamiIstri,
    bidangUsahaSuamiIstri:     bidangUsahaSuamiIstri,     
    jumlahKaryawanSuamiIstri:  jumlahKaryawanSuamiIstri,  
    teleponKantorSuamiIstri:   teleponKantorSuamiIstri,   
    teleponHrdSuamiIstri:      teleponHrdSuamiIstri,      
    jabatanSuamiIstri: jabatanSuamiIstri, 
    pendapatanBulananSuamiIstri:       pendapatanBulananSuamiIstri,       
    pembayaranGajiSuamiIstri:  pembayaranGajiSuamiIstri,  
    emailHrdSuamiIstri:emailHrdSuamiIstri,
    emailAtasanSuamiIstri:     emailAtasanSuamiIstri,     
    teleponAtasanSuamiIstri:   teleponAtasanSuamiIstri,   
    pembiayaanBankLain:pembiayaanBankLain,
    ifYaJumlahPembiayaan:     ifYaJumlahPembiayaan,     
    ifYaJumlahAngsuran:ifYaJumlahAngsuran,
    jenisPembiayaan:   jenisPembiayaan,   
    namaKreditur:  namaKreditur,  
    jatuhTempo:    jatuhTempo,    
    ktpUpload:     ktpUpload,     
    npwpUpload:    npwpUpload,    
    kkUpload:      kkUpload,      
    slipGajiUpload:slipGajiUpload
    }

    const editProduct = await Form.update(param,
      {
        where: { id: req.params.id },
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
        id: req.params.id,
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

