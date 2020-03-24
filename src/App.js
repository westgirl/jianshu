import React ,{ Fragment } from 'react';
import Header from './common/header'
import { Styled } from './style.js';
import { GlobalStyled } from './statics/iconfont/iconfont';

function App() {
  return (
    <Fragment>
        <Styled />
        <GlobalStyled />
        <Header />
    </Fragment>
    
  );
}

export default App;
