import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './components/home';
import Signup from './components/signup';
import login from './components/login';
import Electronics from './components/electronics';
import Cart from './components/cart';
import Notifications from './components/notifications';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component ={App} />
          <Route exact path="/signup" component ={Signup} />
          <Route exact path="/login" component ={login} />
          <Route exact path="/cart" component ={Cart} />
          <Route exact path="/notifications" component ={Notifications} />
          <Route exact path="/electronics" component ={Electronics} />
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));