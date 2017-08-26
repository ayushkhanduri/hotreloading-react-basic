import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import FirstComp from './anyComponent';

ReactDOM.render(<FirstComp/>,document.getElementById('app'));


if (module.hot) {
  module.hot.accept();
}