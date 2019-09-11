import React from 'react';
import 'style/test.less'
import { checkPropTypes } from 'prop-types';

function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
