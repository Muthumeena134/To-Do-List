import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';

import HomePage from './Pages/Home';
import NewsPage from './Pages/News';
import SportsPage from './Pages/Sports';

import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/sports" component={SportsPage} />
          <Route path="/entertainment" component={EntertainmentPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;