import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from './Header'
import Home from './Home';
import Booking from './Booking';
import './App.css';

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
  <div>
    <Route component={Home} exact path="/" />
    <Route component={Booking} path="/booking" />
    </div>
  </ConnectedRouter>
);

const Main = () => (
  <div className='container'>
    <Header />
    <div>
      <Routes />
    </div>
  </div>  
);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
