import React ,{ Fragment } from 'react';
import Header from './common/header'
import { Styled } from './style.js';
import { GlobalStyled } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter ,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import Detail from './pages/detail'



function App() {
  return (
    <Fragment>
      <BrowserRouter>
       <div>
          <Styled />
          <GlobalStyled />
          <Provider store={store}>
              <Header />
              <div>
                <Route path='/' component={Home} exact></Route>
                <Route path='/detail' component={Detail} exact></Route>
              </div>
          </Provider>
        </div>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
