import React, {useState, useEffect} from 'react';

const AsyncComp = (importComponent, props) => {
  const [comp, setComp] = useState({component: null})

  useEffect(() => {
    importComponent()
      .then(arg => {
        setComp({component: arg.default})
      })
  }, []);

  const C = comp.component;

  return C ? <C {...props}/> : null;
};

export default AsyncComp;