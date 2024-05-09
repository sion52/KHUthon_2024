import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail';
import CheckoutPage from './pages/pay';
import { SuccessPage } from './pages/success';
import { FailPage } from './pages/fail';
import Login from './pages/login';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path= '/detail' element= {<Detail />} />
        <Route path= '/pay' element= {<CheckoutPage />} />
        <Route path= '/pay/success' element= {<SuccessPage />} />
        <Route path= '/pay/fail' element= {<FailPage />} />
        <Route path= '/login' element= {<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
