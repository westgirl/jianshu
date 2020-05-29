import React ,{ Fragment } from 'react';
import Header from './common/header'
import { Styled } from './style.js';
import { GlobalStyled } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Fragment>
        <Styled />
        <GlobalStyled />
        <Provider store={store}>
            <Header />
        </Provider>
    </Fragment>
    
  );
}

export default App;
