import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from './Header'
import Home from './Home'
import Shows from '../shows/Shows'
import Booking from '../booking/Booking';
import MovieDetail from '../movies/MovieDetail';

import './App.css';

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <div>
      <Route component={Home} exact path="/" />
      <Route component={Shows} path="/movies/:movieId/shows" />
      <Route path="/movies/:movieId" component={MovieDetail} />
      <Route component={Booking} path="/shows/:showId/booking" />
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
