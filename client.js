import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import App from './01_FirstStep_StyledComponents';
// import App from './02_GlobalStyle';
// import App from './03_Animations';
// import App from './04_ExtraAttributesAndMixins';
// import App from './05_Theming';
import App from './06_Nesting';
const Hot = hot(App);


ReactDOM.render(<Hot />, document.querySelector('#root'));