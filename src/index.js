import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './components/home';
import Signup from './components/signup';
import login from './components/login';
import Electronics from './components/electronics';
import Cart from './components/cart';
import Notifications from './components/notifications';
import Addp from './components/addproduct';
import Addpform from './components/addpform';
import EditProduct from './components/editproduct';
import InstantBuy from './components/instantbuy';
import Productdes from './components/productdescription';
import ProfileSettings from './components/profileSettings';
import geolocation from './components/geolocation';
ReactDOM.render(
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component ={App} />
          <Route exact path="/signup" component ={Signup} />
          <Route exact path="/login" component ={login} />
          <Route exact path="/cart" component ={Cart} />
          <Route exact path="/notifications" component ={Notifications} />
          <Route exact path="/electronics" component ={Electronics} />
          <Route exact path="/addproduct" component ={Addp} />
          <Route exact path="/addpform" component ={Addpform} />
          <Route exact path="/profilesettings" component ={ProfileSettings} />
          <Route path='/editproduct/:productId?' component={EditProduct} />
          <Route path='/instantbuy/:productId?' component={InstantBuy} />
          <Route path='/productdescription/:productId?' component={Productdes} />
          <Route exact path="/geolocation" component ={geolocation} />
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));