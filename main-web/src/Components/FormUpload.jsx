import React, { Component } from 'react';
import { AppBar, TextField, FormControl, FormLabel, Button } from '@material-ui/core';
import '../Styles/formStyle.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import fileLogo from '../file.svg'

const styles = theme => createStyles({
    label: {
        color: "#490E73",
        fontSize: "12px",
        fontWeight: 600,
        fontFamily: "Open Sans"
    },
    formControl: {
        left: 150,
        right: 150
    },
    text: {
        width: "545px"
    }
});

export class FormUpload extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    state = {
        // Initially, no file is selected 
        selectedKTP: null,
        selectedNPWP: null,
        selectedKK: null,
        selectedSlipGaji: null
    };

    // On file select (from the pop up) 
    onKTPChange = event => {
        // Update the state 
        this.setState({ selectedKTP: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onKTPUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedKTP,
            this.state.selectedKTP.name
        );

        // Details of the uploaded file 
        console.log(this.state.selectedKTP);

        // Request made to the backend api 
        // Send formData object 
        // axios.post("api/uploadfile", formData); 
        console.log(formData)


    };

    // On file select (from the pop up) 
    onNPWPChange = event => {
        // Update the state 
        this.setState({ selectedNPWP: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onNPWPUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedNPWP,
            this.state.selectedNPWP.name
        );

        // Details of the uploaded file 
        console.log(this.state.selectedNPWP);

        // Request made to the backend api 
        // Send formData object 
        // axios.post("api/uploadfile", formData); 
        console.log(formData)


    };

    // On file select (from the pop up) 
    onKKChange = event => {
        // Update the state 
        this.setState({ selectedKK: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onKKUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedKK,
            this.state.selectedKK.name
        );

        // Details of the uploaded file 
        console.log(this.state.selectedKK);

        // Request made to the backend api 
        // Send formData object 
        // axios.post("api/uploadfile", formData); 
        console.log(formData)


    };

    // On file select (from the pop up) 
    onSlipGajiChange = event => {
        // Update the state 
        this.setState({ selectedSlipGaji: event.target.files[0] });
    };

    // On file upload (click the upload button) 
    onSlipGajiUpload = () => {
        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedSlipGaji,
            this.state.selectedSlipGaji.name
        );

        // Details of the uploaded file 
        console.log(this.state.selectedSlipGaji);

        // Request made to the backend api 
        // Send formData object 
        // axios.post("api/uploadfile", formData); 
        console.log(formData)


    };

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {
        const { values, handleChange, classes } = this.props;
        if (this.state.selectedFile) {

            return (

                <div className="mainPage">
                    <div className="mainForm">
                        <p className="judul">Unggah Berkas</p>
                        <br />
                        <br />
                        <AppBar title="Unggah Berkas" />
                        <FormControl className={classes.formControl}>
                            <div>
                                <h2>File Details:</h2>
                                <p>File Name: {this.state.selectedFile.name}</p>
                                <p>File Type: {this.state.selectedFile.type}</p>
                                <p>
                                    Last Modified:{" "}
                                    {this.state.selectedFile.lastModifiedDate.toDateString()}
                                </p>
                            </div>
                        </FormControl>
                    </div>
                </div>
            );
        }
    };

    render() {
        const { values, handleChange, classes } = this.props;
        return (
            <div className="mainPage">
                <div className="mainForm">
                    <p className="judul">Unggah Dokumen</p>
                    <br />
                    <br />
                    <AppBar title="Masukkan Data Pengguna" />
                    <FormControl className={classes.formControl}>
                        <p className="formUploadText">
                            PERHATIAN <br />
                            1. Format file yang dapat diunggah adalah pdf, jpg, jpeg, png.<br />
                            2. Pastikan file yang anda upload terbaca oleh kami untuk di analisa. <br />
                            3. Maksimal setiap file: 2 MB
                        </p>
                        <div className={classes.formControl}>

                            <FormLabel className={classes.label}>Kartu Tanda Penduduk</FormLabel>
                            <div>
                                <TextField InputProps={{ disableUnderline: true }} type="file" onChange={this.onKTPChange} margin="normal" className={classes.text} />
                                <Button variant="contained" onClick={this.onKTPUpload} disabled={!this.state.selectedKTP}>
                                    Upload!
                                </Button>
                            </div>
                            <hr />
                            <FormLabel className={classes.label}>Nomor Pokok Wajib Pajak</FormLabel>
                            <div>
                                <TextField InputProps={{ disableUnderline: true }} type="file" onChange={this.onNPWPChange} margin="normal" fullWidth className={classes.text} />
                                <Button variant="contained" margin="normal" onClick={this.onNPWPUpload} disabled={!this.state.selectedNPWP}>
                                    Upload!
                                </Button>
                            </div>
                            <hr />
                            <FormLabel className={classes.label}>Kartu Keluarga</FormLabel>
                            <div>
                                <TextField InputProps={{ disableUnderline: true }} type="file" onChange={this.onKKChange} margin="normal" fullWidth className={classes.text} />
                                <Button variant="contained" margin="normal" onClick={this.onKKUpload} disabled={!this.state.selectedKK}>
                                    Upload!
                                </Button>
                            </div>
                            <hr />
                            <FormLabel className={classes.label}>Slip Gaji</FormLabel>
                            <div>
                                <TextField InputProps={{ disableUnderline: true }} type="file" onChange={this.onSlipGajiChange} margin="normal" fullWidth className={classes.text} />
                                <Button variant="contained" onClick={this.onSlipGajiUpload} disabled={!this.state.selectedSlipGaji}>
                                    Upload!
                                </Button>
                            </div>
                            <hr />
                        </div>
                        <br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br />
                    </FormControl>
                    {this.fileData()}
                    <div className="footer">
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
export default withStyles(styles)(FormUpload);
