import React from 'react';
import './scss/App.module.css';
import { Route } from 'react-router-dom';

import Layout from '../containers/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';

const app = () => 
  <>
    <Layout>
      <Route path='/' exact component={BurgerBuilder}/>
      <Route path='/checkout/:ingredients' component={Checkout}/>
    </Layout>
  </>

export default app;
