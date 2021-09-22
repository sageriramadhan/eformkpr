import React, { Component } from 'react';
import { TextField, MenuItem, Button, FormControl, FormLabel } from '@material-ui/core';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import CurrencyTextField from '@unicef/material-ui-currency-textfield/dist/CurrencyTextField';

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
        display: "flex"
    }
});

export class DataPembiayaanDimiliki extends Component {
    state = { checkedA: false, isYa: false }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange, classes, handleKeuangan, isYa } = this.props;

        return (
            <div className="mainPage">
                <div className="mainForm">
                    <p className="judul">Data Pembiayaan yang Dimiliki Saat ini</p>
                    <br />
                    <br />
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.label}>Memiliki Pembiayaan di Bank/Lembaga Keuangan lain</FormLabel>
                        <TextField
                            label={values.pembiayaanBankLain === "" ? "Pilih" : ""}
                            InputLabelProps={{ shrink: false }}
                            onChange={handleKeuangan('pembiayaanBankLain')}
                            className={classes.text}
                            defaultValue={values.pembiayaanBankLain}
                            margin="normal"
                            fullWidth
                            select>
                            <MenuItem value="jikaYa" >Ya</MenuItem>
                            <MenuItem value={10}>Tidak</MenuItem>
                        </TextField>
                        {
                            isYa ?
                                <>
                                    <FormControl >
                                        <FormLabel className={classes.label}>Pembiayaan dengan Outstanding terbesar</FormLabel>
                                        <CurrencyTextField
                                            placeholder="Masukkan Jumlah Pembiayaan"
                                            className={classes.text}
                                            name="ifYaJumlahPembiayaan"
                                            onChange={handleChange('ifYaJumlahPembiayaan')}
                                            defaultValue={values.ifYaJumlahPembiayaan}
                                            margin="normal"
                                            currencySymbol="Rp | "
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            inputProps={{ style: { textAlign: 'left' } }}
                                            modifyValueOnWheel={false}
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <CurrencyTextField
                                            placeholder="Masukan Jumlah Angsuran"
                                            className={classes.text}
                                            onChange={handleChange('ifYaJumlahAngsuran')}
                                            defaultValue={values.ifYaJumlahAngsuran}
                                            margin="normal"
                                            currencySymbol="Rp | "
                                            decimalCharacter=","
                                            digitGroupSeparator="."
                                            modifyValueOnWheel={false}
                                            inputProps={{style: { textAlign: 'left'}}}
                                        />
                                    </FormControl>
                                    <TextField
                                        placeholder="Masukan Jenis Pembiayaan"
                                        className={classes.text}
                                        onChange={handleChange('jenisPembiayaan')}
                                        defaultValue={values.jenisPembiayaan}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        placeholder="Masukan Nama Kreditur"
                                        className={classes.text}
                                        onChange={handleChange('namaKreditur')}
                                        defaultValue={values.namaKreditur}
                                        margin="normal"
                                        fullWidth
                                    />

                                    <FormControl >
                                        <div className={classes.text}>
                                            <p className="date">Jatuh Tempo</p>
                                            <TextField
                                                type="date"
                                                format="YYYY-MM-DD"
                                                id="start_date"
                                                name="start_date"
                                                placeholder="Start Date"
                                                value={this.state.start_date}
                                                onChange={this.onChangeHandle}
                                                className={classes.text}
                                                onChange={handleChange('jatuhTempo')}
                                                defaultValue={values.jatuhTempo}
                                                margin="normal"
                                                fullWidth
                                            />
                                        </div>
                                    </FormControl>

                                </>
                                : null
                        }
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="footer">
                        <Button
                            className="button1"
                            variant="contained"
                            onClick={this.back}
                        >Periksa Kembali</Button>

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

export default withStyles(styles)(DataPembiayaanDimiliki);