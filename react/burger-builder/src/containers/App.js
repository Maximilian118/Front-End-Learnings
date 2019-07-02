import React from 'react';
import './scss/App.module.css';

import Layout from '../containers/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

const app = () => 
  <>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </>

export default app;
