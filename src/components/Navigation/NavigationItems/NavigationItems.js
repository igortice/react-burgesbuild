import React from 'react';

import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' active>Burger Build</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
