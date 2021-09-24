import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
// import axios from 'axios'
import Button from '@material-ui/core/Button';
import '../Styles/formStyle.css'
import stepper from "../selesai.PNG"
import ok from "../ok.PNG"

//import qs from 'qs'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount(props) {
    console.log(this.props.NIK)
    // axios({
    //   url : "http://localhost:9000/user/api/create",
    //   method : 'post',
    //   headers : {

    //   },
    //   data : {
    //     NIK : this.props.NIK,
    //     fullName : this.props.fullName,
    //     email : this.props.email,
    //     province : this.props.province,
    //     city :this.props.city,
    //     district : this.props.district
    //   }
    // })
    // .then((response) => console.log(response))
    // .catch((err)=>console.log(err))

    //   axios("http://localhost:9000/user/api/getall",{
    //   method : 'GET'
    // }).then((response) => console.log("Berhasil"))
    // .catch((err)=>console.log(err))
    // console.log("Diluar Axios")
  }
  render() {

    return (
      <div className="mainPage">
        <div className="mainForm">
          <div className="stepper">
            <img src={stepper} className="stepperImage" />
          </div>
          <div className="mainContent">
            <div className="success">
              <img src={ok} className="successImage" />
            </div>
            <AppBar title="Success" />
            <h1 className="alertBerhasil">
              Berhasil!
              <br />
              Data Kamu Berhasil Disimpan
            </h1>
            <div className="buttonContainer">
              <Button
                className="buttonSuccessPage"
                variant="contained"
                onClick href="/profile"
              >Lanjutkan</Button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Success;
