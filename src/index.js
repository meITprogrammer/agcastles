import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Bouncycastle from './products/Bouncycastle';
import NewProduct from './products/NewProduct';
import Samplemodal from './products/Samplemodal';
import Samplecard from './products/Samplecard';
import Samplecontainer from './products/Samplecontainer';
import Otherpartyhire from './products/Otherpartyhire';
import Softplayhire from './products/Softplayhire';
import Bookingform from './components/Bookingform';
import Booknow from './components/Booknow'
import Contactus from './components/Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<App />}/>          
          <Route path='/home' element={<Home />}/>            
          <Route path='/about' element={<About />}/>           
          <Route path='/bouncycastle' element={<Bouncycastle/>}/>  
          <Route path='/newproduct' element={<NewProduct/>}/>                     
          <Route path='/samplemodal' element={<Samplemodal/>}/> 
          <Route path='/samplecard' element={<Samplecard/>}/>                     
          <Route path='/samplecontainer' element={<Samplecontainer/>}/>
          <Route path='/otherpartyhire' element={<Otherpartyhire/>}/>
          <Route path='/softplayhire' element={<Softplayhire/>}/>
          <Route path='/bookingform' element={<Bookingform/>}/>
          <Route path='/booknow' element={<Booknow/>}/> 
          <Route path='/contactus' element={<Contactus/>}/>                     
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
