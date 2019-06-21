import React from 'react';

// crate context object
// If authContext is initialized with default values, when authContext is used
// the IDE will provide better autocomplete.  
const authContext = React.createContext({
  authenticated: false, 
  login: () => {}
});

export default authContext;