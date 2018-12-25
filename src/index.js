import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';

import Layout from './components/Layout/Layout';
import BurgerBuild from './containers/BurgerBuild/BurgerBuild';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuild />
        </Layout>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
