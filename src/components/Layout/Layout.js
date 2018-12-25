import React from 'react';

import Aux from '../../hoc/Aux';

import './layout.css';

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>

    <main className={'Container'}>{props.children}</main>
  </Aux>
);

export default layout;
