import React from 'react';

import Aux from '../../hoc/Aux';

import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar />

    <main className={'Container'}>{props.children}</main>
  </Aux>
);

export default layout;
