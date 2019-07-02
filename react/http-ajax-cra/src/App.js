import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

const app = () => 
  <BrowserRouter>
    <div className="App">
      <Blog />
    </div>
  </BrowserRouter>

export default app;
