import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Main from './Pages/Main';
import DataPekerjaanSuamiIstri from './Components/DataPekerjaanSuamiIstri';

const theme = createTheme();

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
      <div className="App">
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