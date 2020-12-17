import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddImages from './Components/AddImages';
import Homepage from './Components/Homepage';
import { Provider } from 'react-redux';
import reducer from './Reducer/state';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <NavBar/>
        <Route exact path="/" component={Homepage}/>
        <Route path="/AddImages" component={AddImages}/>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
