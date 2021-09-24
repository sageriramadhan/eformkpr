import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import UserForm from './Pages/UserForm';
import Login from './Pages/Login';
import Heading from './Components/Heading';
import logo from './logo.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register  from './Pages/Register';
import Profile from './Pages/Profile';
// import UserForm2 from './Pages/UserForm2';


const theme = createTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Heading logo={logo} />
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/UserForm" component={UserForm}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
          {/* <UserForm /> */}
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
