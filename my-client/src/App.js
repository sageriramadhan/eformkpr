import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import { UserForm } from './Pages/UserForm';
import Heading from './Components/Heading';
import logo from './logo.png';
import UserForm2 from './Pages/UserForm2';

const theme = createTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Heading  logo={logo}/>
      <UserForm />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
