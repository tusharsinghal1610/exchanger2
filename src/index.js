import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './components/home';
import Signup from './components/signup';



ReactDOM.render(
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component ={App} />
          <Route exact path="/signup" component ={Signup} />
         
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));