import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card';
import Footer from './components/Footer';
import Home from './components/Home';
import Random from './components/Random';

import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducers/reducer';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//reducer




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/card' element={<Card />} />
            <Route path='/random' element={<Random />}/>
          
          </Routes>
        </BaseLayout>
      </Router>
      <Footer />
  </React.StrictMode>
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
