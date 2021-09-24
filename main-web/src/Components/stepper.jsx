import React from "react";
import "./stepper.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Dialog, AppBar, TextField, MenuItem, FormControl, FormLabel, Grid, InputAdornment,  Box, Typography, Button, ListItem} from '@material-ui/core';
import '../Styles/formStyle.css'
const styles = theme => createStyles({
  root: {
    "& .MuiFormLabel-root": {
      // color: "red"
    }
  },
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
    width: "641px"
  }
});

const Stepper = props => {
  var stepPercentage = 0;

  if (props.currentStep === 2) {
    stepPercentage = 20;
  } else if (props.currentStep === 3) {
    stepPercentage = 40;
  } else if (props.currentStep === 4) {
    stepPercentage = 50;
  } else if (props.currentStep === 5) {
    stepPercentage = 60;
  } else if (props.currentStep === 6) {
    stepPercentage = 80;
  }else if (props.currentStep === 7) {
    stepPercentage = 100;
  }else {
    stepPercentage = 0;
  }

  return (
    <div className="mainForm">
    <ProgressBar percent={stepPercentage} filledBackground="linear-gradient(to right, #a304c7, #70008a)">
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>
          
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>

        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {/* {index + 1} */}
          </div>
        )}
      </Step>
    </ProgressBar>
    </div>
  );
};

export default Stepper;
