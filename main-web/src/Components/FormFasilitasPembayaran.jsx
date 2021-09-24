import React, { Component } from 'react';
import { AppBar, TextField, MenuItem, Button, FormControl, FormLabel, Grid } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import InputMask from "react-input-mask";
import InputAdornment from '@material-ui/core/InputAdornment';
import { LocationService } from '../Service/LocationService';
import CurrencyTextField from '@unicef/material-ui-currency-textfield/dist/CurrencyTextField';
import Stepper from '../Components/stepper';

//stepper
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";

const styles = theme => createStyles({
    label: {
        color: "#490E73",
        fontSize: "14px",
        fontWeight: 600,
        fontFamily: "Open Sans"
    },
    formControl: {
        left: 150,
        right: 150

    },
    text: {
        width: "641px",
    }
});

export class FasilitasPembayaran extends Component {

    state = {
        checkAd: false, isSelect: false, isMmq: false,
        isLainnya: false, isLainProgram: false, isAkad: false,
        isPropertiKendaraan: false, isProperti: false,
        isTakeOver: false, isFasilitas: false, isBank: false,

        daftarProvinsi: [],
        daftarKotaKabupaten: [],
        daftarKecamatan: [],
        daftarKelurahan: [],
        provinsiTerpilih: null,
        kotaKabupatenTerpilih: null,
        kecamatanTerpilih: null,
        kelurahanTerpilih: null,
    }

    getSteps = () => {
        return [
            "Select master blaster campaign settings",
            "Create an ad group",
            "Create an ad"
        ];
    };


    handleSwitch = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked })
        this.props.handleAlamatSama();
    }

    async componentDidMount() {

        let namaProvinsi = this.props.values.pilihProvinsiifPembiayaanProperti
        let namaKotaKabupaten = this.props.values.pilihKotaifPembiyaanProperti
        let namaKecamatan = this.props.values.pilihKecamatanifPembiayaanProperti
        let namaKelurahan = this.props.values.pilihKelurahanifPembiayaanProperti

        let daftarProvinsi = await LocationService.getDaftarProvinsi()
        this.setState({ daftarProvinsi: daftarProvinsi })

        if (namaProvinsi !== "") {
            let provinsi = this.state.daftarProvinsi.find(element => {
                return element.nama === namaProvinsi
            })
            await this.onProvinsiDidSelect(provinsi)
        }

        if (namaKotaKabupaten !== "") {
            let kotaKabupaten = this.state.daftarKotaKabupaten.find(element => {
                return element.nama === namaKotaKabupaten
            })
            // console.log(`onKotaKabupatenDidSelect ${kotaKabupaten}`)
            await this.onKotaKabupatenDidSelect(kotaKabupaten)
        }

        if (namaKecamatan !== "") {
            let kecamatan = this.state.daftarKecamatan.find(element => {
                return element.nama === namaKecamatan
            })
            // console.log(`onKecamatanDidSelect ${kecamatan}`)
            await this.onKecamatanDidSelect(kecamatan)
        }

        if (namaKelurahan !== "") {
            let kelurahan = this.state.daftarKelurahan.find(element => {
                return element.nama === namaKelurahan
            })
            // console.log(`onKelurahanDidSelect ${kelurahan}`)
            await this.onKelurahanDidSelect(kelurahan)
        }
    }

    async onProvinsiDidSelect(provinsi) {
        this.props.handleProvinsi(provinsi, 'provinsiProperti')

        this.setState({ provinsiTerpilih: provinsi })

        let daftarKotaKabupaten = await LocationService.getDaftarKotaKabupaten(provinsi.id)
        this.setState({ daftarKotaKabupaten: daftarKotaKabupaten })
    }

    async onKotaKabupatenDidSelect(kotaKabupaten) {
        this.props.handleKotaKabupaten(kotaKabupaten, 'kotaKabupatenProperti')

        this.setState({ kotaKabupatenTerpilih: kotaKabupaten })

        let daftarKecamatan = await LocationService.getDaftarKecamatan(kotaKabupaten.id)
        this.setState({ daftarKecamatan: daftarKecamatan })
    }

    async onKecamatanDidSelect(kecamatan) {
        this.props.handleKecamatan(kecamatan, 'kecamatanProperti')

        this.setState({ kecamatanTerpilih: kecamatan })

        let daftarKelurahan = await LocationService.getDaftarKelurahan(kecamatan.id)
        this.setState({ daftarKelurahan: daftarKelurahan })
    }

    async onKelurahanDidSelect(kelurahan) {
        this.props.handleKelurahan(kelurahan, 'kelurahanProperti')

        this.setState({ kelurahanTerpilih: kelurahan })
    }

    // View Event Handler
    onProvinsiMenuItemClick = provinsi => e => {
        this.onProvinsiDidSelect(provinsi)
    }

    onKotaKabupatenMenuItemClick = kotaKabupaten => e => {
        this.onKotaKabupatenDidSelect(kotaKabupaten)
    }

    onKecamatanMenuItemClick = kecamatan => e => {
        this.onKecamatanDidSelect(kecamatan)
    }

    onKelurahanMenuItemClick = kelurahan => e => {
        this.onKelurahanDidSelect(kelurahan)
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange, classes, handleLainnya,
            handleMmq, handleAkad, handlePembiayaan, handleFasilitas,
            handleAkadFasilitas, isLainnya, isMmq,
            isLainProgram, isAkad, isPropertiKendaraan, isProperti,
            isTakeOver, isFasilitas, isBank, step } = this.props;

        const {
            daftarProvinsi,
            daftarKotaKabupaten,
            daftarKecamatan,
            daftarKelurahan,
            provinsiTerpilih,
            kotaKabupatenTerpilih,
            kecamatanTerpilih,
            kelurahanTerpilih, } = this.state;

        return (
            <div className="mainPage">
                <div className="mainForm">
                    <p className="judul">Fasilitas Pembayaran</p>
                    <Stepper currentStep={step} />
                    <br />
                    <br />
                    <AppBar title="Masukkan Data Pengguna" />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Skema Pengajuan</FormLabel>
                        <TextField
                            className={classes.text}
                            label={values.skemaPengajuan === "" ? "Pilih Skema Pengajuan" : ""}
                            onChange={handleChange('skemaPengajuan')}
                            defaultValue={values.skemaPengajuan}
                            margin="normal"
                            // style={{marginTop:"8px"}}
                            InputLabelProps={{ shrink: false }}
                            select>
                            <MenuItem value={10}>Penghasilan Tabungan</MenuItem>
                            <MenuItem value={20} onChange={this.changeLainnya}>Penghasilan Gabungan / Joint Income (Suami / Istri)</MenuItem>
                        </TextField>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Objek yang Dibiayai</FormLabel>
                        <TextField
                            label={values.objekDibiayai === "" ? "Pilih Objek yang Dibiayai" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleLainnya('objekDibiayai')}
                            className={classes.text}
                            defaultValue={values.objekDibiayai}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value={10}>Properti</MenuItem>
                            <MenuItem value={20}>Renovasi/Pembangunan</MenuItem>
                            <MenuItem value={30}>Kendaraan</MenuItem>
                            <MenuItem value={40}>Furniture</MenuItem>
                            <MenuItem value={50}>Jasa Konsumtif</MenuItem>
                            <MenuItem value="Lainnya" >Lainnya</MenuItem>
                        </TextField>
                        {
                            isLainnya ?
                                <TextField
                                    placeholder="Lainnya"
                                    margin="normal"
                                    className={classes.text}
                                    onChange={handleChange("statusLainnyaFasilitas")}
                                    //tambah state baru statusLainnya
                                    defaultValue={values.statusLainnyaFasilitas}
                                />
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Peruntukan Pembiayaan</FormLabel>
                        <TextField
                            label={values.peruntukanPembiayaan === "" ? "Pilih Peruntukan Pembiayaan" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handlePembiayaan('peruntukanPembiayaan')}
                            className={classes.text}
                            defaultValue={values.peruntukanPembiayaan}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value="Properti">Pembelian Properti</MenuItem>
                            <MenuItem value={10}>Top Up</MenuItem>
                            <MenuItem value={20}>Take Over</MenuItem>
                            <MenuItem value="TakeOver">Take Over + Top Up</MenuItem>
                            <MenuItem value="PropertiKendaraan">Pembiayaan Konsumsi Beragun Properti</MenuItem>
                        </TextField>
                        {
                            isPropertiKendaraan ?
                                <>
                                    <FormControl>
                                        <FormLabel className={classes.label}>Jenis Penjual</FormLabel>
                                        <TextField
                                            className={classes.text}
                                            label={values.jenisPenjualan === "" ? "Pilih Jenis Penjual" : ""}
                                            onChange={handleChange('jenisPenjualan')}
                                            defaultValue={values.jenisPenjualan}
                                            margin="normal"
                                            InputLabelProps={{ shrink: false }}
                                            select>
                                            <MenuItem value={10}>Developer Rekanan</MenuItem>
                                            <MenuItem value={20}>Developer Non Rekanan</MenuItem>
                                            <MenuItem value={30}>Non Developer</MenuItem>
                                        </TextField>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel className={classes.label}>Nama Penjual</FormLabel>
                                        <TextField
                                            placeholder="Pilih Nama Penjual"
                                            className={classes.text}
                                            onChange={handleChange('namaPenjual')}
                                            defaultValue={values.namaPenjual}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </FormControl>

                                    <FormControl >
                                        <FormLabel className={classes.label}>Harga Penawaran Penjual / Nilai SPR*</FormLabel>
                                        <CurrencyTextField
                                            className={classes.text}
                                            name='nomorSPRDeveloper'
                                            onChange={handleChange('nomorSPRDeveloper')}
                                            defaultValue={values.nomorSPRDeveloper}
                                            currencySymbol="Rp | "
                                            margin="normal"
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            modifyValueOnWheel={false}
                                            fullWidth
                                            className={clsx(classes.margin, classes.textField)}
                                            inputProps={{ style: { textAlign: 'left' } }}
                                            helperText="*) Surat Pemesanan Rumah"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel className={classes.label}>No Telp Penjual</FormLabel>
                                        <InputMask
                                            mask="+62 | 999-9999-9999"
                                            value={values.nomorPenjual}
                                            onChange={handleChange('nomorPenjual')}
                                            maskChar=" ">
                                            {() => <TextField
                                                className={classes.text}
                                                placeholder="+62 | xxx-xxxx-xxx"
                                                name="nomorPenjual"
                                                fullWidth
                                                margin="normal" />}
                                        </InputMask>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel className={classes.label}>Uang Muka</FormLabel>
                                        <CurrencyTextField
                                            name="uangMuka"
                                            className={classes.text}
                                            onChange={handleChange('uangMuka')}
                                            defaultValue={values.uangMuka}
                                            margin="normal"
                                            fullWidth
                                            inputProps={{ style: { textAlign: 'left' } }}
                                            currencySymbol="Rp | "
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            modifyValueOnWheel={false}
                                        />
                                    </FormControl>
                                </>
                                : null
                        }
                        {
                            isProperti ?
                                <>
                                    <FormControl>
                                        <FormLabel className={classes.label}>Jenis Penjual</FormLabel>
                                        <TextField
                                            className={classes.text}
                                            label={values.jenisPenjualan === "" ? "Pilih Jenis Penjual" : ""}
                                            onChange={handleChange('jenisPenjualan')}
                                            defaultValue={values.jenisPenjualan}
                                            margin="normal"
                                            InputLabelProps={{ shrink: false }}
                                            select>
                                            <MenuItem value={10}>Developer Rekanan</MenuItem>
                                            <MenuItem value={20}>Developer Non Rekanan</MenuItem>
                                            <MenuItem value={30}>Non Developer</MenuItem>
                                        </TextField>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel className={classes.label}>Nama Penjual</FormLabel>
                                        <TextField
                                            placeholder="Pilih Nama Penjual"
                                            className={classes.text}
                                            onChange={handleChange('namaPenjual')}
                                            defaultValue={values.namaPenjual}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </FormControl>

                                    <FormControl >
                                        <FormLabel className={classes.label}>Harga Penawaran Penjual / Nilai SPR*</FormLabel>
                                        <CurrencyTextField
                                            className={classes.text}
                                            name='nomorSPRDeveloper'
                                            onChange={handleChange('nomorSPRDeveloper')}
                                            defaultValue={values.nomorSPRDeveloper}
                                            currencySymbol="Rp | "
                                            margin="normal"
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            modifyValueOnWheel={false}
                                            fullWidth
                                            className={clsx(classes.margin, classes.textField)}
                                            inputProps={{ style: { textAlign: 'left' } }}
                                            helperText="*) Surat Pemesanan Rumah"
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel className={classes.label}>No Telp Penjual</FormLabel>
                                        <InputMask
                                            mask="+62 | 999-9999-9999"
                                            value={values.nomorPenjual}
                                            onChange={handleChange('nomorPenjual')}
                                            maskChar=" ">
                                            {() => <TextField
                                                className={classes.text}
                                                placeholder="+62 | xxx-xxxx-xxx"
                                                name='nomorPenjual'
                                                fullWidth
                                                margin='normal' />}
                                        </InputMask>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel className={classes.label}>Uang Muka</FormLabel>
                                        <CurrencyTextField
                                            name="uangMuka"
                                            className={classes.text}
                                            onChange={handleChange('uangMuka')}
                                            defaultValue={values.uangMuka}
                                            margin="normal"
                                            fullWidth
                                            inputProps={{ style: { textAlign: 'left' } }}
                                            currencySymbol="Rp | "
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            modifyValueOnWheel={false}
                                        />
                                    </FormControl>
                                    <FormControl id="pemisah">
                                        <FormLabel className={classes.label}>Nama Proyek (jika penjual developer)</FormLabel>
                                        <TextField
                                            placeholder="Pilih Nama Proyek (jika penjual developer)"
                                            className={classes.text}
                                            onChange={handleChange('namaProyek')}
                                            defaultValue={values.namaProyek}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel className={classes.label}>Kondisi Bangunan</FormLabel>
                                        <TextField
                                            className={classes.text}
                                            label={values.kondisiBangunanifPembiayaanProperti === "" ? "Pilih Kondisi Bangunan" : ""}
                                            onChange={handleChange('kondisiBangunanifPembiayaanProperti')}
                                            defaultValue={values.kondisiBangunanifPembiayaanProperti}
                                            margin="normal"
                                            InputLabelProps={{ shrink: false }}
                                            select>
                                            <MenuItem value={10}>Siap Huni (ready stock)</MenuItem>
                                            <MenuItem value={20}>Dalam Proses Pembuatan (indent)</MenuItem>
                                        </TextField>
                                    </FormControl>

                                    <FormControl >
                                        <FormLabel className={classes.label}>Alamat Properti</FormLabel>
                                        <TextField
                                            placeholder="Masukkan Alamat Properti"
                                            onChange={handleChange('alamatPropertiifPembiayaanProperti')}
                                            className={classes.text}
                                            defaultValue={values.alamatPropertiifPembiayaanProperti}
                                            margin="normal"
                                            fullWidth
                                        />
                                        <TextField
                                            label={values.pilihProvinsiifPembiayaanProperti === "" ? "Pilih Provinsi" : ""}
                                            InputLabelProps={{ shrink: false }}
                                            onChange={handleChange('pilihProvinsiifPembiayaanProperti')}
                                            // onChange="handleChange('pilihProvinsiifPembiayaanProperti'); this.setState({provinsiTerpilih: values.pilihProvinsiifPembiayaanProperti});"
                                            className={classes.text}
                                            defaultValue={values.pilihProvinsiifPembiayaanProperti === '' ? '' : values.pilihProvinsiifPembiayaanProperti}
                                            // defaultValue={values.pilihProvinsiifPembiayaanProperti}
                                            margin="normal"
                                            fullWidth
                                            select >
                                            {
                                                daftarProvinsi.map((provinsi) =>
                                                    <MenuItem
                                                        key={provinsi.id}
                                                        value={provinsi.nama}
                                                        onClick={this.onProvinsiMenuItemClick(provinsi)}>
                                                        {provinsi.nama}
                                                    </MenuItem>)
                                            }
                                        </TextField>
                                        <TextField
                                            disabled={provinsiTerpilih == null}
                                            label={values.pilihKotaifPembiyaanProperti === "" ? "Pilih Kabupaten / Kota" : ""}
                                            InputLabelProps={{ shrink: false }}
                                            onChange={handleChange('pilihKotaifPembiyaanProperti')}
                                            className={classes.text}
                                            defaultValue={values.pilihKotaifPembiyaanProperti === "" ? '' : values.pilihKotaifPembiyaanProperti}
                                            // defaultValue={values.pilihKotaifPembiyaanProperti}
                                            margin="normal"
                                            fullWidth
                                            select>
                                            {
                                                daftarKotaKabupaten.map((kota_kabupaten) =>
                                                    <MenuItem
                                                        key={kota_kabupaten.id}
                                                        value={kota_kabupaten.nama}
                                                        onClick={this.onKotaKabupatenMenuItemClick(kota_kabupaten)}>
                                                        {kota_kabupaten.nama}
                                                    </MenuItem>)
                                            }
                                        </TextField>
                                        <TextField
                                            disabled={kotaKabupatenTerpilih == null}
                                            label={values.pilihKecamatanifPembiayaanProperti === "" ? "Pilih Kecamatan" : ""}
                                            InputLabelProps={{ shrink: false }}
                                            onChange={handleChange('pilihKecamatanifPembiayaanProperti')}
                                            className={classes.text}
                                            defaultValue={values.pilihKecamatanifPembiayaanProperti === "" ? '' : values.pilihKecamatanifPembiayaanProperti}
                                            // defaultValue={values.pilihKecamatanifPembiayaanProperti}
                                            margin="normal"
                                            fullWidth
                                            select>
                                            {
                                                daftarKecamatan.map((kecamatan) =>
                                                    <MenuItem
                                                        key={kecamatan.id}
                                                        value={kecamatan.nama}
                                                        onClick={this.onKecamatanMenuItemClick(kecamatan)}>
                                                        {kecamatan.nama}
                                                    </MenuItem>)
                                            }
                                        </TextField>
                                        <TextField
                                            disabled={kecamatanTerpilih == null}
                                            label={values.pilihKelurahanifPembiayaanProperti === "" ? "Pilih Kelurahan" : ""}
                                            InputLabelProps={{ shrink: false }}
                                            onChange={handleChange('pilihKelurahanifPembiayaanProperti')}
                                            className={classes.text}
                                            defaultValue={values.pilihKelurahanifPembiayaanProperti === "" ? '' : values.pilihKelurahanifPembiayaanProperti}
                                            // defaultValue={values.pilihKelurahanifPembiayaanProperti}
                                            margin="normal"
                                            fullWidth
                                            select>
                                            {
                                                daftarKelurahan.map((kelurahan) =>
                                                    <MenuItem
                                                        key={kelurahan.id}
                                                        value={kelurahan.nama}
                                                        onClick={this.onKelurahanMenuItemClick(kelurahan)}
                                                    >
                                                        {kelurahan.nama}
                                                    </MenuItem>)
                                            }
                                        </TextField>
                                        <Grid container spacing={24}>
                                            <Grid item xs={4}>
                                                <TextField
                                                    type='number'
                                                    disabled={kelurahanTerpilih == null}
                                                    placeholder="RT"
                                                    onChange={handleChange('pilihanRT')}
                                                    style={{ paddingRight: "20px", width: "170px" }}
                                                    defaultValue={values.pilihanRT}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    type='number'
                                                    disabled={kelurahanTerpilih == null}
                                                    placeholder="RW"
                                                    onChange={handleChange('pilihanRW')}
                                                    style={{ paddingRight: "20px", width: "170px" }}
                                                    defaultValue={values.pilihanRW}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    type='number'
                                                    disabled={kelurahanTerpilih == null}
                                                    placeholder="Kode Pos"
                                                    onChange={handleChange('pilihKodeposifPembiayaanProperti')}
                                                    style={{ paddingRight: "20px", width: "170px" }}
                                                    defaultValue={values.pilihKodeposifPembiayaanProperti}
                                                    margin="normal"
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </>
                                : null
                        }
                        {
                            isTakeOver ?
                                <>
                                    <FormControl>
                                        <FormLabel className={classes.label}>Jenis Bank Asal</FormLabel>
                                        <TextField
                                            className={classes.text}
                                            label={values.bankAsalifTakeOver === "" ? "Pilih Jenis Bank Asal" : ""}
                                            onChange={handleChange('bankAsalifTakeOver')}
                                            defaultValue={values.bankAsalifTakeOver}
                                            margin="normal"
                                            InputLabelProps={{ shrink: false }}
                                            select>
                                            <MenuItem value={10}>Bank Konvensional</MenuItem>
                                            <MenuItem value={20}>Bank Syariah</MenuItem>
                                        </TextField>
                                    </FormControl>

                                    <FormControl >
                                        <FormLabel className={classes.label}>Nama Bank</FormLabel>
                                        <TextField
                                            placeholder="Masukan Nama Bank "
                                            className={classes.text}
                                            onChange={handleChange('namaBankifTakeOver')}
                                            defaultValue={values.namaBankifTakeOver}
                                            margin="normal"
                                            fullWidth
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel className={classes.label}>Peruntukan Fasilitas di Bank Sebelumnya</FormLabel>
                                        <TextField
                                            className={classes.text}
                                            label={values.peruntukanBankSebelumnyaifTakeOver === "" ? "Pilih Peruntukan Fasilitas di Bank Sebelumnya" : ""}
                                            onChange={handleFasilitas('peruntukanBankSebelumnyaifTakeOver')}
                                            defaultValue={values.peruntukanBankSebelumnyaifTakeOver}
                                            margin="normal"
                                            InputLabelProps={{ shrink: false }}
                                            select>
                                            <MenuItem value={10}>Pembelian Properti</MenuItem>
                                            <MenuItem value={20}>Renovasi Pembangunan</MenuItem>
                                            <MenuItem value={30}>Refinancing/Konsumsi Beragunan Properti</MenuItem>
                                            <MenuItem value="LainFasilSebelum">Lainnya</MenuItem>
                                        </TextField>
                                        {
                                            isFasilitas ?
                                                <FormControl>
                                                    <TextField
                                                        placeholder="Lainnya"
                                                        margin="normal"
                                                        className={classes.text}
                                                        onChange={handleChange("lainnyaBank")}
                                                        //tambah state baru statusLainnya
                                                        defaultValue={values.lainnyaBank}
                                                    />
                                                </FormControl>
                                                : null
                                        }

                                        <FormControl>
                                            <FormLabel className={classes.label}>Akad Fasilitas di Bank Sebelumnya</FormLabel>
                                            <TextField
                                                className={classes.text}
                                                label={values.akadFasilitas === "" ? "Pilih Akad Fasilitas di Bank Sebelumnya" : ""}
                                                onChange={handleAkadFasilitas('akadFasilitas')}
                                                defaultValue={values.akadFasilitas}
                                                margin="normal"
                                                InputLabelProps={{ shrink: false }}
                                                select>
                                                <MenuItem value={10}>Murabahah</MenuItem>
                                                <MenuItem value={20}>MMQ</MenuItem>
                                                <MenuItem value={30}>IMBT</MenuItem>
                                                <MenuItem value="LainnyaAkad">Lainnya</MenuItem>
                                            </TextField>
                                            {
                                                isBank ?
                                                    <TextField
                                                        placeholder="Lainnya"
                                                        margin="normal"
                                                        className={classes.text}
                                                        onChange={handleChange("lainBank")}
                                                        //tambah state baru statusLainnya
                                                        defaultValue={values.lainBank}
                                                    />
                                                    : null
                                            }
                                            <br />
                                            <br />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel className={classes.label}>Perkiraan Nilai Pelunasan Take Over</FormLabel>
                                            <CurrencyTextField
                                                name="perkiraanLunasifTakeOver"
                                                className={classes.text}
                                                onChange={handleChange('perkiraanLunasifTakeOver')}
                                                defaultValue={values.perkiraanLunasifTakeOver}
                                                currencySymbol="Rp | "
                                                decimalCharacter=","
                                                digitGroupSeparator="."
                                                modifyValueOnWheel={false}
                                                margin="normal"
                                                inputProps={{ style: { textAlign: 'left' } }}
                                            />
                                        </FormControl>
                                        <br />
                                        <br />
                                        <FormControl >
                                            <FormLabel className={classes.label}>Plafond Top Up</FormLabel>
                                            <CurrencyTextField
                                                name="topUpifTakeOver"
                                                className={classes.text}
                                                onChange={handleChange('topUpifTakeOver')}
                                                defaultValue={values.topUpifTakeOver}
                                                margin="normal"
                                                currencySymbol="Rp | "
                                                decimalCharacter=","
                                                digitGroupSeparator="."
                                                modifyValueOnWheel={false}
                                                inputProps={{ style: { textAlign: 'left' } }}
                                            />
                                        </FormControl>

                                    </FormControl>
                                </>
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />

                    {/* Program MMQ dan Lainnya */}
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Program</FormLabel>
                        <TextField
                            label={values.pilihProgram === "" ? "Pilih Program" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleMmq('pilihProgram')}
                            className={classes.text}
                            defaultValue={values.pilihProgram}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value={10}>Fix & Fix</MenuItem>
                            <MenuItem value={20}>Angsuran Super Ringan</MenuItem>
                            <MenuItem value="MMQ">Special MMQ</MenuItem>
                            <MenuItem value="Lainnyaa">Lainnya</MenuItem>
                        </TextField>
                        {
                            isMmq ?
                                <TextField
                                    placeholder="Masukkan Masa Fix"
                                    margin="normal"
                                    className={classes.text}
                                    onChange={handleChange("specialMmq")}
                                    //tambah state baru statusLainnya
                                    defaultValue={values.specialMmq}
                                />
                                : null
                        }
                        {
                            isLainProgram ?
                                <TextField
                                    placeholder="Lainnya"
                                    margin="normal"
                                    className={classes.text}
                                    onChange={handleChange("statusProgram")}
                                    //tambah state baru statusLainnya
                                    defaultValue={values.statusProgram}
                                />
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />
                    {/* Lainnya Belum */}
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Akad Fasilitas yang Diajukan</FormLabel>
                        <TextField
                            label={values.akadDiajukan === "" ? "Pilih Akad Fasilitas yang Diajukan" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleAkad('akadDiajukan')}
                            className={classes.text}
                            defaultValue={values.akadDiajukan}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value={10}>Murabahah</MenuItem>
                            <MenuItem value={20}>MMQ (Musyrakah Mutanaqishah</MenuItem>
                            <MenuItem value={30}>Istishna</MenuItem>
                            <MenuItem value="LainAkad">Lainnya</MenuItem>
                        </TextField>
                        {
                            isAkad ?
                                <TextField
                                    placeholder="Lainnya"
                                    margin="normal"
                                    className={classes.text}
                                    onChange={handleChange("lainAkad")}
                                    //tambah state baru statusLainnya
                                    defaultValue={values.lainAkad}
                                />
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Total Plafon yang Diajukan</FormLabel>
                        <CurrencyTextField
                            name="plafondDiajukan"
                            className={classes.text}
                            onChange={handleChange('plafondDiajukan')}
                            defaultValue={values.plafondDiajukan}
                            margin="normal"
                            currencySymbol="Rp | "
                            decimalCharacter=","
                            digitGroupSeparator="."
                            modifyValueOnWheel={false}
                            inputProps={{ style: { textAlign: 'left' } }}
                        />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Jangka Waktu Pembiayaan (Bulan)</FormLabel>
                        <TextField
                            // style={{marginTop:"8px"}}
                            type='number'
                            placeholder="Pilih Jangka Waktu Pembiayaan"
                            className={classes.text}
                            onChange={handleChange('jangkaWaktuPembiayaan')}
                            defaultValue={values.jangkaWaktuPembiayaan}
                            margin="normal"
                            fullWidth
                        />
                    </FormControl>
                    <br />
                    <br />
                    <div className="footer">
                        <Button
                            className="button1"
                            variant="contained"
                            onClick={this.back}
                        >Kembali</Button>

                        <Button
                            className="button2"
                            variant="contained"
                            onClick={this.continue}
                        >Lanjut</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FasilitasPembayaran);