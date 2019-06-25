import React from 'react';
const WithClass = props => <div className={props.classes} onClick={props.onClick}>{props.children}</div>;
export default WithClass;