import React, { Component } from "react";
import { render } from "react-dom";
import TextField from '@material-ui/core/TextField';
import InputMask from "react-input-mask";
import '../Styles/DataSuamiIstri.css'

// to run more then once, comment next line out
// injectTapEventPlugin()

export default class SelectFieldExampleSimple extends Component {
//   constructor(props) {
//     super(props);
//     this.values = {
//       value: null
//     };
//     this.onChange = data => {
//       this.setState({ phone: data.target.value });
//     };
//   }

  render() {
    const {values,handleChange} = this.props
    return (
        <div>
          <text className="subformTitle">Nomor Telepon Atasan</text>
          <div>
            <InputMask
              mask="+62 | 999-999-999-999"
            //   value={values.teleponAtasanSuamiIstri}
            //   onChange={handleChange}
              disabled={false}
              maskChar=" "
            >
              {() => <TextField 
              placeholder="+62|xxx-xxx-xxx"
              name='teleponAtasanSuamiIstri'
            //   onChange={handleChange}
            //   defaultValue={values.teleponAtasanSuamiIstri}
              fullWidth
              margin='dense'/>}
            </InputMask>
          </div>
        </div>
    );
  }
}

render(<SelectFieldExampleSimple />, document.getElementById("root"));
