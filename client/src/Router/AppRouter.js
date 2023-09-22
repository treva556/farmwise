import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import Searchpage from './Searchpage';
import Sellerform from '../pages/Sellerform';
import LoginPage from '../pages/Loginpage';


function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/searchpage" component={Searchpage} />
      <Route path="/sellerform" component={Sellerform} />
      <Route path="/login" component={LoginPage} />

    </Router>
  );
}

export default AppRouter;