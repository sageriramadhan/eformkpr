import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Main from './Pages/Main';
import Header from './Components/Header';
import logo from './logo.png';

const theme = createTheme();

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <Header  logo={logo}/>
        {/* <Switch>
          <Route path='/' component={DataPekerjaanSuamiIstri}/>
        </Switch> */}
        <Main />
      </div>
      </MuiThemeProvider>

    </Router>
  );
}

export default App;