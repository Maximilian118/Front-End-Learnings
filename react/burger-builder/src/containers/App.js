import React, {Component, Fragment} from 'react';
import './scss/App.module.css';

import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Fragment>
    );
  };
};

export default App;
