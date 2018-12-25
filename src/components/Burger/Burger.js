import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].fill().map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please insert ingredients</p>;
  }

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;