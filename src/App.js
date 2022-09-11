import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import Products from './components/product/product';
import Login from './components/login/login';
import dosa from './components/images/dosa.jpg';
import coffee from './components/images/coffee.jpg';
import ice from './components/images/ice cream.jpg';
import idly from './components/images/idly.jpg';

import Body from './components/body/body';
import * as React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  const images = [dosa,coffee,ice,idly];
  const [isLoggedin, setLoggedIn] = useState('false');
  const loginHandler = (a) => {
    setLoggedIn(a);
  }
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('login'))
    fetch('https://6316f796cb0d40bc414820c3.mockapi.io/food').then((response) => {
      return response.json()

    }).then((data) => {
      data.forEach((dat, i) => {
        dat.image = images[i % images.length]
      })
      setItems([...data])
    })
  }, []);
  return (
    <div className="App">
        {/* <Header></Header> */}
        <Routes>
            <Route path="/logout" index element={<Login isLoggedin={loginHandler} />}/>
            <Route path="/header" element={<Header></Header>}>
            <Route path="body"element={<Body input={items}></Body>}/>
            <Route path='logout' element={ <Products logout={loginHandler} />} />
            </Route>
            <Route path="/body" element={<Body input={items}></Body>}/>
        </Routes>
      {/* <Header></Header>
      <div className='container'>
        {isLoggedin == 'true' ? <Products logout={loginHandler} /> : <Login isLoggedin={loginHandler} />}
      </div>
      <Body input={items}></Body> */}
    </div>

  );
}

export default App;
