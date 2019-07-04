import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './containers/Main';

const App = () =>
  <BrowserRouter>
    <Main />
  </BrowserRouter>

export default App;