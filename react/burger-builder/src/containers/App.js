import React from 'react';
import './scss/App.module.css';
import { Route } from 'react-router-dom';

import Layout from '../containers/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Details from '../containers/Checkout/Details/Details';
import Orders from '../containers/Orders/Orders';

const app = () => 
  <>
    <Layout>
      <Route exact path='/' component={BurgerBuilder}/>
      <Route path='/orders' component={Orders}/>
      <Route exact path='/checkout/:ingredients/:price' component={Checkout}/>
      <Route path='/checkout/:ingredients/:price/details' component={Details}/>
    </Layout>
  </>

export default app;
